import Image from "next/image";
import { useRef, useState } from "react";
import ImageForm from "./SubComponents/ImageForm";
import TodoOptions from "./SubComponents/TodoOptions";

export default function Todo({ title, note, link, iconURL, id, done }) {
    const URL = "http://192.168.0.103:3000"
    const [iconForm, setIconForm] = useState(false);
    const [editing, setEditing] = useState(false);
    const titleRef = useRef(null);
    const noteRef = useRef(null);

    let titleMarkup = title;
    let noteMarkup = note;

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
                        <div className="w-full h-full">
                            <div className="flex flex-row">
                                <Image src={iconURL} alt={"Image Url"} height={5} width={20} className="h-5 hover:cursor-pointer " onClick={() => setIconForm(n => !n)} />
                                {iconForm && <form onSubmit={(e) => e.preventDefault()} className="relative flex flex-col w-full gap-2 p-4 -mb-8 text-sm h-fit bg-slate-800 bottom-5">
                                    <div className="flex flex-col gap-1">
                                        <label>Icon URL</label>
                                        <input defaultValue={iconURL} className="w-full p-1 bg-slate-600" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label>External website URL</label>
                                        <input defaultValue={link} className="w-full p-1 bg-slate-500" />
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <button type="submit" className="px-3 py-2 bg-green-600">Save</button>
                                        <button className="px-3 py-2 bg-red-600" onClick={() => setIconForm(false)} >Cancel</button>
                                    </div>
                                </form>}
                            </div>
                        </div>
                        {!iconForm && <div className="flex flex-col gap-1">
                            <input className="p-1 text-sm font-semi w-fit bold w-min-fit bg-slate-600" ref={titleRef} defaultValue={title} />
                        </div>}
                    </div>
                </div>
                {!iconForm && <div className="flex flex-wrap gap-2 md:flex-nowrap">
                    <input className="w-full p-1 text-sm break-all bg-slate-600" ref={noteRef} defaultValue={note} />
                    <button className="px-3 py-2 text-sm bg-green-600" onClick={() => updateTodo()}>Save</button>
                    <button className="px-3 py-2 text-sm bg-red-600" onClick={() => setEditing(false)}>Cancel</button>
                </div>}
            </form>
        )
    }


    return (<div className="flex flex-col items-start justify-start gap-2 p-4 rounded-lg shadow-lg shadow-slate-800 bg-slate-600 ">
        <div className="flex flex-row items-center gap-2 shrink-0">
            <div className="w-auto h-auto">
                <Image src={iconURL} alt={"Image Url"} height={5} width={20} />
            </div>
            {link !== "" ? <a href={link} target={"_blank"} className={"font-semibold text-lg"}>{titleMarkup}</a> : <div className="text-lg font-semibold">{titleMarkup}</div>}
            {!done && <div>
                <TodoOptions id={id} setEditing={setEditing} />

            </div>}
            {done && <div className="text-green-400">Done</div>}
        </div>
        <div className="break-all">{noteMarkup}</div>
    </div>)
} 