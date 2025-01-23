import { MESSAGES } from '@/constants/messages'
import { updateTask } from '@/services/tasks'
import { AppDispatch, RootState } from '@/store'
import { handleEditTask } from '@/store/actions/tasks'
import { UpdateTaskResponse } from '@/types/responses'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function useUpdateTask() {
    const dispatch = useDispatch<AppDispatch>()
    const { currentBoard } = useSelector((state: RootState) => state.board)
    const { mutate: handleUpdateTask, isPending: isUpdateTaskPending } = useMutation({
        mutationFn: updateTask,
        onSuccess: (data: UpdateTaskResponse) => {
            dispatch(handleEditTask(currentBoard!, data.task, data.oldColumnId))
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
    handleUpdateTask,
    isUpdateTaskPending,
  }
}

export default useUpdateTask