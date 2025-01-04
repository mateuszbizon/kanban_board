import { Button } from "../ui/button"

function NoBoards() {
  return (
    <div className="flex flex-col gap-5">
        <p className="text-lg text-medium-grey text-center">There are no boards yet. Create a new board to get started.</p>
        <div className="flex justify-center">
            <Button>+ Add New Board</Button>
        </div>
    </div>
  )
}

export default NoBoards