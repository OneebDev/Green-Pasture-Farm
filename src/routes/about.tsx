import { createFileRoute } from "@tanstack/react-router";
import aboutFarm from "@/assets/about-farm.jpg";
import farmCare from "@/assets/farm-care.jpg";
import { Sprout, ShieldCheck, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Green Pasture Farm" },
      { name: "description", content: "Family-run cattle farm with over 15 years of experience raising healthy bakra and cows on natural feed." },
      { property: "og:title", content: "About — Green Pasture Farm" },
      { property: "og:description", content: "Our story, our mission, and the way we care for every animal." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={aboutFarm} alt="Aerial view of green pasture farm" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24 md:py-36 text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">Our story</p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl text-balance max-w-3xl">A farm built on care, not shortcuts</h1>
            <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">
              For over 15 years our family has raised cattle and goats the way it was always meant to be —
              slowly, naturally, and with deep respect for the animals.
            </p>
          </motion.div>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20 md:py-28 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <h2 className="font-display text-4xl md:text-5xl text-balance">Experience that shows</h2>
          <p className="mt-5 text-foreground/80 leading-relaxed">
            What started as a small family herd has grown into one of the region's most trusted cattle farms.
            Every cow and bakra you see has been raised under the same hands — the same routine of fresh
            fodder at dawn, careful grooming, and an open pasture to roam.
          </p>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            We don't believe in rushing growth or cutting corners. Healthy animals come from honest work,
            and that's all we know how to do.
          </p>
        </div>
        <figure className="hover-zoom rounded-3xl overflow-hidden ring-1 ring-border shadow-elegant">
          <img src={farmCare} alt="Vet caring for a cow" loading="lazy" width={1280} height={896} className="aspect-[4/3] w-full object-cover" />
        </figure>
      </section>

      <section className="bg-secondary/60 bg-grain">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 md:py-28">
          <h2 className="font-display text-4xl md:text-5xl text-balance max-w-2xl">Our values</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Sprout, title: "Natural feeding", text: "Berseem, seasonal greens, grains and mineral mix — no growth shortcuts." },
              { icon: ShieldCheck, title: "Health first", text: "Routine vaccination, deworming and veterinary checks for every animal." },
              { icon: HeartHandshake, title: "Honest dealing", text: "Clear pricing, real photos, and the truth about every animal we raise." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-card p-7 ring-1 ring-border">
                <span className="grid place-items-center h-11 w-11 rounded-xl bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-20 md:py-28 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Our mission</p>
        <p className="mt-5 font-display text-3xl md:text-4xl text-balance leading-tight">
          To raise healthy, strong livestock the natural way — and to put trust back into how
          families buy their cattle and bakra.
        </p>
      </section>
    </>
  );
}
