import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import farmCare from "@/assets/farm-care.jpg";
import { motion } from "framer-motion";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Green Pasture Farm" },
      { name: "description", content: "Get in touch via WhatsApp, phone, or visit our farm. We're happy to share more about our animals." },
      { property: "og:title", content: "Contact — Green Pasture Farm" },
      { property: "og:description", content: "Reach out via WhatsApp, phone or by visiting the farm." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={farmCare} alt="Vet caring for animal" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24 md:py-36 text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">Contact</p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl text-balance">Let's talk</h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85">
              WhatsApp is the fastest way to reach us. You're also welcome to visit the farm any day of the week.
            </p>
          </motion.div>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20 grid gap-10 lg:grid-cols-2">
        {/* Contact info */}
        <div className="space-y-6">
          {[
            { 
              href: "https://wa.me/923001234567", 
              icon: MessageCircle, 
              title: "WhatsApp", 
              desc: "Chat with us instantly", 
              val: "+92 300 1234567",
              color: "bg-[#25D366] text-white"
            },
            { 
              href: "tel:+923001234567", 
              icon: Phone, 
              title: "Call us", 
              desc: "9 AM – 9 PM, every day", 
              val: "+92 300 1234567",
              color: "bg-primary text-primary-foreground"
            },
            { 
              icon: MapPin, 
              title: "Visit the farm", 
              desc: "Open every day — call ahead", 
              val: "Bedian Road, Lahore, Pakistan",
              color: "bg-accent text-accent-foreground"
            },
            { 
              icon: Mail, 
              title: "Email", 
              desc: "For longer enquiries", 
              val: "hello@greenpasture.farm",
              color: "bg-secondary text-secondary-foreground"
            },
          ].map((item, i) => {
            const Wrapper = item.href ? 'a' : 'div';
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Wrapper
                  {...(item.href ? { href: item.href, target: "_blank", rel: "noreferrer" } : {})}
                  className="flex items-start gap-4 rounded-2xl bg-card p-6 ring-1 ring-border hover:shadow-soft transition group"
                >
                  <span className={`grid place-items-center h-12 w-12 rounded-xl ${item.color}`}>
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                    <p className="mt-1 font-medium text-foreground">{item.val}</p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>


        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-card p-8 md:p-10 ring-1 ring-border shadow-soft"
        >

          <h2 className="font-display text-3xl">Send a message</h2>
          <p className="mt-2 text-sm text-muted-foreground">We usually reply within a few hours.</p>

          {sent ? (
            <div className="mt-8 rounded-xl bg-secondary p-6 text-center">
              <p className="font-display text-xl">JazakAllah! 🌿</p>
              <p className="mt-2 text-sm text-muted-foreground">Your message has been received. We'll get back to you soon.</p>
            </div>
          ) : (
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            >
              <Field label="Your name" name="name" type="text" required />
              <Field label="Phone number" name="phone" type="tel" required />
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us which animal you're interested in…"
                  className="w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition"
              >
                Send message
              </button>
            </form>
          )}
        </motion.div>
      </section>


      {/* Map */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-20">
        <div className="rounded-3xl overflow-hidden ring-1 ring-border shadow-soft">
          <iframe
            title="Farm location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=74.36%2C31.42%2C74.50%2C31.50&layer=mapnik"
            className="w-full h-[420px] border-0"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type, required }: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground/80 mb-1.5">{label}</label>
      <input
        id={name} name={name} type={type} required={required}
        className="w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
