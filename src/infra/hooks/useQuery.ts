import { useQuery as useQueryRQ } from "@tanstack/react-query";
import type { UseQueryParams, UserQueryResult } from "@types";

/**
 * DATA: Data to be returned ec useQuery<Data>
 * @param queryKey key cache
 * @param timeCache time cache
 * @param getData function to get data
 * @returns data, isError, isLoading, isFetching
 */

export function useQuery<Data>({
	queryFn,
	queryKey,
	staleTime,
	enabled = true,
}: UseQueryParams<Data>): UserQueryResult<Data> {
	const { data, isError, isLoading, isFetching } = useQueryRQ({
		queryKey: queryKey,
		queryFn: queryFn,
		retry: false,
		staleTime: staleTime,
		enabled: enabled,
	});
	return { data, isError, isLoading, isFetching };
}
