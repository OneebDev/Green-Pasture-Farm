import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center h-9 w-9 rounded-full bg-accent text-accent-foreground font-display text-lg">G</span>
            <span className="font-display text-xl">Green Pasture Farm</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/75 leading-relaxed">
            Healthy, well-cared livestock raised on natural feed and traditional farm values.
            Quality bakra and cows for the discerning customer.
          </p>
        </div>

        <div>
          <h4 className="font-display text-base mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/animals" className="hover:text-accent">Animals</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> +92 300 1234567</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> hello@greenpasture.farm</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Bedian Road, Lahore</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 text-xs text-primary-foreground/60 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Green Pasture Farm. All rights reserved.</span>
          <span>Raised with care · Sold with trust</span>
        </div>
      </div>
    </footer>
  );
}
