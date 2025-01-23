import { MESSAGES } from '@/constants/messages'
import { updateSubtask } from '@/services/subtasks'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

function useUpdateSubtask() {
    const { mutate: handleUpdateSubtask } = useMutation({
        mutationFn: updateSubtask,
        onError: () => {
            toast.error(MESSAGES.database.databaseFail)
        }
    })

  return {
    handleUpdateSubtask,
  }
}

export default useUpdateSubtask