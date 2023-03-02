import { text } from "d3";
import { useState } from "react";
import ImageForm from "./SubComponents/ImageForm";



export default function AddTodo() {
    const [page, setPage] = useState(1);

    if (page === 1) {
        return <ImageForm />
    }
}