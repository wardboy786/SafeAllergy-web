// This is a Genkit flow for suggesting common allergens to users setting up their profile.
// It exports the suggestAllergens function, SuggestAllergensInput type, and SuggestAllergensOutput type.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestAllergensInputSchema = z.object({
  partialAllergen: z.string().describe('The partial allergen the user has typed.'),
});
export type SuggestAllergensInput = z.infer<typeof SuggestAllergensInputSchema>;

const SuggestAllergensOutputSchema = z.object({
  suggestions: z.array(
    z.string().describe('A list of suggested allergens based on the input.')
  ).describe('The list of suggested allergens.')
});
export type SuggestAllergensOutput = z.infer<typeof SuggestAllergensOutputSchema>;

export async function suggestAllergens(input: SuggestAllergensInput): Promise<SuggestAllergensOutput> {
  return suggestAllergensFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestAllergensPrompt',
  input: {schema: SuggestAllergensInputSchema},
  output: {schema: SuggestAllergensOutputSchema},
  prompt: `You are an AI assistant that suggests allergens based on a partial input.

  Suggest a list of allergens that match the partial allergen provided by the user.
  The list should be no more than 5 items.

  Partial Allergen: {{{partialAllergen}}}
  `,
});

const suggestAllergensFlow = ai.defineFlow(
  {
    name: 'suggestAllergensFlow',
    inputSchema: SuggestAllergensInputSchema,
    outputSchema: SuggestAllergensOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
