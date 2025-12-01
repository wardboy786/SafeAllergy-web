'use server';

/**
 * @fileOverview Summarizes a menu card using AI.
 *
 * - summarizeMenuCard - A function that takes menu text and returns a summary.
 * - SummarizeMenuCardInput - The input type for the summarizeMenuCard function.
 * - SummarizeMenuCardOutput - The return type for the summarizeMenuCard function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeMenuCardInputSchema = z.object({
  menuText: z.string().describe('The text content of the menu card to summarize.'),
});

export type SummarizeMenuCardInput = z.infer<typeof SummarizeMenuCardInputSchema>;

const SummarizeMenuCardOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the menu card.'),
});

export type SummarizeMenuCardOutput = z.infer<typeof SummarizeMenuCardOutputSchema>;

export async function summarizeMenuCard(input: SummarizeMenuCardInput): Promise<SummarizeMenuCardOutput> {
  return summarizeMenuCardFlow(input);
}

const summarizeMenuCardPrompt = ai.definePrompt({
  name: 'summarizeMenuCardPrompt',
  input: {schema: SummarizeMenuCardInputSchema},
  output: {schema: SummarizeMenuCardOutputSchema},
  prompt: `You are an expert restaurant menu summarizer. Please summarize the following menu card text, highlighting the different sections and types of dishes offered.

Menu Text:
{{menuText}}`,
});

const summarizeMenuCardFlow = ai.defineFlow(
  {
    name: 'summarizeMenuCardFlow',
    inputSchema: SummarizeMenuCardInputSchema,
    outputSchema: SummarizeMenuCardOutputSchema,
  },
  async input => {
    const {output} = await summarizeMenuCardPrompt(input);
    return output!;
  }
);
