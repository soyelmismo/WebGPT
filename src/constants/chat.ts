import { v4 as uuidv4 } from 'uuid';
import { ChatInterface, ConfigInterface, ModelOptions } from '@type/chat';
import useStore from '@store/store';

const date = new Date();
const dateString =
  date.getFullYear() +
  '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + date.getDate()).slice(-2);


export const modelOptions: ModelOptions[] = [
  'gpt-3.5-turbo',
  'gpt-4',
  'gpt-4-32k',
  // 'gpt-3.5-turbo-0301',
  // 'gpt-4-0314',
  // 'gpt-4-32k-0314',
];

export const defaultModel = 'gpt-3.5-turbo';

export const modelMaxToken = {
  'gpt-3.5-turbo': 4096,
  'gpt-3.5-turbo-0301': 4096,
  'gpt-4': 8192,
  'gpt-4-0314': 8192,
  'gpt-4-32k': 32768,
  'gpt-4-32k-0314': 32768,
};

export const modelCost = {
  'gpt-3.5-turbo': { price: 0.002, unit: 1000 },
  'gpt-3.5-turbo-0301': { price: 0.002, unit: 1000 },
  'gpt-4': { price: 0.03, unit: 1000 },
  'gpt-4-0314': { price: 0.03, unit: 1000 },
  'gpt-4-32k': { price: 0.06, unit: 1000 },
  'gpt-4-32k-0314': { price: 0.06, unit: 1000 },
};

export const defaultUserMaxToken = 3500;

export const _defaultChatConfig: ConfigInterface = {
  model: defaultModel,
  max_tokens: defaultUserMaxToken,
  temperature: 1,
  presence_penalty: 0,
  top_p: 1,
  frequency_penalty: 0,
};

export const generateDefaultChat = (title?: string, folder?: string): ChatInterface => ({
  id: uuidv4(),
  title: title ? title : 'New Chat',
  messages:
    [],
  config: { ...useStore.getState().defaultChatConfig },
  titleSet: false,
  folder
});

export const codeLanguageSubset = [
  'python',
  'javascript',
  'java',
  'go',
  'bash',
  'c',
  'cpp',
  'csharp',
  'css',
  'diff',
  'graphql',
  'json',
  'kotlin',
  'less',
  'lua',
  'makefile',
  'markdown',
  'objectivec',
  'perl',
  'php',
  'php-template',
  'plaintext',
  'python-repl',
  'r',
  'ruby',
  'rust',
  'scss',
  'shell',
  'sql',
  'swift',
  'typescript',
  'vbnet',
  'wasm',
  'xml',
  'yaml',
];
