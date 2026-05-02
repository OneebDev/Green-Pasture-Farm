import { createFileRoute, Link } from "@tanstack/react-router";

import { MapPin, Eye, Truck, CalendarHeart, ArrowRight } from "lucide-react";
import farmFeed from "@/assets/farm-feeding.jpg";
import { motion } from "framer-motion";



export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Green Pasture Farm" },
      { name: "description", content: "Farm visits, animal selection guidance, delivery, and special Eid-ul-Adha bookings." },
      { property: "og:title", content: "Services — Green Pasture Farm" },
      { property: "og:description", content: "How we help families pick the right animal — from visit to delivery." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: MapPin, title: "Farm Visits", text: "Come see the herd in person. Walk the pens, meet the animals, and ask anything you'd like." },
  { icon: Eye, title: "Selection Guidance", text: "Not sure which animal is right? We'll help you choose based on your needs and budget." },
  { icon: Truck, title: "Safe Delivery", text: "Within-city delivery available with care during transport. Just let us know your address." },
  { icon: CalendarHeart, title: "Eid Bookings", text: "Reserve your Eid-ul-Adha animal in advance. Limited slots — booked early every year." },
];

function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={farmFeed} alt="Hand feeding animals" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24 md:py-36 text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">Services</p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl text-balance">How we help</h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85">
              From your first visit to delivery day — we're here to make the experience simple and trustworthy.
            </p>
          </motion.div>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, text }, i) => (
            <motion.div 
              key={title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl bg-card p-8 ring-1 ring-border shadow-soft hover:shadow-elegant transition"
            >
              <span className="grid place-items-center h-12 w-12 rounded-xl bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-foreground/75 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>


        <div className="mt-16 rounded-3xl gradient-forest text-primary-foreground p-10 md:p-14 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-balance max-w-2xl mx-auto">
            Visit our farm anytime — you're always welcome.
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Call ahead so we can give you our full attention.
          </p>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:brightness-95 transition">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
