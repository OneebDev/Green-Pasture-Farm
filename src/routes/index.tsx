import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { animals } from "@/data/animals";
import heroFarm from "@/assets/hero-farm.jpg";
import farmEnv from "@/assets/farm-environment.jpg";
import farmFeed from "@/assets/farm-feeding.jpg";
import farmCare from "@/assets/farm-care.jpg";
import { ShieldCheck, Leaf, HeartHandshake, Sprout, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Green Pasture Farm — Premium Bakra & Cows" },
      { name: "description", content: "A premium cattle farm raising healthy, well-cared bakra and cows on natural feed. Visit, view animals, or contact us." },
      { property: "og:title", content: "Green Pasture Farm — Premium Bakra & Cows" },
      { property: "og:description", content: "Healthy, strong & well-cared livestock — raised with traditional farm values." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = animals.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroFarm}
          alt="Cows and goats grazing in lush green pasture at golden hour"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/45 to-primary/85" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-28 md:py-40 lg:py-52 text-primary-foreground">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur px-3.5 py-1.5 text-xs font-medium tracking-wide ring-1 ring-primary-foreground/20">
              <Sprout className="h-3.5 w-3.5" /> Raised with care since 2008
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance">
              Premium <span className="italic text-accent">Cattle</span> Farm
            </h1>
            <p className="mt-5 text-lg md:text-xl text-primary-foreground/85 max-w-xl text-balance">
              Healthy, strong and well-cared livestock — bakra and cows raised on natural feed,
              vaccinated, and looked after every single day.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/animals"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:brightness-95 transition shadow-elegant"
              >
                View Animals <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur ring-1 ring-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/15 transition"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>


      {/* FEATURED ANIMALS */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Our herd</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl text-balance">
              Featured Animals
            </h2>
          </div>
          <Link to="/animals" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all">
            See all animals <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((a, i) => (
            <motion.article 
              key={a.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-2xl bg-card ring-1 ring-border overflow-hidden shadow-soft hover:shadow-elegant transition-shadow"
            >
              <div className="hover-zoom aspect-[4/3] bg-muted">
                <img src={a.image} alt={a.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl">{a.name}</h3>
                  <span className="text-[11px] uppercase tracking-wider px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {a.type === "goat" ? "Bakra" : "Cow"}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{a.breed} · {a.age} · {a.weight}</p>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{a.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-secondary/60 bg-grain">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Why us</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl text-balance">
              Care you can see in every animal
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "Healthy & Vaccinated", text: "Every animal is regularly vaccinated, dewormed and checked by a vet." },
              { icon: Leaf, title: "Natural Feeding", text: "Fresh green fodder, grains and seasonal greens — no shortcuts." },
              { icon: Sprout, title: "Proper Farm Care", text: "Clean pens, daily grooming, open pasture and shaded resting." },
              { icon: HeartHandshake, title: "Trusted by Customers", text: "A growing family of happy customers across the region." },
            ].map(({ icon: Icon, title, text }, i) => (
              <motion.div 
                key={title} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl bg-card p-6 ring-1 ring-border"
              >
                <span className="grid place-items-center h-11 w-11 rounded-xl bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Inside the farm</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl text-balance">A glimpse of daily life</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { src: farmEnv, label: "The Farm", desc: "Spacious pens, natural light, daily cleaning." },
            { src: farmFeed, label: "Feeding", desc: "Fresh fodder hand-served morning & evening." },
            { src: farmCare, label: "Animal Care", desc: "Routine veterinary checks and grooming." },
          ].map((h) => (
            <figure key={h.label} className="hover-zoom rounded-2xl overflow-hidden ring-1 ring-border bg-muted">
              <img src={h.src} alt={h.label} loading="lazy" width={1280} height={896} className="aspect-[4/3] w-full object-cover" />
              <figcaption className="p-5 bg-card">
                <h3 className="font-display text-lg">{h.label}</h3>
                <p className="text-sm text-muted-foreground mt-1">{h.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">How it works</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl text-balance">A simple, honest process</h2>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", title: "Select an Animal", text: "Browse our animals page and shortlist the ones you like." },
              { n: "02", title: "Contact Us", text: "Reach out via WhatsApp or phone — we'll share more photos and details." },
              { n: "03", title: "Visit or Delivery", text: "Visit the farm in person, or arrange delivery to your location." },
            ].map((s) => (
              <li key={s.n} className="rounded-2xl bg-primary-foreground/5 ring-1 ring-primary-foreground/15 p-7">
                <span className="font-display text-5xl text-accent">{s.n}</span>
                <h3 className="mt-4 font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/75 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:brightness-95 transition">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
