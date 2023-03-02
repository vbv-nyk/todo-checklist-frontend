export default function TitleForm({ page, setPage }) {
    return (
        <div className="flex flex-col gap-5 p-5 text-sm rounded-lg bg-slate-600">
            <div className="text-lg font-bold text-center">Step 2: Enter Todo Details</div>
            <div className="grid gap-2 grid-rows-todoLayout grid-cols-todoLayout">
                <div className="flex flex-col col-start-1 col-end-2 gap-1">
                    <label for="title" className="text-xs">Title For Todo</label>
                    <input id="title" className="p-2 bg-slate-500" />
                </div>
                <div className="flex flex-col col-start-1 col-end-2 gap-1">
                    <label for="link" className="text-xs">External Website URL</label>
                    <input id="link" className="p-2 bg-slate-500" />
                </div>
                <div className="flex flex-col col-start-2 col-end-4 row-start-1 row-end-3 gap-1">
                    <label for="notes" className="text-xs">Add Notes</label>
                    <textarea id="notes" className="flex-grow w-full p-2 resize-none bg-slate-500" />
                </div>
            </div>
            <button className="self-center px-3 py-2 text-center bg-slate-500">Add</button>
        </div>
    )
}