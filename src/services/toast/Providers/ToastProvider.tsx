import React from "react";

import type { Toast, ToastService } from "../toastTypes";

export const ToastContext = React.createContext<ToastService>({
	toast: null,
	showToast: () => {},
	hideToast: () => {},
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
	const [toast, setToast] = React.useState<ToastService["toast"]>(null);

	function showToast(_toast: Toast) {
		setToast(_toast);
	}

	function hideToast() {
		setToast(null);
	}

	return (
		<ToastContext.Provider value={{ toast, showToast, hideToast }}>
			{children}
		</ToastContext.Provider>
	);
}
