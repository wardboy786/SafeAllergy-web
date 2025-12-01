import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function TermsOfUsePage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <section className="container">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl">Terms of Use</CardTitle>
               <p className="text-sm text-foreground/60">Last updated: {new Date().toLocaleDateString()}</p>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-foreground/80">
              <h3 className="text-xl font-bold">1. Acceptance of Terms</h3>
              <p>
                By using AllergyScan Pro, you agree to these Terms of Use. If you do not agree, do not use the app.
              </p>
              <h3 className="text-xl font-bold">2. Disclaimer of Warranty</h3>
              <p>
                AllergyScan Pro is an informational tool and is not a substitute for professional medical advice. The AI-driven analysis is based on available data and may not be 100% accurate. Always consult with a healthcare professional regarding your allergies. The creators of AllergyScan Pro are not liable for any adverse reactions or health issues. Use this app at your own risk.
              </p>
              <h3 className="text-xl font-bold">3. User Conduct</h3>
              <p>
                You agree to use the app responsibly and not to misuse the service or data provided.
              </p>
              <h3 className="text-xl font-bold">4. Changes to Terms</h3>
              <p>
                We reserve the right to modify these terms at any time. Your continued use of the app constitutes acceptance of the new terms.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
