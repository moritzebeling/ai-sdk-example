import { tool } from 'ai';
import { z } from 'zod';

export default tool({
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
      description = 'Sun? Rain? Who knows ...'
    } else if(id === 'berlin') {
      location = 'JvM Berlin Office'
      temperature = 22
      description = 'Better than Hamburg'
    } else if(id === 'munich') {
      temperature = 24
      description = 'Why don’t we have a TECH office in munich?'
    }
    
    return {
      location,
      temperature,
      description,
    }
  },
})