import { Button } from '../ui/button'

function BoardEmpty() {
  return (
    <div className="flex flex-col gap-5">
        <p className="text-lg text-medium-grey text-center">This board is empty. Create a new column to get started.</p>
        <div className="flex justify-center">
            <Button>+ Add New Column</Button>
        </div>
    </div>
  )
}

export default BoardEmpty