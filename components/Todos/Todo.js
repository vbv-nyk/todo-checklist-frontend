import Image from "next/image";
import { useRef, useState } from "react";
import ImageForm from "./SubComponents/ImageForm";
import TodoOptions from "./SubComponents/TodoOptions";

export default function Todo({ title, note, link, iconURL, id, done }) {
    const URL = "http://192.168.0.103:3000"
    const [editing, setEditing] = useState(false);
    const titleRef = useRef(null);
    const noteRef = useRef(null);

    async function updateTodo() {
        const title = titleRef.current.value;
        const note = noteRef.current.value;

        const data = await fetch(`${URL}/Todos/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                title, note
            })
        });

        setEditing(false);
        console.log(data);
    }

    if (editing) {
        return (
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col justify-center gap-2 p-5 rounded-xl bg-slate-800">
                <div>
                    <div className="flex flex-row flex-wrap items-center gap-2 shrink-0">
                        <div className="w-auto h-auto">
                            <Image src={iconURL} alt={"Image Url"} height={5} width={20} />
                        </div>
                        <div>
                            <input className="p-1 text-sm font-semi w-fit bold w-min-fit bg-slate-600" ref={titleRef} defaultValue={title} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    <input className="w-full p-2 text-sm break-all bg-slate-600" ref={noteRef} defaultValue={note} />
                    <div className="flex gap-2">
                        <button className="px-3 py-2 text-sm bg-green-600" onClick={() => updateTodo()}>Save</button>
                        <button className="px-3 py-2 text-sm bg-red-600" onClick={() => setEditing(false)}>Cancel</button>
                    </div>
                </div>
            </form>
        )
    }

    return (<div className="flex flex-col items-start justify-start gap-2 p-4 rounded-lg shadow-lg shadow-slate-800 bg-slate-600 ">
        <div className="flex flex-row items-center gap-2 shrink-0">
            <div className="w-auto h-auto">
                <Image src={iconURL} alt={"Image Url"} height={5} width={20} />
            </div>
            {link !== "" ? <a href={link} target={"_blank"} className={"font-semibold text-lg"}>{title}</a> : <div className="text-lg font-semibold">{title}</div>}
            {!done && <div>
                <TodoOptions id={id} setEditing={setEditing} />
            </div>}
        </div>
        <div className="break-all">{note}</div>
    </div>)
} 