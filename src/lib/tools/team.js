import { tool } from 'ai';
import { z } from 'zod';

import { team } from '$lib/data/team';

export default tool({
  description: 'Get a list of people who are in the team of Jung von Matt TECH (JvM)',
  parameters: z.object({
    sort: z.enum(["none", "asc", "desc"]).describe('Sorting of the team members, default is no sorting'),
  }),
  execute: async ({ sort }) => {
    return {
      sort: sort === 'asc' || sort === 'desc' ? sort : undefined,
      team: team
    }
  },
})