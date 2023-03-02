import Todo from "./Todo";

export default function TodosContainer() {
    return (<div className="flex flex-col gap-1 p-10 bg-slate-800">
        <div className="flex justify-between p-4 bg-slate-700">
            <div className="text-xl font-bold text-white">Your Todos</div>
            <div className="flex gap-2">
                <button>Add</button>
                <button>Sort</button>
            </div>
        </div>
        <div className="flex flex-col gap-1">
            <Todo title="Todo 1" note="Note 1" link="http://www.google.com" iconURL="https://img.icons8.com/office/30/null/google-logo.png" />
            <Todo title="Todo 1" note="Note 1" link="http://www.google.com" iconURL="https://img.icons8.com/office/30/null/google-logo.png" />
            <Todo title="Todo 1" note="Note 1" link="http://www.google.com" iconURL="https://img.icons8.com/office/30/null/google-logo.png" />
            <Todo title="Todo 1" note="Note 1 asdhkashdaskjhdaskjhdaskjhdkjahsdkjashdkjasjdhaksjhdkjashdkjsahdkasjhdkajshdkasjhdkjashd kajhdksja hdkjsahdkj ahsdkj ahdkj sahdkj ashkjd haskjdh askjdh akjhd " link="http://www.google.com" iconURL="https://img.icons8.com/office/30/null/google-logo.png" />
        </div>
    </div>)
}