import { Task } from '@/types';
import Modal from '../common/Modal'
import TaskForm from '../forms/TaskForm';

type EditTaskProps = {
    isEditTaskOpen: boolean;
    setIsEditTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
    task: Task;
}

function EditTask({ isEditTaskOpen, setIsEditTaskOpen, task }: EditTaskProps) {
  return (
    <div>
        <Modal isOpen={isEditTaskOpen} onClose={() => setIsEditTaskOpen(false)} isModalDelete={false}>
            <TaskForm task={task} onCloseModal={() => setIsEditTaskOpen(false)} />
        </Modal>
    </div>
  )
}

export default EditTask