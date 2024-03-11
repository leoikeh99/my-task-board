import Board from "@/components/board";
import "@/styles/layoutStyles.css";

export default function Home() {
  return (
    <main>
      <div className="max-w-lg m-auto pt-24">
        <Board />
      </div>
    </main>
  );
}
