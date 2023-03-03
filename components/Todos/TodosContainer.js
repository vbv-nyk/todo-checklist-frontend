import { useEffect, useState } from "react";
import AddTodo from "./AddTodos";
import Todo from "./Todo";
import { TodosHeader } from "./TodosHeader";

export default function TodosContainer() {
    const URL = "http://192.168.0.103:3000"
    const [todosData, setTodosData] = useState(null);
    const [showAddTodo, setShowAddTodo] = useState(false);

    async function fetchData() {
        const todos = await (await fetch(`${URL}/Todos`)).json();
        console.log(todos);
        setTodosData(todos);
    }
    useEffect(() => {
        fetchData();
    }, [])

    if (!todosData) {
        return <div>Loading Your Todos</div>
    }

    const Todos = todosData.map((todo) => {
        return <Todo key={todo._id} id={todo._id} title={todo.title} note={todo.note} iconURL={todo.iconURL} link={todo.link} />
    })
    return (<div className="flex flex-col gap-1 p-6 bg-slate-700">
        <TodosHeader setShowAddTodo={setShowAddTodo} showAddTodo={showAddTodo} />
        <div className="flex flex-col gap-2">
            {showAddTodo && (<AddTodo />)}
            <>
                {Todos}
            </>
        </div>
    </div>)
}