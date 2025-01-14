export const officialAPIEndpoint = 'https://free.churchless.tech/v1/chat/completions';
export const defaultAPIEndpoint =
  import.meta.env.VITE_DEFAULT_API_ENDPOINT || officialAPIEndpoint;

const additionalEndpoints = [
  'https://api.openai.com/v1/chat/completions',
  'https://api.pawan.krd/v1/completions',
  'https://api.pawan.krd/pai-001-rp/v1',
  'https://api.pawan.krd/pai-001-light-rp/v1',
  'https://api.naga.ac/v1/chat/completions',
  'https://api.mandrillai.tech/v1/chat/completions',
  'https://zukijourney.xyzbot.net/v1/chat/completions',
  'https://zukijourney.xyzbot.net/unf/chat/completions',
  'https://api.daku.tech/v1/chat/completions',
  'https://api.nova-oss.com/v1/chat/completions',
  'https://api.mmw1984.link/v1/chat/completions'
];

export const allEndpoints = [officialAPIEndpoint, ...additionalEndpoints];