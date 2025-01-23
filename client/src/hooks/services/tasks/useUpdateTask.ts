import { MESSAGES } from '@/constants/messages'
import { updateTask } from '@/services/tasks'
import { AppDispatch, RootState } from '@/store'
import { handleEditTask } from '@/store/actions/tasks'
import { UpdateTaskResponse } from '@/types/responses'
import { useMutation } from '@tanstack/react-query'
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
        onError: () => {
            toast.error(MESSAGES.database.databaseFail)
        }
    })

  return {
    handleUpdateTask,
    isUpdateTaskPending,
  }
}

export default useUpdateTask