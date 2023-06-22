import { Dispatch, SetStateAction } from "react";

export interface DarkModeProps {
	darkMode: Boolean;
	setDarkMode: Dispatch<SetStateAction<boolean>>;
}
