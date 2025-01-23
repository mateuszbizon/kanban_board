import { MESSAGES } from '@/constants/messages'
import { deleteBoard as deleteBoardService } from '@/services/boards'
import { AppDispatch } from '@/store'
import { deleteBoard } from '@/store/slices/boardSlice'
import { DeleteBoardResponse } from '@/types/responses'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

function useDeleteBoard() {
    const dispatch = useDispatch<AppDispatch>()
    const { mutate: handleDeleteBoard, isPending } = useMutation({
        mutationFn: deleteBoardService,
        onSuccess: (data: DeleteBoardResponse) => {
            dispatch(deleteBoard({ boardId: data.board.id }))
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
    handleDeleteBoard,
    isPending,
  }
}

export default useDeleteBoard