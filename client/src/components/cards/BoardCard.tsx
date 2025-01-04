import { Board } from "@/types";
import BoardIcon from "../icons/BoardIcon"
import { Button } from "../ui/button"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setCurrentBoard } from "@/store/slices/boardSlice";

type BoardCardProps = {
    board: Board;
}

function BoardCard({ board }: BoardCardProps) {
    const { currentBoard } = useSelector((state: RootState) => state.board)
    const dispatch = useDispatch()
    const isBoardActive = board.id === currentBoard?.id

    function handleSetCurrentBoard() {
        dispatch(setCurrentBoard(board))
    }

  return (
    <div className="pr-main">
        <Button variant={isBoardActive ? "sidebar-active" : "sidebar"} size={"sidebar"} className="w-full" onClick={handleSetCurrentBoard}>
            <BoardIcon /> {board.name}
        </Button>
    </div>
  )
}

export default BoardCard