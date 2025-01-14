import { useRef } from "react"
import { Button } from "../ui/button";
import useModal from "@/hooks/useModal";
import ReactDOM from "react-dom";

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
    const { closeModal, handleDelete } = useModal({ isOpen, onClose, onDelete, modalRef })

  return ReactDOM.createPortal(
    <dialog ref={modalRef} className="p-main bg-white rounded-lg w-[315px] md:w-[480px] max-h-[calc(100vh-200px)] overflow-y-auto backdrop:bg-black/50">
        {!isModalDelete && (
            <div>
                {children}
            </div>
        )}
        {isModalDelete && (
            <div>
                {children}
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mt-5">
                    <Button variant={"delete"} onClick={handleDelete}>Delete</Button>
                    <Button variant={"secondary"} onClick={closeModal}>Cancel</Button>
                </div>
            </div>
        )}
    </dialog>,
    document.body
  )
}

export default Modal