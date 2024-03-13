import Board from "@/components/board";
import AddTask from "@/components/board/task/AddTask";
import "@/styles/layoutStyles.css";

export default function Home() {
  return (
    <main>
      <div className="w-[min(93%,32rem)] m-auto pt-10 xs:pt-16 md:pt-24">
        <Board />
        <AddTask />
      </div>
    </main>
  );
}
