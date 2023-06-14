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
  'gpt-3.5-turbo-16k',
  'gpt-3.5-turbo-0613',
  'gpt-3.5-turbo-16k-0613',
  'gpt-4',
  'gpt-4-0613',
  'gpt-4-32k',
  'gpt-4-32k-0613',
  'bard',
  'alpaca-13b',
  'vicuna-13b',
  'koala-13b',
  'llama-13b', 
  'oasst-pythia-12b', 
  'fastchat-t5-3b', 
  'test-sage', 
  'test-claude+', 
  'test-claude-instant-100k', 
  'test-claude-instant',
];

export const defaultModel = 'gpt-3.5-turbo';

export const modelMaxToken = {
  'gpt-3.5-turbo': 4096,
  'gpt-3.5-turbo-16k': 16384,
  'gpt-3.5-turbo-0613': 4096,
  'gpt-3.5-turbo-16k-0613': 16384,
  'gpt-4': 8192,
  'gpt-4-0613': 8192,
  'gpt-4-32k': 32768,
  'gpt-4-32k-0613': 32768,
  'bard': 4096,
  'alpaca-13b' : 2048,
  'vicuna-13b': 2048,
  'koala-13b': 2048,
  'llama-13b': 2048, 
  'oasst-pythia-12b': 2048, 
  'fastchat-t5-3b': 2048, 
  'test-sage': 5200, 
  'test-claude+': 11000, 
  'test-claude-instant-100k': 100000, 
  'test-claude-instant': 11000,
};

export const modelCost = {
  'gpt-3.5-turbo': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'gpt-3.5-turbo-16k': {
    prompt: { price: 0.003, unit: 1000 },
    completion: { price: 0.004, unit: 1000 },
  },
  'gpt-3.5-turbo-0613': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'gpt-3.5-turbo-16k-0613': {
    prompt: { price: 0.003, unit: 1000 },
    completion: { price: 0.004, unit: 1000 },
  },
  'gpt-4': {
    prompt: { price: 0.03, unit: 1000 },
    completion: { price: 0.06, unit: 1000 },
  },
  'gpt-4-0613': {
    prompt: { price: 0.03, unit: 1000 },
    completion: { price: 0.06, unit: 1000 },
  },
  'gpt-4-32k': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'gpt-4-32k-0613': {
    prompt: { price: 0.06, unit: 1000 },
    completion: { price: 0.12, unit: 1000 },
  },
  'bard': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'alpaca-13b': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'vicuna-13b': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'koala-13b': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'llama-13b': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'oasst-pythia-12b': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'fastchat-t5-3b': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'test-sage': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'test-claude+': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'test-claude-instant-100k': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
  'test-claude-instant': {
    prompt: { price: 0.0015, unit: 1000 },
    completion: { price: 0.002, unit: 1000 },
  },
};

export const defaultUserMaxToken = 3500;

export const _defaultChatConfig: ConfigInterface = {
  model: defaultModel,
  max_tokens: defaultUserMaxToken,
  temperature: 0.3,
  presence_penalty: 0,
  top_p: 1,
  frequency_penalty: 0,
};

export const generateDefaultChat = (
  title?: string,
  folder?: string
): ChatInterface => ({
  id: uuidv4(),
  title: title ? title : 'New Chat',
  messages:
    [],
  config: { ...useStore.getState().defaultChatConfig },
  titleSet: false,
  folder,
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
