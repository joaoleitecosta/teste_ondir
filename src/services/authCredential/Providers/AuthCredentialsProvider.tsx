import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
  type PropsWithChildren,
} from 'react';

import {type AuthCredential} from '@domain';

import type {AuthCredentialService} from '../authCredentialTypes';

import {authCredentialsStorage} from './authCredentialsStorage';

export const AuthCredentialsContext = createContext<AuthCredentialService>({
  authCredentials: null,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
  isLoading: false,
});

export function AuthCredentialsProvider({
  children,
}: Readonly<PropsWithChildren<Record<string, unknown>>>) {
  const [authCredentials, setAuthCredentials] = useState<AuthCredential | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);

  const startAuthCredentials = useCallback(async () => {
    try {
      const ac = await authCredentialsStorage.get();

      if (ac) {
        setAuthCredentials(ac);
      }
    } catch (error) {
      console.error('Empty user ', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    startAuthCredentials();
  }, [startAuthCredentials]);

  const saveCredentials = useCallback(
    async (ac: AuthCredential): Promise<void> => {
      setAuthCredentials(ac);
      await authCredentialsStorage.set(ac);
    },
    [],
  );

  const removeCredentials = useCallback(async (): Promise<void> => {
    await authCredentialsStorage.remove();
    setAuthCredentials(null);
  }, []);

  const contextValue = useMemo(
    () => ({
      authCredentials,
      isLoading,
      removeCredentials,
      saveCredentials,
    }),
    [authCredentials, isLoading, removeCredentials, saveCredentials],
  );

  return (
    <AuthCredentialsContext.Provider value={contextValue}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
