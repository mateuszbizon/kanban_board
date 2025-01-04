import { Column } from "@/types";

type ColumnsListProps = {
    columns: Column[];
    renderItem: (column: Column, index: number) => React.ReactNode;
}

function ColumnsList({ columns, renderItem }: ColumnsListProps) {
  return (
    <div className="flex gap-5">
        {columns.map((column, index) => renderItem(column, index))}
    </div>
  )
}

export default ColumnsList