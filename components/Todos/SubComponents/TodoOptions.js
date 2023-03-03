import Image from "next/image";

export default function TodoOptions({ id, setEditing }) {
    const height = 18, width = 18;
    return (
        <div className="flex flex-row justify-center gap-2">
            <Image src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" alt="" height={height} width={width} className="cursor-pointer" onClick={() => setEditing(true)} />
            <Image src="https://www.svgrepo.com/show/21045/delete-button.svg" height={height} width={width} alt="" className="cursor-pointer" />
            <Image src="https://cdn-icons-png.flaticon.com/512/565/565495.png" height={height} width={width} alt="" className="cursor-pointer" />
        </div>
    )
}