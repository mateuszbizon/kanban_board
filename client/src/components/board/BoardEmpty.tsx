import { useState } from 'react'
import { Button } from '../ui/button'
import EditBoard from './EditBoard'

function BoardEmpty() {
    const [isEditBoardOpen, setIsEditBoardOpen] = useState(false)

  return (
    <div className="flex flex-col gap-5">
        <p className="text-lg text-medium-grey text-center">This board is empty. Create a new column to get started.</p>
        <div className="flex justify-center">
            <Button onClick={() => setIsEditBoardOpen(true)}>+ Add New Column</Button>
        </div>
        <EditBoard isEditBoardOpen={isEditBoardOpen} setIsEditBoardOpen={setIsEditBoardOpen} />
    </div>
  )
}

export default BoardEmpty