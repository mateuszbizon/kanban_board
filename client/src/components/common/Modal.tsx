import { useEffect, useRef } from "react"
import { Button } from "../ui/button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
} & ({
  isModalDelete: true;
  onDelete: () => void;
} | {
  isModalDelete: false;
  onDelete?: undefined
})

function Modal({ isOpen, onClose, children, isModalDelete, onDelete }: ModalProps) {
    const modalRef = useRef<HTMLDialogElement | null>(null)

    function openModal() {
      modalRef.current?.showModal()
    }

    function closeModal() {
      modalRef.current?.close()
      onClose()
    }

    function handleDelete() {
      if (onDelete) {
        onDelete()
      }
    }

    useEffect(() => {
      if (isOpen && !modalRef.current?.open) {
        openModal()
        return
      }

      closeModal()
    }, [isOpen])

    useEffect(() => {
      const closeModalOutside = (e: MouseEvent) => {
        const modalDimensions = modalRef.current?.getBoundingClientRect()

        if (!modalDimensions) return

        if (
          e.clientX < modalDimensions.left || 
          e.clientX > modalDimensions.right ||
          e.clientY < modalDimensions.top || 
          e.clientY > modalDimensions.bottom
        ) {
          closeModal()
        }
      }

      modalRef.current?.addEventListener('click', closeModalOutside)

      return () => {
        modalRef.current?.removeEventListener('click', closeModalOutside)
      }
    }, [])

  return (
    <dialog ref={modalRef} className="p-main bg-white rounded-lg w-[315px] md:w-[480px] max-h-[calc(100vh-200px)] overflow-y-auto backdrop:bg-black/50">
      {!isModalDelete && (
        <div>
          {children}
        </div>
      )}
      {isModalDelete && (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mt-5">
          <Button variant={"delete"} onClick={handleDelete}>Delete</Button>
          <Button variant={"secondary"} onClick={closeModal}>Cancel</Button>
        </div>
      )}
    </dialog>
  )
}

export default Modal