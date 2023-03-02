import { text } from "d3";
import { useState } from "react";



export default function AddTodo() {
    const [page, setPage] = useState(1);
    const [imageURL, setImageURL] = useState("https://cdn.iconscout.com/icon/premium/png-512-thumb/todo-list-1540192-1305387.png?f=avif&w=256");


    function checkIfImageExists(url, callback) {
        const img = new Image();
        img.src = url;

        if (img.complete) {
            callback(true);
        } else {
            img.onload = () => {
                callback(true);
            };

            img.onerror = () => {
                callback(false);
            };
        }
    }

    function imageValidation(e) {
        checkIfImageExists(e.target.value, (result) => {
            if (result) setImageURL(e.target.value)
            else setImageURL("https://cdn.iconscout.com/icon/premium/png-512-thumb/todo-list-1540192-1305387.png?f=avif&w=256")
        })
    }

    if (page === 1) {
        return (
            <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-lg font-semibold">Image Preview</div>
                <div>
                    <img src={imageURL} alt={""} width={80} height={80} />
                </div>
                <div className="flex flex-col gap-2 text-sm">
                    <div>Enter Image URL</div>
                    <input className="bg-slate-500" type={"text"} onChange={((e) => e.target.value && imageValidation(e))} />
                </div>
            </div>
        )
    }
}