export default function EditTodoModal({ title, link, iconURL, note }) {
    return (<div>
        <input value={title} />
        <input value={link} />
        <input value={iconURL} />
        <input value={note} />
    </div>)
}