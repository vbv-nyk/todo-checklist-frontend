export function TodosHeader() {
    return (<div className="flex items-center justify-between p-4">
        <div className="text-xl font-bold text-white">Your Todos</div>
        <div className="flex gap-2 font-bold">
            <button className="px-3 py-2 rounded-sm bg-slate-600">Add</button>
            <button className="px-3 py-2 rounded-sm bg-slate-600">Sort</button>
        </div>
    </div>)
}