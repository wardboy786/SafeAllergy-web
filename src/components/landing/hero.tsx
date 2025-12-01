import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { GooglePlayButton } from "./google-play-button";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-phone");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/50">
      <div className="container px-4 pt-20 pb-16 text-center md:pt-32 md:pb-24">
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Scan, Detect, &</span>
            <span className="block text-primary">Eat with Confidence</span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-lg text-foreground/80 sm:text-xl md:mt-8 md:max-w-2xl">
            AllergyScan Pro is your personal allergy assistant. Use your camera
            to instantly check products and menus for allergens with our
            advanced AI.
          </p>
          <div className="mt-8 flex justify-center">
            <GooglePlayButton />
          </div>
        </div>
      </div>
      <div className="relative mx-auto -mt-12 w-full max-w-lg md:-mt-20 lg:max-w-xl">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            width={400}
            height={800}
            className="w-full h-auto object-contain glow-shadow rounded-3xl"
            priority
          />
        )}
      </div>
    </section>
  );
}
