import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AuthStackParamList } from './AuthStack';
import type { AppStackParamList } from './AppStack';

export type RootStackParamList = AuthStackParamList & AppStackParamList

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export type AppScreenProps<RouterName extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, RouterName>;
