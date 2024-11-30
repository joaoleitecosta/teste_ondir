import React from "react";

import { Button, Icon, Screen, Text } from "@components";
import type { AppScreenProps } from "@routes";

export function SuccessScreen({
	navigation,
	route,
}: AppScreenProps<"SuccessScreen">) {
	function goBackToBegin() {
		navigation.goBack();
	}
	return (
		<Screen>
			<Icon {...route?.params?.icon} />
			<Text mt="s24" preset="headingLarge">
				{route?.params?.title}
			</Text>
			<Text mt="s16" preset="paragraphLarge">
				{route?.params?.description}
			</Text>
			<Button mt="s40" onPress={goBackToBegin} title="Voltar ao início" />
		</Screen>
	);
}
