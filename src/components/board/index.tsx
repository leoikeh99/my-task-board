import React from "react";
import BoardInfo from "./BoardInfo";
import Tasks from "./Tasks";

type Props = {};

const Board = (props: Props) => {
  return (
    <div>
      <BoardInfo />
      <Tasks />
    </div>
  );
};

export default Board;
