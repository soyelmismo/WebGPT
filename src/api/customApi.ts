import { ConfigInterface, MessageInterface } from '@type/chat';

export const endpoint = 'https://free.churchless.tech/v1/chat/completions';

export const getChatCompletion = async (
  apiKey: string,
  messages: MessageInterface[],
  config: ConfigInterface
) => {

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      messages,
      ...config,
    }),
  });
  if (!response.ok) throw new Error(await response.text());

  const data = await response.json();
  return data;
};

export const getChatCompletionStream = async (
  apiKey: string,
  messages: MessageInterface[],
  config: ConfigInterface
) => {

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      messages,
      ...config,
      stream: true,
    }),
  });
  if (!response.ok) throw new Error(await response.text());

  const stream = response.body;
  return stream;
};
