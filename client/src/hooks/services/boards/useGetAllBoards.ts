import { getAllBoards } from '@/services/boards'
import { AppDispatch } from '@/store'
import { setBoards, setCurrentBoard } from '@/store/slices/boardSlice'
import { GetAllBoardsResponse } from '@/types/responses'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function useGetAllBoards() {
    const dispatch = useDispatch<AppDispatch>()
    const { data, isLoading, isError, error } = useQuery<GetAllBoardsResponse, AxiosError>({
        queryKey: ["getAllBoards"],
        queryFn: getAllBoards,
    })

    useEffect(() => {
        if (data) {
            dispatch(setBoards(data.boards))

            if (data.boards.length > 0) {
                dispatch(setCurrentBoard(data.boards[0]))
            }
        }
    }, [data])

  return {
    data,
    isLoading,
    isError,
    error,
  }
}

export default useGetAllBoards