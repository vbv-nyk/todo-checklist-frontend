import 'react-tooltip/dist/react-tooltip.css'
import { Dropdown } from "flowbite-react";
import { Tooltip } from 'react-tooltip'
import { useState } from 'react';
import Todo from '../Todo';
import { URL } from '@/pages/api/global';

export function TodosHeader({ showAddTodo, setShowAddTodo, todosData, setTodosData }) {
    const [dropdown, setDropdown] = useState(false);


    async function sortAscending() {
        const todos = await (await fetch(`${URL}/Todos`)).json();
        const Todos = todos
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map(todo => {
                return todo;

            });
        console.log(Todos);
        setTodosData(Todos);
        setDropdown(false);
    }

    async function sortDescending() {
        const todos = await (await fetch(`${URL}/Todos`)).json();
        const Todos = todos
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(todo => {
                return todo;
            });
        console.log(Todos);
        setTodosData(Todos);
        setDropdown(false);
    }

    async function showDone() {
        const todos = await (await fetch(`${URL}/Todos`)).json();
        const Todos = todos.filter((todo) => todo.done)
        console.log(Todos);
        setTodosData(Todos);
        setDropdown(false);
    }

    async function showNotDone() {
        const todos = await (await fetch(`${URL}/Todos`)).json();
        const Todos = todos.filter(todo => !todo.done);
        console.log(Todos);
        setTodosData(Todos);
        setDropdown(false);
    }

    return (<div className="flex items-center justify-between p-4">
        <div className="mb-2 text-xl font-bold text-white">Your Todos</div>
        <div className="flex items-center gap-2 mb-2 font-bold">
            {!showAddTodo && <button className="px-3 py-2 mb-2 rounded-sm bg-slate-600" onClick={(e) => setShowAddTodo(n => !n)}>Add</button>}
            {showAddTodo && <button className="px-3 py-2 mb-2 rounded-sm bg-slate-600" onClick={(e) => setShowAddTodo(n => !n)}>Cancel</button>}
            <div>
                <button className="px-3 py-2 mb-2 rounded-sm bg-slate-800" onClick={(e) => {
                    setDropdown(n => !n)
                }
                }>Sort</button>
                {dropdown && (
                    <div>
                        <ul className='absolute z-10 p-2 right-10 rounded-2xl bg-slate-800'>
                            <li className='p-3 text-center border-b-2 hover:cursor-pointer' onClick={() => sortAscending()}>Ascending</li>
                            <li className='p-3 text-center border-b-2 hover:cursor-pointer' onClick={() => sortDescending()}>Descending</li>
                            <li className='p-3 text-center border-b-2 hover:cursor-pointer' onClick={() => showDone()}>Done</li>
                            <li className='p-3 text-center hover:cursor-pointer' onClick={() => showNotDone()}>Todo</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    </div>)
}