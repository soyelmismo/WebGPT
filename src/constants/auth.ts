export const officialAPIEndpoint = 'https://api.openai.com/v1/chat/completions';
export const defaultAPIEndpoint =
  import.meta.env.VITE_DEFAULT_API_ENDPOINT || officialAPIEndpoint;

const additionalEndpoints = [
  'https://chimeragpt.adventblocks.cc/v1/chat/completions',
  'https://free.churchless.tech/v1/chat/completions',
  'https://api.pawan.krd/v1/chat/completions',
  'https://api.hypere.app/v1/chat/completions',
  'https://api.cattto.repl.co/v1/chat/completions',
];

export const allEndpoints = [officialAPIEndpoint, ...additionalEndpoints];