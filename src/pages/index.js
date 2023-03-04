import TodoHeatmap from "../../components/Chart";
import Chart from "../../components/Chart";
import Navbar from "../../components/Navbar";
import Todo from "../../components/Todos/Todo";
import TodosContainer from "../../components/Todos/TodosContainer";

export default function Home() {
  return (
    <div >
      <Navbar />
      <TodoHeatmap />
      <TodosContainer />
    </div>
  )
}
