import { tool } from 'ai';
import { z } from 'zod';

export default tool({
  description: 'Style the design of this application',
  parameters: z.object({
    element: z.enum(["background", "bubble", "text"]).describe('The element to style'),
    color: z.string().describe('The color to set the element to. Must be a valid CSS color'),
  }),
  execute: async ({ element, color }) => ({
    element: element.toLowerCase(),
    color
  }),
})