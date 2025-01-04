import { Board } from "@/types";
import BoardEmpty from "./BoardEmpty";

type CurrentBoardProps = {
  board: Board;
}

function CurrentBoard({ board }: CurrentBoardProps) {
  return (
    <div className="h-full">
      {board.name}
      {!board.columns.length && (
          <div className="flex flex-col justify-center items-center h-full">
              <BoardEmpty />
          </div>
      )}
    </div>
  )
}

export default CurrentBoard