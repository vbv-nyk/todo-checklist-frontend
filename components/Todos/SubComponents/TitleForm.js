import { json } from "d3";
import Image from "next/image";
import { useRef } from "react";

export default function TitleForm({ page, setPage, imageURL }) {
    const URL = "http://192.168.103:3001";
    const titleRef = useRef(null);
    const linkRef = useRef(null);
    const noteRef = useRef(null);

    const noError = {
        border: "solid 1px transparent"
    }

    async function AddTodo() {
        const title = titleRef.current.value;
        const link = linkRef.current.value;
        const note = noteRef.current.value;

        console.log(title, link, note);

        if (!title) {
            titleRef.current.style.border = "solid 1px red"
            return;
        }
        if (!note) {
            noteRef.current.style.border = "solid 1px red"
            return;
        }

        const res = await fetch(`${URL}/Todos/`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: (JSON.stringify({
                title, link, note, iconURL: imageURL
            }))
        });
        console.log(res.json());
    }

    return (
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col items-center gap-5 p-10 mx-auto text-sm rounded-lg bg-slate-800 w-fit ">
            <div>
                <div className="text-lg font-bold text-center">Step 2: Enter Todo Details</div>
                <div className="text-xs"><i>Fields marked with * are mandatory</i></div>
            </div>
            <div className="flex flex-row gap-2">
                <Image className="max-sm:hidden" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/GNOME_Todo_icon_2019.svg/1200px-GNOME_Todo_icon_2019.svg.png"} alt="" width={220} height={200} />
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col col-start-1 col-end-2 gap-1">
                        <label for="title" className="text-xs">Title For Todo *</label>
                        <input onFocus={(e) => e.target
                            .style = noError.border} style={noError} id="title" ref={titleRef} className="p-2 bg-slate-500" />
                        {/* <div>This is a required field</div> */}

                    </div>
                    <div className="flex flex-col col-start-1 col-end-2 gap-1">
                        <label htmlFor="link" className="text-xs">Link To Website</label>
                        <input onFocus={(e) => e.target
                            .style = noError.border} style={noError} id="link" ref={linkRef} className="p-2 bg-slate-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="notes" className="text-xs">Add Notes *</label>
                        <textarea onFocus={(e) => e.target
                            .style = noError.border} style={noError} id="notes" ref={noteRef} className="flex-grow w-full p-2 resize-none bg-slate-500" />
                    </div>
                </div>
            </div>
            <button className="self-center w-1/2 px-3 py-2 text-center bg-slate-500" onClick={() => AddTodo()}>Add</button>
        </form >
    )
}