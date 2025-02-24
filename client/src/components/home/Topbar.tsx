import { useSelector } from "react-redux";
import AddIcon from "../icons/AddIcon";
import LogoDarkIcon from "../icons/LogoDarkIcon";
import LogoIcon from "../icons/LogoIcon";
import { Button } from "../ui/button";
import { RootState } from "@/store";
import BoardOptions from "../board/BoardOptions";
import Modal from "../common/Modal";
import TaskForm from "../forms/TaskForm";
import { useState } from "react";
import TopbarOptions from "./TopbarOptions";
import LogoLightIcon from "../icons/LogoLightIcon";
import { useDarkModeContext } from "@/context/DarkModeContext";

function Topbar() {
	const { isOpen: isSidebarOpen } = useSelector((state: RootState) => state.sidebar);
	const { boards, currentBoard } = useSelector((state: RootState) => state.board);
    const { isDarkMode } = useDarkModeContext()
	const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);

	return (
		<div className='flex sticky top-0'>
			<div
				className={`hidden md:flex items-center bg-white dark:bg-dark-grey h-topbar p-main border-r border-r-lines ${
					isSidebarOpen ? "w-[260px] md:w-[300px]" : "w-auto"
				}`}>
				{isDarkMode ? (
                    <LogoLightIcon />
                ) : (
                    <LogoDarkIcon />
                )}
			</div>
			<div className='flex justify-between items-center grow bg-white dark:bg-dark-grey h-topbar p-main'>
				<div className='flex items-center gap-2'>
					<div className='md:hidden'>
						<LogoIcon />
					</div>
					<TopbarOptions />
					<span className='text-black dark:text-white text-lg hidden md:block'>
						{currentBoard?.name}
					</span>
				</div>

				<div className='flex items-center'>
					<Button
						onClick={() => setIsNewTaskOpen(true)}
						disabled={!currentBoard?.columns.length || !boards.length}>
						<div className='md:hidden'>
							<AddIcon />
						</div>
						<span className='hidden md:block'>+ Add New Task</span>
					</Button>
					{currentBoard && currentBoard.columns.length > 0 && (
						<Modal
							isOpen={isNewTaskOpen}
							onClose={() => setIsNewTaskOpen(false)}
							isModalDelete={false}>
							<TaskForm onCloseModal={() => setIsNewTaskOpen(false)} />
						</Modal>
					)}
					<BoardOptions />
				</div>
			</div>
		</div>
	);
}

export default Topbar;
