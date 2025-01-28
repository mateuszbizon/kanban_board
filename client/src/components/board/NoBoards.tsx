import { useState } from "react"
import { Button } from "../ui/button"
import Modal from "../common/Modal"
import BoardForm from "../forms/BoardForm"

function NoBoards() {
    const [isCreateBoardOpen, setIsCreateBoardOpen] = useState(false)

  return (
    <div className="flex flex-col gap-5">
        <p className="text-lg text-medium-grey text-center">There are no boards yet. Create a new board to get started.</p>
        <div className="flex justify-center">
            <Button onClick={() => setIsCreateBoardOpen(true)}>+ Add New Board</Button>
        </div>
        <Modal isOpen={isCreateBoardOpen} onClose={() => setIsCreateBoardOpen(false)} isModalDelete={false}>
            <BoardForm onCloseModal={() => setIsCreateBoardOpen(false)} />
        </Modal>
    </div>
  )
}

export default NoBoards