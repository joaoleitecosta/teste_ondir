import type { AuthCredential } from "@domain";

import { storage } from "../../storage";

const AUTH_KEY = "@Auth";

async function set(ac: AuthCredential): Promise<void> {
	await storage.setItem(AUTH_KEY, ac);
}

async function get(): Promise<AuthCredential | null> {
	return await storage.getItem<AuthCredential>(AUTH_KEY);
}

async function remove(): Promise<void> {
	await storage.removeItem(AUTH_KEY);
}

async function clear(): Promise<void> {
	await storage.clear();
}

export const authCredentialsStorage = { set, get, remove, clear };
