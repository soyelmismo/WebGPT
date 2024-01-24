import { Prompt } from './prompt';
import { Theme } from './theme';

export type Role = 'user' | 'assistant' | 'system';
export const roles: Role[] = ['user', 'assistant', 'system'];

export interface MessageInterface {
  role: Role;
  content: string;
}

export interface ChatInterface {
  id: string;
  title: string;
  folder?: string;
  messages: MessageInterface[];
  config: ConfigInterface;
  titleSet: boolean;
}

export interface ConfigInterface {
  model: ModelOptions;
  max_tokens: number;
  temperature: number;
  presence_penalty: number;
  top_p: number;
  frequency_penalty: number;
}

export interface ChatHistoryInterface {
  title: string;
  index: number;
  id: string;
}

export interface ChatHistoryFolderInterface {
  [folderId: string]: ChatHistoryInterface[];
}

export interface FolderCollection {
  [folderId: string]: Folder;
}

export interface Folder {
  id: string;
  name: string;
  expanded: boolean;
  order: number;
  color?: string;
}

export type ModelOptions = 'ada' | 'airochronos-33b' | 'babbage' | 'bing' | 'chatglm-2-6b' | 'claude-100k' | 'claude-2' | 'claude-2-100k' | 'claude-instant' | 'claude-instant-1' | 'code-llama-34b-instruct' | 'codellama-13b' | 'codellama-34b' | 'codellama-7b' | 'cohere' | 'curie' | 'davinci' | 'decilm-6b-instruct' | 'falcon-180b' | 'falcon-180b-chat' | 'flan-t5-xxl' | 'gpt-3.5-turbo' | 'gpt-3.5-turbo-0301' | 'gpt-3.5-turbo-0613' | 'gpt-3.5-turbo-1106' | 'gpt-3.5-turbo-16k' | 'gpt-3.5-turbo-16k-0301' | 'gpt-3.5-turbo-16k-0613' | 'gpt-4' | 'gpt-4-0314' | 'gpt-4-0613' | 'gpt-4-1106-preview' | 'gpt-4-32k' | 'gpt-4-32k-0314' | 'gpt-4-32k-0613' | 'guanaco-33b' | 'idefics-80b' | 'inflection-1' | 'llama-2-13b' | 'llama-2-70b' | 'llama-2-70b-chat' | 'llama-2-7b' | 'llama2' | 'llava-13b' | 'mythomax-13b' | 'oasst-llama-2-13b' | 'oasst-llama-2-30b' | 'oasst-llama-2-70b' | 'oasst-pythia-12b' | 'oasst-pythia-2-12b' | 'oasst-sft-6-llama-30b' |   'pai-001' | 'pai-001-light' | 'pai-001-rp' | 'pai-001-light-rp' | 'palm' | 'palm-2' | 'qwen-7b' | 'solar-70b' | 'starchat-beta' | 'text-ada-001' | 'text-babbage-001' | 'text-curie-001' | 'text-davinci-001' | 'text-davinci-002' | 'text-davinci-003' | 'wizardcoder-34B' | 'wizardlm-13b' | 'wizardmath-13B' | 'wizardmath-7B' | 'you-chat';

export type TotalTokenUsed = {
  [model in ModelOptions]?: {
    promptTokens: number;
    completionTokens: number;
  };
};
export interface LocalStorageInterfaceV0ToV1 {
  chats: ChatInterface[];
  currentChatIndex: number;
  apiKey: Record<string, string>;
  apiFree: boolean;
  apiFreeEndpoint: string;
  theme: Theme;
}

export interface LocalStorageInterfaceV1ToV2 {
  chats: ChatInterface[];
  currentChatIndex: number;
  apiKey: Record<string, string>;
  apiFree: boolean;
  apiFreeEndpoint: string;
  apiEndpoint?: string;
  theme: Theme;
}

export interface LocalStorageInterfaceV2ToV3 {
  chats: ChatInterface[];
  currentChatIndex: number;
  apiKey: Record<string, string>;
  apiFree: boolean;
  apiFreeEndpoint: string;
  apiEndpoint?: string;
  theme: Theme;
  autoTitle: boolean;
}
export interface LocalStorageInterfaceV3ToV4 {
  chats: ChatInterface[];
  currentChatIndex: number;
  apiKey: Record<string, string>;
  apiFree: boolean;
  apiFreeEndpoint: string;
  apiEndpoint?: string;
  theme: Theme;
  autoTitle: boolean;
  prompts: Prompt[];
}

export interface LocalStorageInterfaceV4ToV5 {
  chats: ChatInterface[];
  currentChatIndex: number;
  apiKey: Record<string, string>;
  apiFree: boolean;
  apiFreeEndpoint: string;
  apiEndpoint?: string;
  theme: Theme;
  autoTitle: boolean;
  prompts: Prompt[];
}

export interface LocalStorageInterfaceV5ToV6 {
  chats: ChatInterface[];
  currentChatIndex: number;
  apiKey: Record<string, string>;
  apiFree: boolean;
  apiFreeEndpoint: string;
  apiEndpoint?: string;
  theme: Theme;
  autoTitle: boolean;
  prompts: Prompt[];
}

export interface LocalStorageInterfaceV6ToV7 {
  chats: ChatInterface[];
  currentChatIndex: number;
  apiFree?: boolean;
  apiKey: Record<string, string>;
  apiEndpoint: string;
  theme: Theme;
  autoTitle: boolean;
  prompts: Prompt[];
  defaultChatConfig: ConfigInterface;
  defaultSystemMessage: string;
  hideMenuOptions: boolean;
  firstVisit: boolean;
  hideSideMenu: boolean;
}

export interface LocalStorageInterfaceV7oV8
  extends LocalStorageInterfaceV6ToV7 {
  foldersName: string[];
  foldersExpanded: boolean[];
  folders: FolderCollection;
}
