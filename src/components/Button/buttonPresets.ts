import type { ThemeColors } from "../../theme/theme";
import type { BoxProps } from "../Box/Box";

export interface ButtonUIProps {
	container: BoxProps;
	content: ThemeColors;
}

export type ButtonPresets = "primary" | "outline";

export const buttonPresets: Record<
	ButtonPresets,
	{
		default: ButtonUIProps;
		disabled: ButtonUIProps;
	}
> = {
	primary: {
		default: {
			container: {
				backgroundColor: "primary",
			},
			content: "primaryContrast",
		},
		disabled: {
			container: {
				backgroundColor: "gray4",
			},
			content: "gray2",
		},
	},
	outline: {
		default: {
			container: {
				borderWidth: 1,
				borderColor: "primary",
			},
			content: "primary",
		},
		disabled: {
			container: {
				borderWidth: 1,
				borderColor: "gray4",
			},
			content: "gray2",
		},
	},
};
