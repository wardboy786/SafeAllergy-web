import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <section className="container">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl">Privacy Policy</CardTitle>
              <p className="text-sm text-foreground/60">Last updated: {new Date().toLocaleDateString()}</p>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-foreground/80">
              <h3 className="text-xl font-bold">1. Information We Collect</h3>
              <p>
                We collect information you provide directly to us, such as when you create a profile and specify your allergens. We also collect anonymous usage data to improve our services.
              </p>
              <h3 className="text-xl font-bold">2. How We Use Your Information</h3>
              <p>
                The primary use of your information is to provide and improve the AllergyScan Pro service. Your allergen profile is used locally on your device to perform risk assessments. Anonymized data may be used for analytics and AI model training.
              </p>
              <h3 className="text-xl font-bold">3. Data Security</h3>
              <p>
                We are committed to protecting your data. We use industry-standard security measures to safeguard your information. Your personal allergen data is stored securely and is not shared with third parties without your consent.
              </p>
              <h3 className="text-xl font-bold">4. Your Rights</h3>
              <p>
                You have the right to access, update, or delete your personal information at any time through the app's profile settings.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
