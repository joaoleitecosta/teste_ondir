import {
	useMutation as useMutateFunction,
	useQueryClient,
} from "@tanstack/react-query";
import type { UseMutationResult } from "@types";
export interface MutationOptions<TData> {
	onSuccess?: (data: TData) => void;
	onError?: (error: Error) => void;
	errorMessage?: string;
	onSettled?: () => void;
}

export function useMutation<TVariables, TData>(
	mutationFn: (variables: TVariables) => Promise<TData>,
	queryKey: readonly unknown[],
	options?: MutationOptions<TData>,
): UseMutationResult<TData, TVariables> {
	const queryClient = useQueryClient();

	const { mutate, isError, isPending } = useMutateFunction<
		TData,
		Error,
		TVariables
	>({
		mutationFn: mutationFn,
		retry: false,
		onError: (error) => {
			options?.onError?.(error);
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: queryKey,
			});
			options?.onSuccess?.(data);
		},
		onSettled: () => options?.onSettled?.(),
	});

	return { mutate, isLoading: isPending, isError };
}
