'use server';

/**
 * @fileOverview Extracts a list of potential allergens from product information.
 *
 * - extractAllergensFromProductScan - A function that handles the extraction of allergens from a product scan.
 * - ExtractAllergensFromProductScanInput - The input type for the extractAllergensFromProductScan function.
 * - ExtractAllergensFromProductScanOutput - The return type for the extractAllergensFromProductScan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExtractAllergensFromProductScanInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  productIngredients: z.string().describe('The ingredients of the product.'),
});

export type ExtractAllergensFromProductScanInput = z.infer<typeof ExtractAllergensFromProductScanInputSchema>;

const ExtractAllergensFromProductScanOutputSchema = z.object({
  allergens: z.array(
    z.string().describe('A potential allergen found in the product.')
  ).describe('A list of potential allergens found in the product.')
});

export type ExtractAllergensFromProductScanOutput = z.infer<typeof ExtractAllergensFromProductScanOutputSchema>;

export async function extractAllergensFromProductScan(
  input: ExtractAllergensFromProductScanInput
): Promise<ExtractAllergensFromProductScanOutput> {
  return extractAllergensFromProductScanFlow(input);
}

const extractAllergensPrompt = ai.definePrompt({
  name: 'extractAllergensPrompt',
  input: {schema: ExtractAllergensFromProductScanInputSchema},
  output: {schema: ExtractAllergensFromProductScanOutputSchema},
  prompt: `You are an AI assistant designed to identify potential allergens in a product based on its name and ingredients.

  Analyze the following product information and extract a list of potential allergens. Be as comprehensive as possible, erring on the side of caution.

  Product Name: {{{productName}}}
  Ingredients: {{{productIngredients}}}

  List all possible allergens:
  `,
});

const extractAllergensFromProductScanFlow = ai.defineFlow(
  {
    name: 'extractAllergensFromProductScanFlow',
    inputSchema: ExtractAllergensFromProductScanInputSchema,
    outputSchema: ExtractAllergensFromProductScanOutputSchema,
  },
  async input => {
    const {output} = await extractAllergensPrompt(input);
    return output!;
  }
);
