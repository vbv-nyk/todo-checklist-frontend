export default function checkIfImageExists(url) {
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
