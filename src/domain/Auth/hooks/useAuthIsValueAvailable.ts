import {authService} from '../authService';
import { QueryKeys, useQuery } from '../../../infra';

export  function useAuthIsEmailAvailable({ email }: { email: string }) {
	const {data, isFetching} = useQuery({
    queryKey: [QueryKeys.AuthIsEmailAvailable, email ],
    queryFn: () => authService.isEmailAvailable(email),
    staleTime: 20000,
  });

return {
	isAvailable: data,
	isFetching,
};

}

