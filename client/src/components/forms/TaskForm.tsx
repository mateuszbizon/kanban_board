import { Task } from '@/types'
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { useState } from 'react';
import SelectDropdown from '../common/SelectDropdown';
import { Button } from '../ui/button';
import { useFieldArray, useForm } from 'react-hook-form';
import { taskSchema, TaskSchema } from '@/validations/taskSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import CrossIcon from '../icons/CrossIcon';
import { generateId } from '@/lib/generateId';
import { handleAddTask } from '@/store/actions/tasks';

type TaskFormProps = {
    task?: Task;
}

function TaskForm({ task }: TaskFormProps) {
    const dispatch = useDispatch<AppDispatch>()
    const { currentBoard } = useSelector((state: RootState) => state.board)
    const [status, setStatus] = useState(task ? task.status : currentBoard?.columns[0].name!)
    const { handleSubmit, register, control, reset, setValue } = useForm<TaskSchema>({
        resolver: zodResolver(taskSchema),
        defaultValues: {
            id: task ? task.id : undefined,
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
        setStatus(statusName)
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
            console.log("Task to edit")
            return
        }

        const subtasks = data.subtasks.map((subtask, index) => {
            return { ...subtask, id: generateId() + index }
        })

        const newTask: Task = { 
            id: generateId(), 
            title: data.title, 
            description: data.description, 
            status: data.status, 
            subtasks 
        }

        dispatch(handleAddTask(currentBoard!, newTask))
        reset()
    }

  return (
    <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='text-lg text-black'>{task ? "Edit Task" : "Add New Task"}</h2>
        <div className='space-y-2'>
            <Label htmlFor='title'>Title</Label>
            <Input id='title' {...register("title")} placeholder='e.g. Take coffee break' />
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
                        <Input {...register(`subtasks.${index}.title`)} placeholder='Make coffee' />
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
        <div className='space-y-2'>
            <Label htmlFor='title'>Status</Label>
            <SelectDropdown value={status} onChangeValue={changeStatus}>
                {currentBoard?.columns.map(item => {
                    return (
                        <SelectDropdown.Item key={item.id} value={item.name}>{item.name}</SelectDropdown.Item>
                    )
                })}
            </SelectDropdown>
        </div>
        <Button type='submit' className='w-full'>{task ? "Save Changes" : "Create Task"}</Button>
    </form>
  )
}

export default TaskForm