import { URL } from "@/pages/api/global";
import { useEffect, useState } from "react";
import TodoCalendar from "./Chart/Chart";
import AddTodo from "./AddTodos";
import Todo from "./Todo";
import Draggable, { DraggableCore } from "react-draggable";
import { TodosHeader } from "./SubComponents/TodosHeader";

export default function TodosContainer() {
    const [todosData, setTodosData] = useState(null);
    const [showAddTodo, setShowAddTodo] = useState(false);

    async function fetchData() {
        const todos = await (await fetch(`${URL}/Todos`)).json();
        setTodosData(todos);
    };

    useEffect(() => {
        fetchData();
    }, [])

    if (!todosData) {
        return <div>Loading Your Todos</div>
    }

    const Todos = todosData
        .map(todo => {
            return (
                <Todo
                    key={todo._id}
                    id={todo._id}
                    title={todo.title}
                    note={todo.note}
                    iconURL={todo.iconURL}
                    link={todo.link}
                    done={todo.done}
                    todosData={todosData}
                    setTodosData={setTodosData}
                />
            );
        });

    return (<div className="flex flex-col gap-1 p-6 m-5 bg-slate-700 rounded-2xl">
        <div className="flex flex-col justify-start">
            <div className="p-2 text-xl font-bold">Overall Stats</div>
            <TodoCalendar todos={todosData} setTodosData={setTodosData} />
        </div>
        <TodosHeader setShowAddTodo={setShowAddTodo} showAddTodo={showAddTodo}
            setTodosData={setTodosData}
            todosData={todosData} />
        <div className="relative flex flex-col gap-2 todo-container">
            {showAddTodo && (<AddTodo setShowAddTodo={setShowAddTodo} setTodosData={setTodosData}
                todosData={todosData} />)}
            <>
                {Todos}
            </>
        </div>
    </div>)
}
