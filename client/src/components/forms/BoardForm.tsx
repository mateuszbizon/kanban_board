import { boardSchema, BoardSchema } from "@/validations/boardSchema"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Board } from "@/types"
import { Button } from "../ui/button"
import CrossIcon from "../icons/CrossIcon"

type BoardFormProps = {
    board?: Board;
}

function BoardForm({ board }: BoardFormProps) {
    const { handleSubmit, register, formState: { errors }, control, reset } = useForm<BoardSchema>({
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
        append({ name: "" })
    }

    function removeColumn(fieldIndex: number) {
        remove(fieldIndex)
    }

    function onSubmit(data: BoardSchema) {
        console.log(data)
    }

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-lg text-black">Add New Board</h2>
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