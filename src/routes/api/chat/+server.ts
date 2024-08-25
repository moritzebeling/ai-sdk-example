import { createOpenAI } from '@ai-sdk/openai';
import { z } from 'zod';
import { streamText, tool } from 'ai';
import type { RequestHandler } from './$types';

import { env } from '$env/dynamic/private';
import { team } from '$lib/data/team';

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
        execute: async ({ location }) => {
          const id = location.toLowerCase().replace('münchen', 'munich')

          let temperature = Math.floor(Math.random() * 10) + 18
          let description = `The weather in ${location} is ${temperature} degrees`

          if(id === 'hamburg') {
            location = 'JvM Hamburg Headquarters'
            temperature = 20
            description = 'Be prepared for everything...'
          } else if(id === 'berlin') {
            location = 'JvM Berlin Office'
            temperature = 22
            description = 'Better than Hamburg'
          } else if(id === 'munich') {
            temperature = 24
            description = 'Why don’t we have a TECH office in munich??'
          }
          
          return {
            location,
            temperature,
            description,
          }
        },
      }),
      time: tool({
        description: 'Get the current time',
        parameters: z.object({
          empty: z.string().optional().describe('This is an empty parameter and can be ignored'),
        }),
        execute: async () => ({
          time: new Date().toLocaleTimeString(),
        }),
      }),
      theme: tool({
        description: 'Style the design of this application',
        parameters: z.object({
          element: z.enum(["background", "bubble", "text"]).describe('The element to style'),
          color: z.string().describe('The color to set the element to. Must be a valid CSS color'),
        }),
        execute: async ({ element, color }) => ({
          element: element.toLowerCase(),
          color
        }),
      }),
      team: tool({
        description: 'Get a list of people who are in the team of Jung von Matt TECH (JvM)',
        parameters: z.object({
          sort: z.enum(["none", "asc", "desc"]).optional().describe('Optional sorting of the team members'),
        }),
        execute: async ({ sort }) => {
          return {
            sort: ['asc', 'desc'].includes(sort) ? sort : undefined,
            team: sort === 'asc' ? team.sort() : sort === 'desc' ? team.sort().reverse() : team
          }
        },
      }),
    },
    messages,
  });

  return result.toDataStreamResponse();
}) satisfies RequestHandler;