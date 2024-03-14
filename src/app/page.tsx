import Board from "@/components/board";
import AddTask from "@/components/board/task/forms/AddTask";
import "@/styles/layoutStyles.css";
import { getServerSession } from "next-auth";
import authOptions from "./api/auth/[...nextauth]/authOptions";
import prisma from "@/lib/prisma";
import { Fragment, Suspense } from "react";

export default async function Home() {
  const session = await getServerSession(authOptions);

  const userBoard = await prisma.board.findFirst({
    where: {
      userId: session?.user?.id,
    },
    include: {
      tasks: true,
    },
  });

  return (
    <main>
      <div className="w-[min(93%,32rem)] m-auto pt-10 xs:pt-16 md:pt-24">
        <Suspense fallback={<div>Loading...</div>}>
          {userBoard ? (
            <Fragment>
              <Board board={userBoard} />
              <AddTask />
            </Fragment>
          ) : (
            <div>Create your first board</div>
          )}
        </Suspense>
      </div>
    </main>
  );
}
