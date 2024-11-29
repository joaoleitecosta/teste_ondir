import type { ToastService } from "./toastTypes";
// import {useToastContext} from './useToastContext';
import { useToastServiceZustand, useToastZustand } from "./useToastZustand";

export function useToast(): ToastService["toast"] {
	return useToastZustand();
}

export function useToastService(): Pick<
	ToastService,
	"showToast" | "hideToast"
> {
	const { hideToast, showToast } = useToastServiceZustand();

	return { showToast, hideToast };
}
