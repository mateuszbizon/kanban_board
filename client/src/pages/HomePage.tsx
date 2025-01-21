import CurrentBoard from "@/components/board/CurrentBoard"
import NoBoards from "@/components/board/NoBoards"
import Sidebar from "@/components/home/Sidebar"
import Topbar from "@/components/home/Topbar"
import MainLodaing from "@/components/loadings/MainLodaing"
import useGetAllBoards from "@/hooks/services/boards/useGetAllBoards"
import { RootState } from "@/store"
import { useSelector } from "react-redux"

function HomePage() {
    const { data, isLoading } = useGetAllBoards()
    const { currentBoard } = useSelector((state: RootState) => state.board)

  return (
    <div>
        {data && (
            <div>
                <Topbar />
                <div className="flex">
                    <Sidebar />
                    <main className="grow min-h-[calc(100vh-theme(height.topbar))] p-main overflow-x-auto">
                        {currentBoard && (
                            <CurrentBoard board={currentBoard} />
                        )}
                        {!currentBoard && (
                            <div className="flex flex-col justify-center items-center h-full">
                                <NoBoards />
                            </div>
                        )}
                    </main>
                </div>
            </div>
        )}
        {isLoading && <MainLodaing />}
    </div>
  )
}

export default HomePage