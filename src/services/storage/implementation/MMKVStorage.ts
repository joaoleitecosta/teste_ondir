import { MMKV } from "react-native-mmkv";

import type { Storage } from "../storage";

export const MMKVInstance = new MMKV({
	id: "NubbeApp",
	encryptionKey: "djugsaudjdsajsabjdbsa",
});

export const MMKVStorage: Storage = {
	getItem: async (key) => {
		const item = await MMKVInstance.getString(key);
		if (item) {
			return JSON.parse(item);
		}
		return null;
	},
	setItem: async (key, value) => {
		MMKVInstance.set(key, JSON.stringify(value));
	},
	removeItem: async (key) => {
		MMKVInstance.delete(key);
	},
	clear: async () => {
		MMKVInstance.clearAll();
	},
};
