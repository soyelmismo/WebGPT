import { ConfigInterface, MessageInterface } from '@type/chat';

export const getChatCompletion = async (
  endpoint: string,
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
  endpoint: string,
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
    },
    body: JSON.stringify({
      messages,
      ...sentConfig,
      stream: true,
    }),
  });
  if (response.status === 404 || response.status === 405)
    throw new Error(
      'Message from Better ChatGPT:\nInvalid API endpoint! We recommend you to check your free API endpoint.'
    );

  if (response.status === 429 || !response.ok) {
    const text = await response.text();
    let error = text;
    if (text.includes('insufficient_quota')) {
      error +=
        '\nMessage from Better ChatGPT:\nWe recommend changing your API endpoint or API key';
    }
    throw new Error(error);
  }

  const stream = response.body;
  return stream;
};
