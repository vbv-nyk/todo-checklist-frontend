import Image from "next/image";

export default function Todo({ title, note, link, iconURL, start, end }) {
    return (<div className="flex flex-col items-start justify-start gap-2 p-4 rounded-lg shadow-lg shadow-slate-800 bg-slate-600 ">
        <div className="flex flex-row items-center gap-2 shrink-0">
            <Image src={iconURL} alt={"Image Url"} height={5} width={20} />
            <a href={link} className={"font-semibold text-lg"}>{title}</a>
        </div>
        <div className="break-all">{note}</div>
    </div>)
} 