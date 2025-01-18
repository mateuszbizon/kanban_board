import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { SubTask } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { handleEditSubtask } from "@/store/actions/subtasks";

type SubtaskCardProps = {
	subtask: SubTask;
	columnId: string;
};

function SubtaskCard({ subtask, columnId }: SubtaskCardProps) {
	const { currentBoard } = useSelector((state: RootState) => state.board);
	const dispatch = useDispatch<AppDispatch>();
	const [isCompleted, setIsCompleted] = useState(subtask.isCompleted);

	function toggleSubtask() {
		setIsCompleted(prev => !prev);

		if (!currentBoard) return;

		dispatch(handleEditSubtask(currentBoard, columnId, subtask));
	}

	return (
		<div
			className={`p-main rounded flex items-center gap-5 text-xs bg-background hover:bg-[#635fc7]/25 cursor-pointer ${
				isCompleted ? "text-black/50 dark:text-white/50 line-through" : "text-black dark:text-white"
			}`}
			onClick={toggleSubtask}>
			<Checkbox id={subtask.id} checked={isCompleted} />
			<label>{subtask.title}</label>
		</div>
	);
}

export default SubtaskCard;
