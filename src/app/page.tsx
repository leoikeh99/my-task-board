import Board from "@/components/board";
import AddTask from "@/components/board/task/forms/AddTask";
import { Fragment, Suspense } from "react";
import { getUserBoard } from "@/lib/user";
import { unstable_noStore as noStore } from "next/cache";

export default async function Home() {
  noStore();
  const userBoard = await getUserBoard();

  return (
    <main>
      <div className="w-[min(93%,32rem)] m-auto pt-10 xs:pt-16 md:pt-24">
        <Suspense fallback={<div>Loading...</div>}>
          {userBoard ? (
            <Fragment>
              <Board board={userBoard} />
              <AddTask boardId={userBoard.id} />
            </Fragment>
          ) : (
            <div>Create your first board</div>
          )}
        </Suspense>
      </div>
    </main>
  );
}
