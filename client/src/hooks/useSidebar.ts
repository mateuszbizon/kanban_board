import { RootState } from '@/store'
import { hideSidebar, showSidebar } from '@/store/slices/sidebarSlice'
import { useDispatch, useSelector } from 'react-redux'

function useSidebar() {
    const { isOpen } = useSelector((state: RootState) => state.sidebar)
    const dispatch = useDispatch()

    function handleHideSidebar() {
        dispatch(hideSidebar())
    }

    function handleShowSidebar() {
        dispatch(showSidebar())
    }

  return {
    isSidebarOpen: isOpen,
    hideSidebar: handleHideSidebar,
    showSidebar: handleShowSidebar,
  }
}

export default useSidebar