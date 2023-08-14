export const officialAPIEndpoint = 'https://free.churchless.tech/v1/chat/completions';
export const defaultAPIEndpoint =
  import.meta.env.VITE_DEFAULT_API_ENDPOINT || officialAPIEndpoint;

const additionalEndpoints = [
  'https://api.openai.com/v1/chat/completions',
  'https://chimeragpt.adventblocks.cc/api/v1/chat/completions',
  'https://free.catto.codes/v1/chat/completions',
  'https://api.hypere.app/v1/chat/completions',
  'https://api.catto.codes/v1/chat/completions',
  'https://api.pawan.krd/v1/chat/completions',
  'https://gpt.daku.tech/v1/chat/completions',
];

export const allEndpoints = [officialAPIEndpoint, ...additionalEndpoints];