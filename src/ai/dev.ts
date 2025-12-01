import { config } from 'dotenv';
config();

import '@/ai/flows/profile-allergen-suggestions.ts';
import '@/ai/flows/summarize-menu-card.ts';
import '@/ai/flows/extract-allergens-from-product-scan.ts';
import '@/ai/flows/determine-dish-safety.ts';