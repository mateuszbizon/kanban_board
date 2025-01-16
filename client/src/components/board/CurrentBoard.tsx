import { Board } from "@/types";
import BoardEmpty from "./BoardEmpty";
import ColumnsList from "../lists/ColumnsList";
import ColumnCard from "../cards/ColumnCard";
import ColumnStatusCard from "../cards/ColumnStatusCard";
import NewColumn from "./NewColumn";

type CurrentBoardProps = {
  board: Board;
}

function CurrentBoard({ board }: CurrentBoardProps) {
  return (
    <div className="h-full">
        {board.columns.length > 0 && (
            <div className="space-y-6">
                <ColumnsList 
                    columns={board.columns}
                    renderItem={(column) => (
                        <div className="shrink-0">
                            <ColumnStatusCard key={column.id} column={column} />
                        </div>
                    )}
                />
                <div className="flex gap-5">
                    <ColumnsList 
                        columns={board.columns}
                        renderItem={(column) => (
                            <div className="shrink-0">
                                <ColumnCard key={column.id} column={column} />
                            </div>
                        )}
                    />
                    <NewColumn />
                </div>
            </div>
        )}
        {!board.columns.length && (
            <div className="flex flex-col justify-center items-center h-full">
                <BoardEmpty />
            </div>
        )}
    </div>
  )
}

export default CurrentBoard