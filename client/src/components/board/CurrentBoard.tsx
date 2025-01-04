import { Board } from "@/types";
import BoardEmpty from "./BoardEmpty";
import ColumnsList from "../lists/ColumnsList";
import ColumnCard from "../cards/ColumnCard";

type CurrentBoardProps = {
  board: Board;
}

function CurrentBoard({ board }: CurrentBoardProps) {
  return (
    <div className="h-full">
      <ColumnsList 
        columns={board.columns}
        renderItem={(column) => (
          <ColumnCard key={column.id} column={column} />
        )}
      />
      {!board.columns.length && (
          <div className="flex flex-col justify-center items-center h-full">
              <BoardEmpty />
          </div>
      )}
    </div>
  )
}

export default CurrentBoard