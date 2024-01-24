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

// default system message obtained using the following method: https://twitter.com/DeminDimin/status/1619935545144279040
  export const _defaultSystemMessage =
  import.meta.env.VITE_DEFAULT_SYSTEM_MESSAGE ??
  `Be kindful. Respond using Markdown.`;



export const modelOptions: ModelOptions[] = [
  'ada',
  'airochronos-33b',
  'babbage',
  'bing',
  'chatglm-2-6b',
  'claude-100k',
  'claude-2',
  'claude-2-100k',
  'claude-instant',
  'claude-instant-1',
  'code-llama-34b-instruct',
  'codellama-13b',
  'codellama-34b',
  'codellama-7b',
  'cohere',
  'curie',
  'davinci',
  'decilm-6b-instruct',
  'falcon-180b',
  'falcon-180b-chat',
  'flan-t5-xxl',
  'gpt-3.5-turbo',
  'gpt-3.5-turbo-0301',
  'gpt-3.5-turbo-0613',
  'gpt-3.5-turbo-1106',
  'gpt-3.5-turbo-16k',
  'gpt-3.5-turbo-16k-0301',
  'gpt-3.5-turbo-16k-0613',
  'gpt-4',
  'gpt-4-0314',
  'gpt-4-0613',
  'gpt-4-1106-preview',
  'gpt-4-32k',
  'gpt-4-32k-0314',
  'gpt-4-32k-0613',
  'guanaco-33b',
  'idefics-80b',
  'inflection-1',
  'llama-2-13b',
  'llama-2-70b',
  'llama-2-70b-chat',
  'llama-2-7b',
  'llama2',
  'llava-13b',
  'mythomax-13b',
  'oasst-llama-2-13b',
  'oasst-llama-2-30b',
  'oasst-llama-2-70b',
  'oasst-pythia-12b',
  'oasst-pythia-2-12b',
  'oasst-sft-6-llama-30b',
  'pai-001',
  'pai-001-light',
  'pai-001-rp',
  'pai-001-light-rp',
  'palm',
  'palm-2',
  'qwen-7b',
  'solar-70b',
  'starchat-beta',
  'text-ada-001',
  'text-babbage-001',
  'text-curie-001',
  'text-davinci-001',
  'text-davinci-002',
  'text-davinci-003',
  'wizardcoder-34B',
  'wizardlm-13b',
  'wizardmath-13B',
  'wizardmath-7B',
  'you-chat'
];

export const defaultModel = 'gpt-3.5-turbo';

export const modelMaxToken = {
  'ada': 2049,
  'airochronos-33b': 2048,
  'babbage': 2049,
  'bing': 2048,
  'chatglm-2-6b': 2048,
  'claude-100k': 104800,
  'claude-2': 100000,
  'claude-2-100k': 104800,
  'claude-instant': 10000,
  'claude-instant-1': 2048,
  'code-llama-34b-instruct': 4096,
  'codellama-13b': 2048,
  'codellama-34b': 2048,
  'codellama-7b': 2048,
  'cohere': 4096,
  'curie': 2049,
  'davinci': 2049,
  'decilm-6b-instruct': 2048,
  'falcon-180b': 2048,
  'falcon-180b-chat': 2048,
  'flan-t5-xxl': 1024,
  'gpt-3.5-turbo': 4097,
  'gpt-3.5-turbo-0301': 4097,
  'gpt-3.5-turbo-0613': 4097,
  'gpt-3.5-turbo-1106': 16384,
  'gpt-3.5-turbo-16k': 16385,
  'gpt-3.5-turbo-16k-0301': 16384,
  'gpt-3.5-turbo-16k-0613': 16385,
  'gpt-4': 8192,
  'gpt-4-0314': 8192,
  'gpt-4-0613': 8192,
  'gpt-4-1106-preview': 128000,
  'gpt-4-32k': 32768,
  'gpt-4-32k-0314': 32768,
  'gpt-4-32k-0613': 32768,
  'guanaco-33b': 2048,
  'idefics-80b': 1024,
  'inflection-1': 2048,
  'llama-2-13b': 4096,
  'llama-2-70b': 4096,
  'llama-2-70b-chat': 4096,
  'llama-2-7b': 4096,
  'llama2': 2048,
  'llava-13b': 2048,
  'mythomax-13b': 2048,
  'oasst-llama-2-13b': 2048,
  'oasst-llama-2-30b': 2048,
  'oasst-llama-2-70b': 2048,
  'oasst-pythia-12b': 2048,
  'oasst-pythia-2-12b': 2048,
  'oasst-sft-6-llama-30b': 2048,
  'pai-001': 32768,
  'pai-001-light': 16384,
  'pai-001-rp': 32768,
  'pai-001-light-rp': 16384,
  'palm': 2048,
  'palm-2': 2048,
  'qwen-7b': 2048,
  'solar-70b': 2048,
  'starchat-beta': 1024,
  'text-ada-001': 2049,
  'text-babbage-001': 2049,
  'text-curie-001': 2049,
  'text-davinci-001': 2048,
  'text-davinci-002': 4097,
  'text-davinci-003': 4097,
  'wizardcoder-34B': 2048,
  'wizardlm-13b': 2048,
  'wizardmath-13B': 2048,
  'wizardmath-7B': 2048,
  'you-chat': 2048
};

export const modelCost = {
  'ada': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'airochronos-33b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'babbage': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'bing': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'chatglm-2-6b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'claude-100k': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'claude-2': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'claude-2-100k': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'claude-instant': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'claude-instant-1': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'code-llama-34b-instruct': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'codellama-13b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'codellama-34b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'codellama-7b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'cohere': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'curie': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'davinci': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'decilm-6b-instruct': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'falcon-180b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'falcon-180b-chat': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'flan-t5-xxl': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'gpt-3.5-turbo': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'gpt-3.5-turbo-0301': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'gpt-3.5-turbo-0613': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'gpt-3.5-turbo-1106': {
    'prompt': { price: 0.001, unit: 1000 },
    'completion': { price: 0.0015, unit: 1000 },
  },
  'gpt-3.5-turbo-16k': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'gpt-3.5-turbo-16k-0301': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'gpt-3.5-turbo-16k-0613': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'gpt-4': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'gpt-4-0314': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'gpt-4-0613': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'gpt-4-1106-preview': {
    'prompt': { price: 0.01, unit: 1000 },
    'completion': { price: 0.03, unit: 1000 },
  },
  'gpt-4-32k': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'gpt-4-32k-0314': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'gpt-4-32k-0613': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'guanaco-33b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'idefics-80b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'inflection-1': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'llama-2-13b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'llama-2-70b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'llama-2-70b-chat': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'llama-2-7b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'llama2': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'llava-13b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'mythomax-13b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'oasst-llama-2-13b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'oasst-llama-2-30b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'oasst-llama-2-70b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'oasst-pythia-12b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'oasst-pythia-2-12b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'oasst-sft-6-llama-30b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'pai-001': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'pai-001-light': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'pai-001-rp': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'pai-001-light-rp': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'palm': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'palm-2': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'qwen-7b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'solar-70b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'starchat-beta': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'text-ada-001': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'text-babbage-001': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'text-curie-001': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'text-davinci-001': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'text-davinci-002': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'text-davinci-003': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'wizardcoder-34B': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'wizardlm-13b': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'wizardmath-13B': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'wizardmath-7B': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  },
  'you-chat': {
    'prompt': {'price': 0.0015, 'unit': 1000},
    'completion': {'price': 0.002, 'unit': 1000},
  }
};

export const defaultUserMaxToken = 3500;

export const _defaultChatConfig: ConfigInterface = {
  model: defaultModel,
  max_tokens: defaultUserMaxToken,
  temperature: 0.3,
  presence_penalty: 0,
  top_p: 0.95,
  frequency_penalty: 0,
};

export const generateDefaultChat = (
  title?: string,
  folder?: string
): ChatInterface => ({
  id: uuidv4(),
  title: title ? title : 'New Chat',
  messages:
    useStore.getState().defaultSystemMessage.length > 0
      ? [{ role: 'system', content: useStore.getState().defaultSystemMessage }]
      : [],
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
