import React, { useEffect } from 'react'

type Props = {
    isOpen: boolean;
    onClose: () => void;
    modalRef: React.MutableRefObject<HTMLDialogElement | null>
    onDelete: (() => void) | undefined
}

function useModal({ isOpen, onClose, onDelete, modalRef }: Props) {
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

  return {
    closeModal,
    handleDelete,
  }
}

export default useModal