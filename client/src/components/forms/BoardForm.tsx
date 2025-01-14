import { boardSchema, BoardSchema } from "@/validations/boardSchema"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Board, Column } from "@/types"
import { Button } from "../ui/button"
import CrossIcon from "../icons/CrossIcon"
import { generateId } from "@/lib/generateId"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/store"
import { addBoard, editBoard } from "@/store/slices/boardSlice"
import { useEffect } from "react"

type BoardFormProps = {
    board?: Board | null;
}

function BoardForm({ board }: BoardFormProps) {
    const dispatch = useDispatch<AppDispatch>()
    const { handleSubmit, register, formState: { errors }, control, reset, setValue } = useForm<BoardSchema>({
        resolver: zodResolver(boardSchema),
        defaultValues: {
            name: board ? board.name : "",
            columns: board ? board.columns : [],
        }
    })

    const { append, remove, fields } = useFieldArray({
        control,
        name: "columns"
    })

    function addColumn() {
        append({ name: "", tasks: [] })
    }

    function removeColumn(fieldIndex: number) {
        remove(fieldIndex)
    }

    function onSubmit(data: BoardSchema) {
        const newBoardId = generateId()
        const columns = data.columns.map((column, index) => {
            return { ...column, id: generateId() + index, boardId: board ? board.id : newBoardId }
        })

        if (board) {
            dispatch(editBoard({ id: board.id, name: data.name, columns: columns as Column[] }))    
            return
        }

        reset()
        dispatch(addBoard({ id: newBoardId, name: data.name, columns: columns as Column[] }))
    }

    useEffect(() => {
        if (board) {
            setValue("name", board.name)
            setValue("columns", board.columns)
        }
    }, [board])

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-lg text-black">{board ? "Edit Board" : "Add New Board"}</h2>
        <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register("name")} placeholder="e.g. Web Design" />
        </div>
        <div className="space-y-2">
            <Label>Columns</Label>
            {fields.map((item, index) => {
                return (
                    <div key={item.id} className="flex items-center gap-1">
                        <Input {...register(`columns.${index}.name`)} placeholder="e.g. Todo" />
                        <Button 
                            type="button" 
                            variant={"transparent"} 
                            size={"icon"} 
                            className="text-medium-grey hover:text-red" 
                            onClick={() => removeColumn(index)}
                        >
                            <CrossIcon />
                        </Button>
                    </div>
                )
            })}
            <Button type="button" variant={"secondary"} className="w-full" onClick={addColumn}>+ Add New Column</Button>
        </div>
        <Button type="submit" className="w-full">{board ? "Save Changes" : "Create New Board"}</Button>
    </form>
  )
}

export default BoardForm