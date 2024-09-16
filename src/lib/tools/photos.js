import { tool } from 'ai';
import { z } from 'zod';

export default tool({
  description: 'Get some holiday photos from the baltic sea',
  parameters: z.object({
    count: z.number().min(1).max(3).describe('Number of images to be shown'),
  }),
  execute: async ({ count }) => {
    return {
      count
    }
  },
})