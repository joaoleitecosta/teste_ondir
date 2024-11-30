export interface MetaDataPage {
	total: number;
	perPage: number;
	currentPage: number;
	lastPage: number;
	firstPage: number;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
}

export interface Page<Data> {
	meta: MetaDataPage;
	data: Data[];
}
export interface PaginatedList {
	enabled?: boolean;
	staleTime?: number;
}
export interface UserPaginationListResult<TData> {
	list: TData[];
	isError: boolean;
	isLoading: boolean;
	isFetching: boolean;
	refetch: () => void;
	fetchNextPage: () => void;
	hasNextPage: boolean;
}

export interface UserQueryResult<TData>
	extends Pick<
		UserPaginationListResult,
		"isError" | "isLoading" | "isLoading" | "isFetching"
	> {
	data: TData | undefined;
}

export interface UseQueryParams<TData> {
	queryKey: [QueryKeys, unknown];
	queryFn: () => TData;
	staleTime?: number;
	enabled?: boolean;
}

export interface UseMutationResult<TData, TVariables> {
	// biome-ignore lint/suspicious/noConfusingVoidType: <explanation>
	mutate: (variables: TVariables) => TData | void;
	isLoading: boolean;
	isError: boolean;
}
