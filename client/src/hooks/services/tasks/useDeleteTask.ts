import { MESSAGES } from '@/constants/messages'
import { deleteTask } from '@/services/tasks'
import { AppDispatch, RootState } from '@/store'
import { handleDeleteTask as deleteTaskAction } from '@/store/actions/tasks'
import { DeleteTaskResponse } from '@/types/responses'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function useDeleteTask() {
    const dispatch = useDispatch<AppDispatch>()
    const { currentBoard } = useSelector((state: RootState) => state.board)
    const { mutate: handleDeleteTask, isPending } = useMutation({
        mutationFn: deleteTask,
        onSuccess: (data: DeleteTaskResponse) => {
            dispatch(deleteTaskAction(currentBoard!, data.task.columnId, data.task.id))
        },
        onError: (error: AxiosError) => {
            if (error.response?.status === 404) {
                toast.error(MESSAGES.task.alreadyDeleted)
                return
            }

            toast.error(MESSAGES.database.databaseFail)
        }
    })

  return {
    handleDeleteTask,
    isPending,
  }
}

export default useDeleteTask