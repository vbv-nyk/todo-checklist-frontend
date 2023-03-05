import Image from "next/image";

export default function TodoOptions({ id, setEditing }) {
    const height = 18, width = 18;
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
        <div className="flex flex-row justify-center gap-2">
            <Image src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" alt="" height={height} width={width} className="cursor-pointer" onClick={() => setEditing(true)} />
            <Image onClick={() => deleteTodo()} src="https://www.svgrepo.com/show/21045/delete-button.svg" height={height} width={width} alt="" className="cursor-pointer" />
            <Image src="https://cdn-icons-png.flaticon.com/512/565/565495.png" height={height} width={width} alt="" className="cursor-pointer" onClick={() => todoMarkDone()} />
        </div>
    )
}