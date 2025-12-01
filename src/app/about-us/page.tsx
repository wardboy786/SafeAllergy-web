import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <section className="container">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl">About Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg text-foreground/80">
              <p>
                AllergyScan Pro was born from a simple idea: everyone deserves to eat with confidence and without fear. We are a team of passionate developers, nutritionists, and individuals with personal experiences of severe allergies who came together to create a reliable, easy-to-use tool for managing dietary restrictions.
              </p>
              <p>
                Our mission is to leverage the power of artificial intelligence to make the world safer for those with allergies. By providing instant, accurate information about allergens in food, cosmetics, and other products, we empower our users to make informed choices and live fuller, less stressful lives.
              </p>
              <p>
                We believe in technology for good, and AllergyScan Pro is our contribution to a healthier, more inclusive community. Thank you for trusting us to be part of your journey.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
