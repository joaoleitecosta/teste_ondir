import React from "react";

import {
	Controller,
	type FieldValues,
	type UseControllerProps,
} from "react-hook-form";

import { TextInput, type TextInputProps } from "../TextInput/TextInput";

export function FormTextInput<FormType extends FieldValues>({
	control,
	name,
	rules,
	errorMessage,
	...textInputProps
}: TextInputProps & UseControllerProps<FormType>) {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field, fieldState }) => (
				<TextInput
					value={field.value}
					errorMessage={fieldState?.error?.message ?? errorMessage}
					onChangeText={field.onChange}
					{...textInputProps}
				/>
			)}
		/>
	);
}
