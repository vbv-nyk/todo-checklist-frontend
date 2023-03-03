import Image from "next/image";
import { useState } from "react";
import ImageForm from "./SubComponents/ImageForm";
import TodoOptions from "./SubComponents/TodoOptions";

export default function Todo({ title, note, link, iconURL, id }) {
    const [editing, setEditing] = useState(false);

    if (editing) {
        return (
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col justify-center gap-2 p-5 rounded-xl bg-slate-800">
                <div>
                    <div className="flex flex-row flex-wrap items-center gap-2 shrink-0">
                        <div className="w-auto h-auto">
                            <Image src={iconURL} alt={"Image Url"} height={5} width={20} />
                        </div>
                        <div>
                            <input className="p-1 text-sm font-semi w-fit bold w-min-fit bg-slate-600" value={title} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    <input className="w-full p-2 text-sm break-all bg-slate-600" value={note} />
                    <div className="flex gap-2">
                        <button className="px-3 py-2 text-sm bg-green-600">Save</button>
                        <button className="px-3 py-2 text-sm bg-red-600">Cancel</button>
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
            <div>
                <TodoOptions id={id} setEditing={setEditing} />
            </div>
        </div>
        <div className="break-all">{note}</div>
    </div>)
} 