
import {useQuery} from '@tanstack/react-query';
import {authService} from '../authService';

export  function useAuthIsEmailAvailable({ email }: { email: string }) {
	const {data, isFetching} = useQuery({
    queryKey: ['VALIDATE_EMAIL', email ],
    queryFn: () => authService.isEmailAvailable(email),
    retry: false,
    staleTime: 20000,
  });

return {
	isAvailable: data,
	isFetching,
};

}

