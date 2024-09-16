import { tool } from 'ai';
import { z } from 'zod';

import { sunglasses } from '$lib/data/fielmann';

export default tool({
  description: 'Suggest and display a pair of sunglasses from Fielmann',
  parameters: z.object({
    productId: z.number().min(1).max(3).describe('The product ID of the glasses'),
  }),
  execute: async ({ productId }) => {
    return {
      product: sunglasses.find(sunglasses => sunglasses.id === productId)
    }
  },
})