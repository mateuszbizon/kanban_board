import { MESSAGES } from '@/constants/messages'
import { updateSubtask } from '@/services/subtasks'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

function useUpdateSubtask() {
    const { mutate: handleUpdateSubtask } = useMutation({
        mutationFn: updateSubtask,
        onError: (error: AxiosError) => {
            if (error.response?.status === 404) {
                toast.error(MESSAGES.subtask.alreadyDeleted)
                return
            }

            toast.error(MESSAGES.database.databaseFail)
        }
    })

  return {
    handleUpdateSubtask,
  }
}

export default useUpdateSubtask