# **App Name**: AllergyScan Pro

## Core Features:

- Product Scan: Scan products (food, plants, cosmetics) using the device's camera to identify potential allergens.
- Advanced AI Allergen Detection: Utilize an AI model to analyze scanned items and detect the presence of allergens. The LLM acts as a tool and makes inferences about what components from an item match a users profile.
- Profile Management: Allow users to input their specific allergen sensitivities into a personal profile. Store the data in Firestore.
- Risk Assessment: Based on the user's profile and detected allergens, provide a risk assessment indicating whether the scanned item is safe or should be avoided.
- Allergen List: Display a detailed list of all allergens detected in the scanned item, highlighting any that match the user's profile.
- Menu Scan: Enable users to scan restaurant menus, with the AI identifying safe and risky dishes based on their profile. Store restaurant menu data in Firestore.
- Order Recommendation: Suggest dishes that are safe for the user to order, based on the scanned menu and their allergen profile.

## Style Guidelines:

- Primary color: Soft, calming blue (#64B5F6) to evoke trust and safety.
- Background color: Light, desaturated blue (#E3F2FD).
- Accent color: Gentle green (#A5D6A7) to indicate safety and health.
- Body and headline font: 'PT Sans' for clear readability and a modern feel.
- Use clear, minimalist icons to represent different allergens and safety levels.
- Design a clean, intuitive layout that prioritizes ease of use and quick access to information.
- Implement subtle animations to guide the user through the scanning process and provide feedback on the risk assessment.