import { URL } from "@/pages/api/global";
import { useEffect, useState } from "react";
import TodoCalendar from "./Chart/Chart";
import AddTodo from "./AddTodos";
import Todo from "./Todo";
import { TodosHeader } from "./SubComponents/TodosHeader";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function TodosContainer() {
    const [todosData, setTodosData] = useState(null);
    const [showAddTodo, setShowAddTodo] = useState(false);

    async function fetchData() {
        const todos = await (await fetch(`${URL}/Todos`)).json();
        setTodosData(todos);
    };

    useEffect(() => {
        fetchData();
    }, [])

    if (!todosData) {
        return <div>Loading...</div>
    }
    const Todos =
        todosData.map((todo, index) => {
            return (
                <Todo
                    key={todo._id}
                    index={index}
                    id={todo._id}
                    title={todo.title}
                    note={todo.note}
                    iconURL={todo.iconURL}
                    link={todo.link}
                    done={todo.done}
                    todosData={todosData}
                    setTodosData={setTodosData}
                />
            );
        })

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list)
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)
        return result
    }
    function onDragEnd(result) {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId &&
            destination.index === source.index)
            return;

        const content = reorder(todosData, result.source.index, result.destination.index)
        setTodosData(content)
    }
    return (<div className="flex flex-col gap-1 p-6 m-5 bg-slate-700 rounded-2xl ">
        <div className="flex flex-col justify-start">
            <div className="p-2 text-xl font-bold">Overall Stats</div>
            <TodoCalendar todos={todosData} setTodosData={setTodosData} />
        </div>
        <TodosHeader setShowAddTodo={setShowAddTodo} showAddTodo={showAddTodo}
            setTodosData={setTodosData}
            todosData={todosData} />
        <div >
            {showAddTodo && (<AddTodo setShowAddTodo={setShowAddTodo} setTodosData={setTodosData}
                todosData={todosData} />)}
            <DragDropContext
                onDragEnd={(result) => onDragEnd(result)}>
                <Droppable droppableId={"Unique ID"} key={"Unique ID"}>
                    {(provided, snapshot) => (
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 " ref={provided.innerRef} {...provided.droppableProps}>
                            {Todos}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    </div >)
}
