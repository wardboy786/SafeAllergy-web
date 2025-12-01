import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    id: "profile-screen",
    title: "Personalize Your Profile",
    description:
      "First, add all your allergen sensitivities to your profile. Our AI will use this information to provide personalized safety recommendations for you.",
    badge: "Step 1",
  },
  {
    id: "scan-screen",
    title: "Scan Anything, Anywhere",
    description:
      "Use your phone's camera to scan product barcodes or restaurant menus. Our app quickly processes the information to identify ingredients and dishes.",
    badge: "Step 2",
  },
  {
    id: "safe-result-screen",
    title: "Get Instant, Clear Results",
    description:
      "Receive an immediate and easy-to-understand analysis. See a clear 'Safe' or 'Avoid' signal, along with a detailed list of detected allergens.",
    badge: "Step 3",
  },
];

export function HowItWorks() {
  const images = PlaceHolderImages.filter((img) =>
    steps.map((s) => s.id).includes(img.id)
  );

  return (
    <section id="how-it-works" className="bg-secondary/50">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple Steps to Safety
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Getting started with AllergyScan Pro is as easy as 1-2-3.
          </p>
        </div>
        <div className="relative mt-12 space-y-16">
          {steps.map((step, index) => {
            const image = images.find((img) => img.id === step.id);
            const isEven = index % 2 === 0;
            return (
              <div
                key={step.id}
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-16`}
              >
                <div
                  className={`flex justify-center ${
                    isEven ? "md:order-last" : ""
                  }`}
                >
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      width={350}
                      height={700}
                      className="rounded-3xl shadow-2xl"
                    />
                  )}
                </div>
                <div className="text-center md:text-left">
                  <Badge variant="outline" className="text-base font-bold bg-background py-1 px-4 border-primary text-primary">
                    {step.badge}
                  </Badge>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-lg text-foreground/70">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
