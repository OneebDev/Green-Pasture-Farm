import { createFileRoute } from "@tanstack/react-router";
import { animals } from "@/data/animals";
import farmEnv from "@/assets/farm-environment.jpg";
import farmFeed from "@/assets/farm-feeding.jpg";
import farmCare from "@/assets/farm-care.jpg";
import aboutFarm from "@/assets/about-farm.jpg";
import heroFarm from "@/assets/hero-farm.jpg";
import { motion } from "framer-motion";


export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Green Pasture Farm" },
      { name: "description", content: "Photos from our farm: animals, feeding, care, and the daily life of the herd." },
      { property: "og:title", content: "Gallery — Green Pasture Farm" },
      { property: "og:description", content: "A visual walkthrough of our cattle and goat farm." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const images = [
    { src: heroFarm, alt: "Cows and goats in pasture", w: 1920, h: 1080 },
    ...animals.map((a) => ({ src: a.image, alt: a.name, w: 1024, h: 1024 })),
    { src: farmEnv, alt: "Inside the farm", w: 1280, h: 896 },
    { src: farmFeed, alt: "Hand feeding", w: 1280, h: 896 },
    { src: farmCare, alt: "Veterinary care", w: 1280, h: 896 },
    { src: aboutFarm, alt: "Aerial farm view", w: 1600, h: 900 },
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={farmEnv} alt="Farm environment" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24 md:py-36 text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">Gallery</p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl text-balance">Life at the farm</h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85">
              Real photos from our herd and our daily routines.
            </p>
          </motion.div>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {images.map((img, i) => (
            <motion.figure 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.5 }}
              className="mb-5 break-inside-avoid hover-zoom rounded-2xl overflow-hidden ring-1 ring-border bg-muted shadow-elegant"
            >
              <img src={img.src} alt={img.alt} loading="lazy" width={img.w} height={img.h} className="w-full h-auto object-cover" />
            </motion.figure>
          ))}
        </div>

      </section>
    </>
  );
}
