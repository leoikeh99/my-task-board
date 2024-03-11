import Board from "@/components/board";
import AddTask from "@/components/board/task/AddTask";
import "@/styles/layoutStyles.css";

export default function Home() {
  return (
    <main>
      <div className="max-w-lg m-auto pt-24">
        <Board />
        <AddTask />
      </div>
    </main>
  );
}
