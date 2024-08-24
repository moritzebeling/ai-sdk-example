import { createOpenAI } from '@ai-sdk/openai';
import { z } from 'zod';
import { streamText, tool } from 'ai';
import type { RequestHandler } from './$types';

import { env } from '$env/dynamic/private';

const openai = createOpenAI({
  apiKey: env.OPENAI_API_KEY ?? '',
});

export const POST = (async ({ request }) => {
  const { messages } = await request.json();

  const result = await streamText({
    model: openai('gpt-4-turbo-preview'),
    tools: {
      weather: tool({
        description: 'Get the weather in a location',
        parameters: z.object({
          location: z.string().describe('The location to get the weather for'),
        }),
        execute: async ({ location }) => ({
          location,
          temperature: 72 + Math.floor(Math.random() * 21) - 10,
        }),
      }),
      time: tool({
        description: 'Get the current time',
        parameters: z.object({
          empty: z.string().optional().describe('This is an empty parameter'),
        }),
        execute: async () => ({
          time: new Date().toLocaleTimeString(),
        }),
      }),
    },
    messages,
  });

  return result.toDataStreamResponse();
}) satisfies RequestHandler;