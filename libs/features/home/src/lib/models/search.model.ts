import { z } from 'zod'

export const searchSchema = z.object({
  location: z.string().min(1, 'Location is required'),
  dates: z.string().min(1, 'Select dates'),
  guests: z.string().min(1, 'How many is required'),
})

export type SearchFormData = z.infer<typeof searchSchema>
