import Image from "next/image";

export default function TodoOptions({ id, setEditing, todosData, setTodosData, done }) {
    const height = 16, width = 18;
    const URL = "http://localhost:3000"

    async function todoMarkDone() {
        const res = await (await fetch(`${URL}/Todos/${id}`, {
            method: "PUT",
            "headers": {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                done: true
            })
        })).json();

        const todos = await (await fetch(`${URL}/Todos`)).json();
        console.log(todos);
        setTodosData(todos);
    }

    async function deleteTodo() {
        const res = await (await fetch(`${URL}/Todos/${id}`, {
            method: "DELETE"
        })).json();

        const todos = await (await fetch(`${URL}/Todos`)).json();
        console.log(todos);
        setTodosData(todos);
    }
    return (
        <div className="flex flex-row items-start justify-center gap-2 text-sm font-bold">
            {!done && <>
                <button alt="" className="px-3 py-1 bg-green-600 cursor-pointer" onClick={() => todoMarkDone()}>Done</button>
                <button alt="" className="px-3 py-1 bg-blue-600 cursor-pointer" onClick={() => setEditing(true)} >Edit</button>
            </>}
            <button onClick={() => deleteTodo()} alt="" className="px-3 py-1 bg-red-600 cursor-pointer">Delete</button>
        </div>
    )
}