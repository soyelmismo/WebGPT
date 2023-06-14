import { defaultAPIEndpoint } from '@constants/auth';
import { StoreSlice } from './store';

export interface AuthSlice {
  apiKey?: string;
  apiEndpoint: string;
  apiKeys: Record<string, string>;
  firstVisit: boolean;
  setApiKey: (apiKey: string) => void;
  setApiEndpoint: (apiEndpoint: string) => void;
  setFirstVisit: (firstVisit: boolean) => void;
}

export const createAuthSlice: StoreSlice<AuthSlice> = (set, get) => ({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || undefined,
  apiEndpoint: defaultAPIEndpoint,
  apiKeys: {},
  firstVisit: true,
  setApiKey: (apiKey: string) => {
    const apiEndpoint = get().apiEndpoint;
    set((prev: AuthSlice) => ({
      ...prev,
      apiKey: apiKey,
      apiKeys: {
        ...prev.apiKeys,
        [apiEndpoint]: apiKey,
      },
    }));
  },
  setApiEndpoint: (apiEndpoint: string) => {
    set((prev: AuthSlice) => ({
      ...prev,
      apiEndpoint: apiEndpoint,
      apiKey: prev.apiKeys[apiEndpoint] || '',
    }));
  },
  setFirstVisit: (firstVisit: boolean) => {
    set((prev: AuthSlice) => ({
      ...prev,
      firstVisit: firstVisit,
    }));
  },
});
