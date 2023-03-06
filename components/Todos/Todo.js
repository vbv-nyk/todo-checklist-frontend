import { URL } from "@/pages/api/global";
import Image from "next/image";
import { useRef, useState } from "react";
import checkIfImageExists from "../../HelperFunctions/CheckImage";
import { validateURL } from "./SubComponents/TitleForm";
import TodoOptions from "./SubComponents/TodoOptions";

export default function Todo({ title, note, link, iconURL, id, done, todosData, setTodosData }) {
    const [iconForm, setIconForm] = useState(false);
    const [editing, setEditing] = useState(false);
    const [invalidLink, setInvalidLink] = useState(false);
    const [imageExists, setImageExists] = useState(true);
    const [imageSrc, setImageSrc] = useState(iconURL);

    const titleRef = useRef(null);
    const noteRef = useRef(null);
    const iconRef = useRef(null);
    const linkRef = useRef(null);

    const noError = {
        border: "solid 1px transparent"
    }

    let titleMarkup = title;
    let noteMarkup = note;


    async function updateLinks() {
        const link = linkRef.current.value;
        if (link && !validateURL(link)) {
            linkRef.current.style.border = "solid 1px red";
            setInvalidLink(true);
            return false;
        }

        console.log(imageSrc);

        const data = await fetch(`${URL}/Todos/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                link, iconURL: imageSrc
            })
        });

        setEditing(false);
        console.log(data);
    }

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
        if (iconForm)
            return (<form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-full gap-2 p-4 text-sm rounded-2xl h-fit bg-slate-800 bottom-5">
                <Image src={imageSrc} alt={"Image Url"} height={10} width={22} className="w-20 h-20 hover:cursor-pointer" onClick={() => setIconForm(n => !n)} />

                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <label>Icon URL {!imageExists && <span className="p-2 italic text-red-400">(Image does not exist)</span>}</label>
                    </div>
                    <input ref={iconRef} onChange={(e) => {
                        if (checkIfImageExists(e.target.value)) {
                            setImageSrc(e.target.value)
                            setImageExists(true);
                        } else {
                            setImageSrc(iconURL);
                            setImageExists(false);
                        }
                    }
                    } defaultValue={iconURL} className="w-full p-1 bg-slate-600" />
                </div>
                <div className="flex flex-col gap-1">
                    <label>External website URL {invalidLink && <span className="p-2 italic text-red-400"> (Invalid URL)</span>}</label>
                    <input defaultValue={link}
                        ref={linkRef} onFocus={(e) => {
                            setInvalidLink(false)
                            e.target.style = noError.border
                        }} className="w-full p-1 bg-slate-600"
                        placeholder="" />
                </div>
                <div className="flex flex-row gap-2">
                    <button type="submit" className="px-3 py-2 bg-green-600" onClick={() => updateLinks()}>Save</button>
                    <button className="px-3 py-2 bg-red-600" onClick={() => setIconForm(false)} >Cancel</button>
                </div>
            </form>)

        return (
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col justify-center gap-2 p-5 rounded-xl bg-slate-800">
                <div>
                    <div className="flex flex-row flex-wrap items-center gap-2 shrink-0">
                        <div className="w-full h-full">
                            <div className="flex flex-row">
                                <Image src={iconURL} alt={"Image Url"} height={5} width={20} className="w-10 h-10 p-2 hover:cursor-pointer bg-slate-600" onClick={() => setIconForm(n => !n)} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <input className="p-1 text-sm font-semi w-fit bold w-min-fit bg-slate-600" ref={titleRef} defaultValue={title} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 md:flex-nowrap">
                    <input className="w-full p-1 text-sm break-all bg-slate-600" ref={noteRef} defaultValue={note} />
                    <button className="px-3 py-2 text-sm bg-green-600" onClick={() => updateTodo()}>Save</button>
                    <button className="px-3 py-2 text-sm bg-red-600" onClick={() => setEditing(false)}>Cancel</button>
                </div>
            </form>
        )

    }
    return (
        <div className="flex flex-col items-start justify-start w-full gap-2 p-4 rounded-lg shadow-lg shadow-slate-800 bg-slate-600 ">
            <div className="flex flex-row items-center justify-between w-full gap-2 shrink-0">
                <div className="flex flex-row items-center w-auto h-auto gap-1">
                    <Image src={iconURL} className="h-5" alt={"Image Url"} height={5} width={20} />
                    {link !== "" ? <a href={link} target={"_blank"} className={"font-semibold5 text-lg"}>{titleMarkup}</a> : <div className="text-lg font-semibold">{titleMarkup}</div>}
                </div>
                <div className="flex flex-row gap-3">
                    {done && <div className="text-green-400">Done</div>}
                    <TodoOptions id={id} setEditing={setEditing} todosData={todosData} setTodosData={setTodosData} done={done} />
                </div>
            </div>
            <div className="break-all">{noteMarkup}</div>
        </div>
    )
}
