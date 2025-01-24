import { MESSAGES } from '@/constants/messages'
import { moveTask } from '@/services/tasks'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

function useMoveTask() {
    const { mutate: handleMoveTask } = useMutation({
        mutationFn: moveTask,
        onError: () => {
            toast.error(MESSAGES.database.databaseFail)
        }
    })

  return {
    handleMoveTask,
  }
}

export default useMoveTask