import Image from "next/image";

export default function TitleForm({ page, setPage }) {
    return (
        <div className="flex flex-col items-center gap-5 p-10 mx-auto text-sm rounded-lg bg-slate-800 w-fit ">
            <div className="text-lg font-bold text-center">Step 2: Enter Todo Details</div>
            <div className="flex flex-row gap-2">
                <Image className="max-sm:hidden" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/GNOME_Todo_icon_2019.svg/1200px-GNOME_Todo_icon_2019.svg.png"} alt="" width={220} height={200} />
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col col-start-1 col-end-2 gap-1">
                        <label for="title" className="text-xs">Title For Todo</label>
                        <input id="title" className="p-2 bg-slate-500" />
                    </div>
                    <div className="flex flex-col col-start-1 col-end-2 gap-1">
                        <label for="link" className="text-xs">External Website URL</label>
                        <input id="link" className="p-2 bg-slate-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label for="notes" className="text-xs">Add Notes</label>
                        <textarea id="notes" className="flex-grow w-full p-2 resize-none bg-slate-500" />
                    </div>
                </div>
            </div>
            <button className="self-center w-1/2 px-3 py-2 text-center bg-slate-500">Add</button>
        </div>
    )
}