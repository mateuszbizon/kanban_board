import { MESSAGES } from '@/constants/messages'
import { deleteBoard as deleteBoardService } from '@/services/boards'
import { AppDispatch } from '@/store'
import { deleteBoard } from '@/store/slices/boardSlice'
import { DeleteBoardResponse } from '@/types/responses'
import { useMutation } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

function useDeleteBoard() {
    const dispatch = useDispatch<AppDispatch>()
    const { mutate: handleDeleteBoard, isPending } = useMutation({
        mutationFn: deleteBoardService,
        onSuccess: (data: DeleteBoardResponse) => {
            dispatch(deleteBoard({ boardId: data.board.id }))
        },
        onError: () => {
            toast.error(MESSAGES.database.databaseFail)
        }
    })

  return {
    handleDeleteBoard,
    isPending,
  }
}

export default useDeleteBoard