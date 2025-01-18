import { useState } from "react";
import EditBoard from "./EditBoard";

function NewColumn() {
	const [isEditBoardOpen, setIsEditBoardOpen] = useState(false);

	return (
		<div>
			<div
				className='group flex justify-center items-center w-column h-full bg-lines rounded-md cursor-pointer'
				onClick={() => setIsEditBoardOpen(true)}
				tabIndex={0}>
				<span className='text-2xl text-medium-grey group-hover:text-main-purple transition-colors'>
					+ New Column
				</span>
			</div>
			<EditBoard
				isEditBoardOpen={isEditBoardOpen}
				setIsEditBoardOpen={setIsEditBoardOpen}
			/>
		</div>
	);
}

export default NewColumn;
