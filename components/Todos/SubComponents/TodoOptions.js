import Image from "next/image";

export default function TodoOptions({ id, setEditing }) {
    const height = 16, width = 18;
    const URL = "http://192.168.0.103:3000"

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
        console.log(res);
    }

    async function deleteTodo() {
        const res = await (await fetch(`${URL}/Todos/${id}`, {
            method: "DELETE"
        })).json();
        console.log(res);
    }
    return (
        <div className="flex flex-row items-start justify-center gap-2 text-sm font-bold">
            <button alt="" className="px-3 py-1 bg-blue-500 cursor-pointer" onClick={() => setEditing(true)} >Edit</button>
            <button onClick={() => deleteTodo()} alt="" className="px-3 py-1 bg-red-500 cursor-pointer">Delete</button>
            <button alt="" className="px-3 py-1 bg-green-500 cursor-pointer" onClick={() => todoMarkDone()}>Done</button>
        </div>
    )
}