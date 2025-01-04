import { Column } from "@/types";

type ColumnCardProps = {
    column: Column;
}

function ColumnCard({ column }: ColumnCardProps) {
  return (
    <div className="w-[280px] space-y-3">
        <div className="flex gap-2 items-center">
            <div className="size-4 rounded-full bg-main-purple"></div>
            <span className="text-2sm text-medium-grey uppercase">{column.name} ({column.tasks.length})</span>
        </div>
    </div>
  )
}

export default ColumnCard