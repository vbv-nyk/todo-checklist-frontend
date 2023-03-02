import Todo from "./Todo";
import { TodosHeader } from "./TodosHeader";

export default function TodosContainer() {
    return (<div className="flex flex-col gap-1 p-6 bg-slate-700">
        <TodosHeader />
        <div className="flex flex-col gap-2">
            <Todo title="Todo 1" note="Note 1" link="http://www.google.com" iconURL="https://img.icons8.com/office/30/null/google-logo.png" />
            <Todo title="Todo 1" note="Note 1" link="http://www.google.com" iconURL="https://img.icons8.com/office/30/null/google-logo.png" />
            <Todo title="Todo 1" note="Note 1" link="http://www.google.com" iconURL="https://img.icons8.com/office/30/null/google-logo.png" />
            <Todo title="Todo 1" note="Note 1 asdhkashdaskjhdaskjhdaskjhdkjahsdkjashdkjasjdhaksjhdkjashdkjsahdkasjhdkajshdkasjhdkjashd kajhdksja hdkjsahdkj ahsdkj ahdkj sahdkj ashkjd haskjdh askjdh akjhd " link="http://www.google.com" iconURL="https://img.icons8.com/office/30/null/google-logo.png" />
            <Todo title="Todo 1" note="Note 1 asdhkashdaskjhdaskjhdaskjhdkjahsdkjashdkjasjdhaksjhdkjashdkjsahdkasjhdkajshdkasjhdkjashd kajhdksja hdkjsahdkj ahsdkj ahdkj sahdkj ashkjd haskjdh askjdh akjhd " link="http://www.google.com" iconURL="https://img.icons8.com/office/30/null/google-logo.png" />
        </div>
    </div>)
}