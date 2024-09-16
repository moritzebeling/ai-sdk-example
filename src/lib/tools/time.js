import { tool } from 'ai';
import { z } from 'zod';

export default tool({
  description: 'Get the current time',
  parameters: z.object({
    empty: z.string().optional().describe('This is an empty parameter and can be ignored'),
  }),
  execute: async () => ({
    time: new Date().toLocaleTimeString(),
  }),
})