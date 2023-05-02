import { ConfigInterface, MessageInterface } from '@type/chat';

export const endpoint = 'https://free.churchless.tech/v1/chat/completions';

export const validateApiKey = async (apiKey: string) => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const data = await response.json();

    if (response.status === 401) return false;
    else if (response.status === 400) return true;
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};

export const getChatCompletion = async (
  apiKey: string,
  messages: MessageInterface[],
  config: ConfigInterface
) => {
  var sentConfig = {
    model: config.model,
    temperature: config.temperature,
    presence_penalty: config.presence_penalty,
    top_p: config.top_p,
    frequency_penalty: config.frequency_penalty,
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      messages,
      ...sentConfig,
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
  var sentConfig = {
    model: config.model,
    temperature: config.temperature,
    presence_penalty: config.presence_penalty,
    top_p: config.top_p,
    frequency_penalty: config.frequency_penalty,
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      messages,
      ...sentConfig,
      stream: true,
    }),
  });
  if (!response.ok) throw new Error(await response.text());

  const stream = response.body;
  return stream;
};
