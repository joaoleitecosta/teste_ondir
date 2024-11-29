import {
	type PressableProps,
	type TouchableOpacityProps as RNTouchableOpacityProps,
	TouchableOpacity,
} from "react-native";

import {
	type BackgroundColorProps,
	type BorderProps,
	type LayoutProps,
	type SpacingProps,
	type SpacingShorthandProps,
	backgroundColor,
	border,
	createBox,
	createRestyleComponent,
	layout,
	spacing,
	spacingShorthand,
} from "@shopify/restyle";

import type { Theme } from "@theme";

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

type RestyleTypes = BackgroundColorProps<Theme> &
	SpacingProps<Theme> &
	LayoutProps<Theme> &
	BorderProps<Theme> &
	SpacingShorthandProps<Theme>;

export type TouchableOpacityBoxProps = RNTouchableOpacityProps & RestyleTypes;

export const TouchableOpacityBox = createRestyleComponent<
	TouchableOpacityBoxProps,
	Theme
>(
	[backgroundColor, spacing, spacingShorthand, layout, border],
	TouchableOpacity,
);

export type PressableBoxProps = PressableProps & RestyleTypes;
export const PressableBox = createRestyleComponent<PressableBoxProps, Theme>(
	[backgroundColor, spacing, spacingShorthand, layout, border],
	TouchableOpacity,
);
