import { Button } from "@/components/ui/button";
import Link from "next/link";

function GooglePlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="h-6 w-6"
      fill="currentColor"
    >
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0L103 23.3l-56 92.2L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499zM47 512l56-92.2-56-92.2L47 512z" />
    </svg>
  );
}

export function GooglePlayButton() {
  return (
    <Button asChild size="lg" className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105">
      <Link href="#" className="flex items-center gap-2">
        <GooglePlayIcon />
        <div className="flex flex-col items-start">
          <span className="text-xs uppercase">Get it on</span>
          <span className="text-lg font-bold">Google Play</span>
        </div>
      </Link>
    </Button>
  );
}
