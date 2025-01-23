import { MESSAGES } from '@/constants/messages'
import { createTask } from '@/services/tasks'
import { AppDispatch, RootState } from '@/store'
import { handleAddTask } from '@/store/actions/tasks'
import { CreateTaskResponse } from '@/types/responses'
import { useMutation } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function useCreateTask() {
    const dispatch = useDispatch<AppDispatch>()
    const { currentBoard } = useSelector((state: RootState) => state.board)
    const { mutate: handleCreateTask, isPending: isCreateTaskPending, isError: isCreateTaskError } = useMutation({
        mutationFn: createTask,
        onSuccess: (data: CreateTaskResponse) => {
            dispatch(handleAddTask(currentBoard!, data.task))
        },
        onError: () => {
            toast.error(MESSAGES.database.databaseFail)
        }
    })

  return {
    handleCreateTask,
    isCreateTaskPending,
    isCreateTaskError,
  }
}

export default useCreateTask