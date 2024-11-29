import type React from "react";
import {
	KeyboardAvoidingView,
	Platform,
	type StyleProp,
	type ViewStyle,
} from "react-native";

import { useAppSafeArea, useAppTheme } from "@hooks";

import { Box, type BoxProps } from "../Box/Box";

import { ScrollViewContainer, ViewContainer } from "./components";
import { ScreenHeader } from "./components/ScreenHeader";

export interface ScreenProps extends BoxProps {
	children: Readonly<React.ReactNode>;
	canGoBack?: boolean;
	scrollable?: boolean;
	title?: string;
	HeaderComponent?: React.ReactNode;
}

export function Screen({
	children,
	canGoBack = false,
	scrollable = false,
	style,
	title,
	HeaderComponent,
	...boxProps
}: Readonly<ScreenProps>) {
	const { top, bottom } = useAppSafeArea();
	const { colors } = useAppTheme();

	const Container = scrollable ? ScrollViewContainer : ViewContainer;
	return (
		<KeyboardAvoidingView
			style={$keyboardView}
			behavior={Platform.OS === "ios" ? "padding" : undefined}
		>
			<Container backgroundColor={colors.background}>
				<Box
					px="s24"
					pb="s24"
					style={[{ paddingTop: top, paddingBottom: bottom }, style]}
					{...boxProps}
				>
					<ScreenHeader
						HeaderComponent={HeaderComponent}
						canGoBack={canGoBack}
						title={title}
					/>
					{children}
				</Box>
			</Container>
		</KeyboardAvoidingView>
	);
}

const $keyboardView: StyleProp<ViewStyle> = {
	flex: 1,
};
