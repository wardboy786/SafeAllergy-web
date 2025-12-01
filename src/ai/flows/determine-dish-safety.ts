'use server';

/**
 * @fileOverview Analyzes menu dish descriptions and ingredients against a user's allergen profile to determine dish safety.
 *
 * - determineDishSafety - A function that analyzes dish safety based on user allergens and dish information.
 * - DetermineDishSafetyInput - The input type for the determineDishSafety function.
 * - DetermineDishSafetyOutput - The return type for the determineDishSafety function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DetermineDishSafetyInputSchema = z.object({
  dishDescription: z.string().describe('The description of the dish, including ingredients.'),
  userAllergens: z.array(z.string()).describe('A list of allergens the user is sensitive to.'),
});
export type DetermineDishSafetyInput = z.infer<typeof DetermineDishSafetyInputSchema>;

const DetermineDishSafetyOutputSchema = z.object({
  isSafe: z.boolean().describe('Whether the dish is safe for the user to consume.'),
  riskLevel: z.string().describe('The level of risk associated with consuming the dish (e.g., low, medium, high).'),
  allergensDetected: z.array(z.string()).describe('A list of allergens detected in the dish that match the user profile.'),
});
export type DetermineDishSafetyOutput = z.infer<typeof DetermineDishSafetyOutputSchema>;

export async function determineDishSafety(input: DetermineDishSafetyInput): Promise<DetermineDishSafetyOutput> {
  return determineDishSafetyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'determineDishSafetyPrompt',
  input: {schema: DetermineDishSafetyInputSchema},
  output: {schema: DetermineDishSafetyOutputSchema},
  prompt: `You are an AI assistant that analyzes menu dish descriptions and ingredients to determine if a dish is safe for a user with specific allergies.

  Analyze the following dish description:
  {{dishDescription}}

  The user is allergic to the following allergens:
  {{#each userAllergens}}- {{this}}\n{{/each}}

  Determine if the dish is safe for the user to consume.  Provide a risk level (low, medium, high), and list any allergens detected in the dish that match the user's profile.

  Format your output as a JSON object with the following keys:
  - isSafe (boolean): true if the dish is safe, false otherwise.
  - riskLevel (string): The level of risk associated with consuming the dish (low, medium, high).
  - allergensDetected (string[]): A list of allergens detected in the dish that match the user profile.  If no allergens are detected, return an empty array.
  `,
});

const determineDishSafetyFlow = ai.defineFlow(
  {
    name: 'determineDishSafetyFlow',
    inputSchema: DetermineDishSafetyInputSchema,
    outputSchema: DetermineDishSafetyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
