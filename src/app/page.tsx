import Board from "@/components/board";
import { Fragment, Suspense } from "react";
import { getUserBoard } from "@/lib/user";
import { unstable_noStore as noStore } from "next/cache";
import TaskForms from "@/components/board/task/TaskForms";
import EditBoard from "@/components/board/forms/EditBoard";
import CreateBoard from "@/components/board/forms/CreateBoard";

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
              <TaskForms boardId={userBoard.id} />
              <EditBoard board={userBoard} />
            </Fragment>
          ) : (
            <CreateBoard />
          )}
        </Suspense>
      </div>
    </main>
  );
}
