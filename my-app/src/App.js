/*
  Nextrend Web App - Single-file React component
  - File type: code/react (default export component)
  - How to use:
    1. Create a React app (e.g. `npx create-react-app my-app`)
    2. Install Tailwind and configure it, or replace Tailwind classes with your own CSS.
    3. Save this file as `App.jsx` under `src/` and import into `index.js`.

  This single-file app contains:
  - Responsive navbar with mobile menu
  - Hero section with CTA
  - Services grid
  - Features section
  - Contact form with basic validation (client-side only)
  - Footer

  Notes:
  - Tailwind utility classes are used for styling. If you don't use Tailwind, replace classes or add a small CSS file.
  - No external dependencies required.
*/

import React, { useState } from "react";

const services = [
  { id: 1, title: "Architectural Consulting", desc: "Design review, feasibility studies, and concept sketches." },
  { id: 2, title: "Interior Planning", desc: "Space planning, materials selection and interior specification." },
  { id: 3, title: "Project Management", desc: "From tender to handover: scheduling, coordination and QA." },
  { id: 4, title: "Sustainable Design", desc: "Energy-efficient design and green-material recommendations." },
];

function Nav({ onToggleMobile, mobileOpen }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-teal-400 rounded-md flex items-center justify-center text-white font-bold">NX</div>
            <div>
              <div className="text-lg font-semibold">Nextrend Systems</div>
              <div className="text-xs text-gray-500">Architectural sound solutions</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-indigo-600">Home</a>
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#features" className="hover:text-indigo-600">Features</a>
            <a href="#contact" className="text-white bg-indigo-600 px-3 py-2 rounded-md hover:bg-indigo-700">Contact</a>
          </nav>

          <button onClick={onToggleMobile} className="md:hidden p-2 rounded-md focus:outline-none" aria-label="Toggle menu">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t">
          <div className="px-4 py-4 flex flex-col gap-2">
            <a href="#home" className="block">Home</a>
            <a href="#services" className="block">Services</a>
            <a href="#features" className="block">Features</a>
            <a href="#contact" className="block text-indigo-600">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="md:flex-1">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Architectural sound solutions that match your needs — with style.</h1>
          <p className="mt-4 text-gray-600 max-w-xl">We blend functionality with elegant design to deliver spaces that perform and inspire.</p>

          <div className="mt-8 flex gap-3">
            <a href="#contact" className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-md shadow hover:bg-indigo-700">Get a Quote</a>
            <a href="#services" className="inline-block border border-indigo-600 text-indigo-600 px-5 py-3 rounded-md">Our Services</a>
          </div>

          <div className="mt-6 text-sm text-gray-500">Trusted by small businesses and large developers.</div>
        </div>

        <div className="md:flex-1 w-full max-w-md">
          <div className="rounded-xl shadow-lg overflow-hidden bg-white">
            <img src="https://images.unsplash.com/photo-1505691723518-36a9b6f0f5b5?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="architecture" className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">Featured project — Serenity Residence</h3>
              <p className="text-sm text-gray-600 mt-2">A suburban renovation that maximises natural light and airflow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Our Services</h2>
        <p className="mt-2 text-gray-600">End-to-end architectural services tailored to your project size.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.id} className="border rounded-lg p-4 hover:shadow-md">
              <div className="font-semibold">{s.title}</div>
              <div className="text-sm text-gray-600 mt-2">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    "3D visualisations",
    "Cost estimating",
    "On-site supervision",
    "Material & finishes guide",
  ];
  return (
    <section id="features" className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Why choose us</h2>
        <p className="mt-2 text-gray-600">A focused team, clear process, and measurable outcomes.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="border rounded-lg p-4 bg-white">
              <h3 className="font-semibold">Our process</h3>
              <ol className="mt-3 text-sm text-gray-600 list-decimal pl-5 space-y-2">
                <li>Initial consult & scope</li>
                <li>Design & approvals</li>
                <li>Procurement & supervision</li>
                <li>Handover & warranty</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message required";
    return e;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // Simulate sending — in real app, call your backend API here
      setTimeout(() => {
        setSent(true);
      }, 600);
    }
  }

  if (sent)
    return (
      <div className="p-6 bg-green-50 border border-green-100 rounded-lg">
        <strong className="text-green-800">Thanks —</strong>
        <div className="text-sm text-gray-700 mt-2">We'll get back to you within 2 business days.</div>
      </div>
    );

  return (
    <form onSubmit={handleSubmit} className="max-w-xl">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="text-sm font-medium">Name</label>
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 block w-full rounded-md border px-3 py-2" />
          {errors.name && <div className="text-xs text-red-600 mt-1">{errors.name}</div>}
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 block w-full rounded-md border px-3 py-2" />
          {errors.email && <div className="text-xs text-red-600 mt-1">{errors.email}</div>}
        </div>

        <div>
          <label className="text-sm font-medium">Message</label>
          <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} className="mt-1 block w-full rounded-md border px-3 py-2" />
          {errors.message && <div className="text-xs text-red-600 mt-1">{errors.message}</div>}
        </div>

        <div>
          <button type="submit" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md">Send Message</button>
        </div>
      </div>
    </form>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-slate-50">
      <Nav mobileOpen={mobileOpen} onToggleMobile={() => setMobileOpen((s) => !s)} />

      <main>
        <Hero />
        <Services />
        <Features />

        <section id="contact" className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold">Get in touch</h2>
              <p className="mt-2 text-gray-600">Tell us about your project and we'll reach out with a proposed plan.</p>

              <div className="mt-6 text-sm text-gray-700 space-y-2">
                <div><strong>Office:</strong> Kuala Lumpur, Malaysia</div>
                <div><strong>Email:</strong> hello@nextrend.example</div>
                <div><strong>Phone:</strong> +60 12-345 6789</div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 text-white mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">© {new Date().getFullYear()} Nextrend Systems. All rights reserved.</div>
          <div className="text-sm text-slate-300">Built with ♥ — React + Tailwind</div>
        </div>
      </footer>
    </div>
  );
}
