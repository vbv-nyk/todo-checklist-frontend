import { text } from "d3";
import { useState } from "react";
import ImageForm from "./SubComponents/ImageForm";
import TitleForm from "./SubComponents/TitleForm";



export default function AddTodo() {
    const [page, setPage] = useState(1);

    if (page === 1) {
        return <ImageForm page={page} setPage={setPage} />
    }

    if (page === 2) {
        return <TitleForm page={page} setPage={setPage} />

    }
}