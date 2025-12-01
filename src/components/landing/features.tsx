import {
  ScanLine,
  BrainCircuit,
  User,
  ShieldCheck,
  ShieldAlert,
  BookOpenCheck,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const featureList = [
  {
    icon: <ScanLine className="h-10 w-10 text-primary" />,
    title: "Instant Product Scan",
    description: "Scan barcodes of food, plants, and cosmetics to instantly identify ingredients.",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "Advanced AI Detection",
    description: "Our AI analyzes complex ingredient lists to find potential allergens that are easy to miss.",
  },
  {
    icon: <User className="h-10 w-10 text-primary" />,
    title: "Personalized Profile",
    description: "Add your specific allergens to your profile for tailored risk assessments and alerts.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: "Clear Risk Assessment",
    description: "Get a simple 'Safe' or 'Avoid' recommendation based on your profile and the scan results.",
  },
  {
    icon: <ShieldAlert className="h-10 w-10 text-destructive" />,
    title: "Detailed Allergen List",
    description: "View a comprehensive list of all detected allergens, with your personal triggers highlighted.",
  },
  {
    icon: <BookOpenCheck className="h-10 w-10 text-primary" />,
    title: "Smart Menu Scan",
    description: "Scan restaurant menus to see which dishes are safe, risky, or need modification.",
  },
];

export function Features() {
  return (
    <section id="features" className="container">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Everything You Need for a Safer Life
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
          AllergyScan Pro is packed with powerful features to make managing your allergies simple and stress-free.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featureList.map((feature) => (
          <Card key={feature.title} className="flex flex-col items-center text-center p-6 transition-transform hover:scale-105 hover:shadow-xl">
            <CardHeader className="p-0">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <CardTitle className="font-headline text-xl font-semibold">{feature.title}</CardTitle>
            </CardHeader>
            <CardDescription className="mt-2 text-base">
              {feature.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
}
