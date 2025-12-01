import { GooglePlayButton } from "./google-play-button";

export function CtaSection() {
  return (
    <section className="bg-primary/10">
      <div className="container">
        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-primary to-blue-400 p-8 text-center shadow-xl md:p-12">
          <h2 className="text-3xl font-bold text-primary-foreground tracking-tight sm:text-4xl">
            Ready to Take Control of Your Allergies?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Download AllergyScan Pro today and experience the freedom of eating
            with confidence. Your safety is just a scan away.
          </p>
          <div className="mt-8 flex justify-center">
            <GooglePlayButton />
          </div>
        </div>
      </div>
    </section>
  );
}
