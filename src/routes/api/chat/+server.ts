import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import type { RequestHandler } from './$types';

import { env } from '$env/dynamic/private';
import { systemprompt } from '$lib/data/systemprompt';

import weather from '$lib/tools/weather';
import time from '$lib/tools/time';
import theme from '$lib/tools/theme';
import team from '$lib/tools/team';
import photos from '$lib/tools/photos';
import fielmann from '$lib/tools/fielmann';

const openai = createOpenAI({
  apiKey: env.OPENAI_API_KEY ?? '',
});

export const POST = (async ({ request }) => {
  const { messages } = await request.json();

  const result = await streamText({
    model: openai('gpt-4-turbo-preview'),
    system: systemprompt,
    tools: {
      weather,
      time,
      theme,
      team,
      photos,
      fielmann,
    },
    messages,
  });

  return result.toDataStreamResponse();
}) satisfies RequestHandler;