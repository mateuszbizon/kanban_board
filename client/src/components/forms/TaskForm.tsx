import { Task } from '@/types'
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useEffect, useState } from 'react';
import SelectDropdown from '../common/SelectDropdown';
import { Button } from '../ui/button';
import { useFieldArray, useForm } from 'react-hook-form';
import { taskSchema, TaskSchema } from '@/validations/taskSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import CrossIcon from '../icons/CrossIcon';
import { getColumnByStatus } from '@/lib/getColumn';
import useCreateTask from '@/hooks/services/tasks/useCreateTask';
import useUpdateTask from '@/hooks/services/tasks/useUpdateTask';

type TaskFormProps = {
    task?: Task;
    onCloseModal?: () => void;
}

function TaskForm({ task, onCloseModal }: TaskFormProps) {
    const { handleCreateTask, isCreateTaskPending } = useCreateTask()
    const { handleUpdateTask, isUpdateTaskPending } = useUpdateTask()
    const { currentBoard } = useSelector((state: RootState) => state.board)
    const [column, setColumn] = useState(task ? () => getColumnByStatus(currentBoard, task.status) : currentBoard?.columns[0])
    const { handleSubmit, register, control, reset, setValue, formState: { errors } } = useForm<TaskSchema>({
        resolver: zodResolver(taskSchema),
        defaultValues: {
            title: task ? task.title : "",
            description: task ? task.description : "",
            status: task ? task.status : currentBoard?.columns[0].name!,
            subtasks: task ? task.subtasks : [],
        }
    })
    const { fields, append, remove } = useFieldArray({
        control,
        name: "subtasks"
    })

    function changeStatus(statusName: string) {
        const column = getColumnByStatus(currentBoard, statusName)

        setColumn(column)
        setValue("status", statusName)
    }

    function addSubtask() {
        append({ title: "", isCompleted: false })
    }

    function removeSubtask(index: number) {
        remove(index)
    }

    function onSubmit(data: TaskSchema) { 
        if (task) {
            handleUpdateTask({ task: data, taskId: task.id, columndId: column?.id! })
            return
        }

        handleCreateTask({ task: data, columnId: column?.id! }, {
            onSuccess: () => {
                reset()
            },
            onSettled: () => {
                if (onCloseModal) {
                    onCloseModal()
                }
            }
        })
    }

    useEffect(() => {
        if (!task) {
            setColumn(currentBoard?.columns[0])
        }
    }, [currentBoard])

  return (
    <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='form-title'>{task ? "Edit Task" : "Add New Task"}</h2>
        <div className='space-y-2'>
            <Label htmlFor='title'>Title</Label>
            <Input 
                id='title' 
                {...register("title")} 
                placeholder='e.g. Take coffee break' 
                errorMessage={errors.title && errors.title.message} 
            />
        </div>
        <div className='space-y-2'>
            <Label htmlFor='description'>Description</Label>
            <Textarea 
                id='description' 
                {...register("description")}
                placeholder='e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.' 
                className='resize-none' 
            />
        </div>
        <div className='space-y-2'>
            <Label>Subtasks</Label>
            {fields.map((item, index) => {
                return (
                    <div key={item.id} className='flex items-center gap-1'>
                        <Input 
                            {...register(`subtasks.${index}.title`)} 
                            placeholder='Make coffee' 
                            errorMessage={errors.subtasks?.[index]?.title && errors.subtasks[index].title.message}
                        />
                        <Button 
                            type="button" 
                            variant={"transparent"} 
                            size={"icon"} 
                            className="text-medium-grey hover:text-red" 
                            onClick={() => removeSubtask(index)}
                        >
                            <CrossIcon />
                        </Button>
                    </div>
                )
            })}
            <Button type='button' className='w-full' variant={"secondary"} onClick={addSubtask}>+ Add New Subtask</Button>
        </div>
        {column && (
            <div className='space-y-2'>
                <Label>Status</Label>
                <SelectDropdown value={column.name} onChangeValue={changeStatus}>
                    {currentBoard?.columns.map(item => {
                        return (
                            <SelectDropdown.Item key={item.id} value={item.name}>{item.name}</SelectDropdown.Item>
                        )
                    })}
                </SelectDropdown>
            </div>
        )}
        <Button 
            type='submit' 
            className='w-full' 
            disabled={isCreateTaskPending || isUpdateTaskPending}
        >
            {task ? "Save Changes" : "Create Task"}
        </Button>
    </form>
  )
}

export default TaskForm