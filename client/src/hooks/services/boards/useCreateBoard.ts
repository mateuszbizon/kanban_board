import { createBoard } from '@/services/boards'
import { AppDispatch } from '@/store'
import { addBoard } from '@/store/slices/boardSlice'
import { CreateBoardResponse } from '@/types/responses'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useDispatch } from 'react-redux'

function useCreateBoard() {
    const dispatch = useDispatch<AppDispatch>()
    const { mutate: handleCreateBoard, isPending: isCreateBoardPending, isError: isCreateBoardError } = useMutation({
        mutationFn: createBoard,
        onSuccess: (data: CreateBoardResponse) => {
            dispatch(addBoard(data.board))
        },
        onError: (error: AxiosError) => {
            console.log(error)
        }
    })

  return {
    handleCreateBoard,
    isCreateBoardPending,
    isCreateBoardError,
  }
}

export default useCreateBoard