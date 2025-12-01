import Link from "next/link";
import { Leaf, Twitter, Facebook, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-accent-foreground" />
              <span className="text-lg font-bold">AllergyScan Pro</span>
            </Link>
            <p className="text-sm text-foreground/70">
              Your personal AI-powered allergy assistant.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-foreground/60 hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about-us" className="text-foreground/70 hover:text-foreground">About Us</Link></li>
              <li><Link href="/contact-us" className="text-foreground/70 hover:text-foreground">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="text-foreground/70 hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="text-foreground/70 hover:text-foreground">Terms of Use</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="mt-4 text-sm text-foreground/70">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="mt-2 flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit" variant="secondary" className="shrink-0">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} AllergyScan Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
