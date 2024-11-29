import React from "react";

import {
	Controller,
	type FieldValues,
	type UseControllerProps,
} from "react-hook-form";

import {
	PasswordInput,
	type PasswordInputProps,
} from "../PasswordInput/PasswordInput";

export function FormPasswordInput<FormType extends FieldValues>({
	control,
	name,
	rules,
	...passwordInputProps
}: PasswordInputProps & UseControllerProps<FormType>) {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field, fieldState }) => (
				<PasswordInput
					value={field.value}
					errorMessage={fieldState?.error?.message}
					onChangeText={field.onChange}
					{...passwordInputProps}
				/>
			)}
		/>
	);
}
