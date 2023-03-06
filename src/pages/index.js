import TodoCalendar from "../../components/Todos/Chart/Chart";
import TodoHeatmap from "../../components/Todos/Chart/Chart";
import Chart from "../../components/Todos/Chart/Chart";
import Navbar from "../../components/Navbar/Navbar";
import Todo from "../../components/Todos/Todo";
import TodosContainer from "../../components/Todos/TodosContainer";


export default function Home() {
  return (
    <div >
      <Navbar />
      <TodosContainer />
    </div>
  )
}
