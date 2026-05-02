import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { animals, type Animal } from "@/data/animals";
import { Phone } from "lucide-react";
import heroFarm from "@/assets/hero-farm.jpg";
import { motion } from "framer-motion";


export const Route = createFileRoute("/animals")({
  head: () => ({
    meta: [
      { title: "Animals — Bakra & Cows | Green Pasture Farm" },
      { name: "description", content: "Browse our healthy bakra (goats) and cows. Each animal is vaccinated, naturally fed, and ready for selection." },
      { property: "og:title", content: "Animals — Bakra & Cows | Green Pasture Farm" },
      { property: "og:description", content: "Browse our healthy, naturally-raised bakra and cows." },
    ],
  }),
  component: AnimalsPage,
});

type Filter = "all" | "goat" | "cow";

function AnimalsPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const list = animals.filter((a) => filter === "all" || a.type === filter);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={heroFarm} alt="Animals grazing in pasture" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24 md:py-36 text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">Portfolio</p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl text-balance">Our Animals</h1>
            <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">
              Healthy, well-cared bakra and cows — each raised on natural feed and looked after every single day.
              Tap any animal for full details.
            </p>
          </motion.div>
        </div>

      </section>


      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-12 md:py-16">
        <div className="flex flex-wrap gap-2">
          {([
            { k: "all", label: `All (${animals.length})` },
            { k: "goat", label: `Bakra (${animals.filter((a) => a.type === "goat").length})` },
            { k: "cow", label: `Cows (${animals.filter((a) => a.type === "cow").length})` },
          ] as const).map((f) => (
            <button
              key={f.k}
              onClick={() => setFilter(f.k)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === f.k
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
            >
              <AnimalCard a={a} />
            </motion.div>
          ))}

        </motion.div>

      </section>
    </>
  );
}

function AnimalCard({ a }: { a: Animal }) {
  return (
    <article className="group rounded-2xl bg-card ring-1 ring-border overflow-hidden shadow-soft hover:shadow-elegant transition">
      <div className="hover-zoom aspect-[4/3] bg-muted relative">
        <img src={a.image} alt={a.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
        <span className="absolute top-3 left-3 text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-card/90 backdrop-blur text-foreground ring-1 ring-border">
          {a.type === "goat" ? "Bakra" : "Cow"}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-2xl">{a.name}</h3>
          <span className="text-xs text-muted-foreground">#{a.id.toUpperCase()}</span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{a.breed}</p>

        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <Detail label="Age" value={a.age} />
          <Detail label="Weight" value={a.weight} />
          <Detail label="Health" value={a.health} />
          <Detail label="Feeding" value={a.feeding} />
        </dl>

        <p className="mt-4 text-sm text-foreground/80 leading-relaxed">{a.description}</p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm font-medium text-primary">Contact for price</span>
          <a
            href={`https://wa.me/923001234567?text=${encodeURIComponent(`Hi, I'm interested in ${a.name} (${a.id}).`)}`}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition"
          >
            <Phone className="h-3.5 w-3.5" /> Inquire
          </a>
        </div>
      </div>
    </article>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</dt>
      <dd className="mt-0.5 text-foreground">{value}</dd>
    </div>
  );
}
