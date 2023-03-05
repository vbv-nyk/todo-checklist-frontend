export function TodosHeader({ showAddTodo, setShowAddTodo }) {
    return (<div className="flex items-center justify-between p-4 mt-12">
        <div className="text-xl font-bold text-white">Your Todos</div>
        <div className="flex gap-2 font-bold">
            {!showAddTodo && <button className="px-3 py-2 rounded-sm bg-slate-600" onClick={(e) => setShowAddTodo(n => !n)}>Add</button>}
            {showAddTodo && <button className="px-3 py-2 rounded-sm bg-slate-600" onClick={(e) => setShowAddTodo(n => !n)}>Cancel</button>}
            <button className="px-3 py-2 rounded-sm bg-slate-600">Sort</button>
        </div>
    </div>)
}