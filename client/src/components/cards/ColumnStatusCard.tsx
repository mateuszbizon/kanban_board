import { Column } from '@/types'

type ColumnStatusCardProps = {
    column: Column;
}

function ColumnStatusCard({ column }: ColumnStatusCardProps) {
  return (
    <div className='w-column'>
        <div className="flex gap-2 items-center">
            <div className="size-4 rounded-full bg-main-purple"></div>
            <span className="text-2sm text-medium-grey uppercase">{column.name} ({column.tasks.length})</span>
        </div>
    </div>
  )
}

export default ColumnStatusCard