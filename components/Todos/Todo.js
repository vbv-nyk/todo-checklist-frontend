import Image from "next/image";

export default function Todo({ title, note, link, iconURL, start, end }) {
    return (<div className={`row-start-${start} row-end-${end}`}>
        <Image src={iconURL} alt={"Image Url"} />
        <a href={link}>{title}</a>
        <div>{note}</div>
    </div>)
}