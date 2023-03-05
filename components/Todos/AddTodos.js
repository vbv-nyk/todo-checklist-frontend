import { text } from "d3";
import { useState } from "react";
import ImageForm from "./SubComponents/ImageForm";
import TitleForm from "./SubComponents/TitleForm";



export default function AddTodo({ setShowAddTodo, setTodosData,
    todosData }) {
    const [page, setPage] = useState(1);
    const [imageURL, setImageURL] = useState("https://cdn.iconscout.com/icon/premium/png-512-thumb/todo-list-1540192-1305387.png?f=avif&w=256");

    if (page === 1) {
        return <ImageForm imageURL={imageURL} setImageURL={setImageURL} setPage={setPage} />
    }

    if (page === 2) {
        return <TitleForm imageURL={imageURL} todosData={todosData} setTodosData={setTodosData} setShowAddTodo={setShowAddTodo} />

    }
}