import { useState } from "react";

export default function ImageForm({ imageURL, setImageURL, setPage }) {


    function checkIfImageExists(url) {
        const img = new Image();
        img.src = url;

        if (img.complete) {
            setImageURL(url);
        } else {
            img.onload = () => {
                setImageURL(url);
            };
            img.onerror = () => {
                setImageURL("https://cdn.iconscout.com/icon/premium/png-512-thumb/todo-list-1540192-1305387.png?f=avif&w=256");
            };
        }
    }

    return (
        <div className="flex flex-col items-center justify-center gap-5 p-4 mx-auto text-sm rounded-lg bg-slate-800 w-fit">
            <div className="text-lg font-semibold">Step 1: Enter Todo Image</div>
            <div className="flex flex-col items-center gap-2">
                <div className="text-sm">Image Preview</div>
                <div className="w-auto h-auto p-5 bg-slate-700 ">
                    <img src={imageURL} alt={""} width={80} height={80} />
                </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
                <div className="text-xs ">Enter Image URL: </div>
                <div className="flex flex-row items-center gap-2 text-sm">
                    <input className="p-2 bg-slate-500" type={"text"} placeholder={"Leave blank for default"} onChange={((e) => e.target.value && checkIfImageExists(e.target.value))} />
                    <button className="px-3 py-2 bg-slate-500" onClick={() => setPage(n => n + 1)}>Next</button>
                </div>
            </form>
        </div>
    )
}