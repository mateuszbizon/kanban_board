import { MESSAGES } from '@/constants/messages'
import { updateBoard } from '@/services/boards'
import { AppDispatch } from '@/store'
import { editBoard } from '@/store/slices/boardSlice'
import { UpdateBoardResponse } from '@/types/responses'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

function useUpdateBoard() {
    const dispatch = useDispatch<AppDispatch>()
    const { mutate: handleUpdateBoard, isPending: isUpdateBoardPending } = useMutation({
        mutationFn: updateBoard,
        onSuccess: (data: UpdateBoardResponse) => {
            dispatch(editBoard(data.board))
        },
        onError: (error: AxiosError) => {
            if (error.response?.status === 404) {
                toast.error(MESSAGES.board.alreadyDeleted)
                return
            }

            toast.error(MESSAGES.database.databaseFail)
        }
    })

  return {
    handleUpdateBoard,
    isUpdateBoardPending,
  }
}

export default useUpdateBoard