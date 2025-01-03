import { Board } from "@/types"
import React from "react";

type BoardsListProps = {
    boards: Board[];
    renderItem: (item: Board, index: number) => React.ReactNode;
}

function BoardsList({ boards, renderItem }: BoardsListProps) {
  return (
    <div>
        {boards.map((board, index) => renderItem(board, index))}
    </div>
  )
}

export default BoardsList