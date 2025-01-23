import { useDarkModeContext } from "@/context/DarkModeContext";
import DarkThemeIcon from "../icons/DarkThemeIcon";
import LightThemeIcon from "../icons/LightThemeIcon";
import { Button } from "../ui/button";

function DarkModeBox() {
    const { isDarkMode, toggleDarkMode } = useDarkModeContext()

	return (
		<div className='px-main'>
			<div className='flex justify-center items-center gap-3 bg-background rounded-md py-main'>
				<LightThemeIcon />
				<Button
					variant={"transparent"}
					className='relative w-10 h-5 rounded-xl bg-main-purple hover:bg-main-purple-hover p-0'
					onClick={toggleDarkMode}>
					<div
						className={`absolute top-1/2 left-1 size-[14px] rounded-full bg-white -translate-y-1/2 transition-transform duration-300 ${
							isDarkMode && "translate-x-[18px]"
						}`}></div>
				</Button>
				<DarkThemeIcon />
			</div>
		</div>
	);
}

export default DarkModeBox;
