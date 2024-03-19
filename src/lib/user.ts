import { getServerSession } from "next-auth";
import prisma from "./prisma";
import authOptions from "@/app/api/auth/[...nextauth]/authOptions";
import { unstable_noStore as noStore } from "next/cache";

export const getUserBoard = async () => {
  noStore();
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    throw new Error("Something went wrong");
  }

  try {
    const userBoard = await prisma.board.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        tasks: true,
      },
    });

    return {
      ...userBoard[0],
      tasks: userBoard[0].tasks.sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      }),
    };
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
