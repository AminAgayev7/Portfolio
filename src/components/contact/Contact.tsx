'use client';

import { useState } from 'react';


const contactContent = {
  title: "Contact Me",
  subtitle: "Get in touch",
  description: "Have a project in mind or just want to say hi? My inbox is always open. I'll get back to you as soon as I can!",
  email: "aminagayev516@email.com",
  phone: "+994 55 293 03 68",
  location: "Shamakhi, Azerbaijan",
  formspreeEndpoint: "https://formspree.io/f/xjgqyaqj", 
};


export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(contactContent.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-zinc-50 dark:bg-zinc-800 border border-red-400/20 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-red-400 transition-colors duration-300';

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-red-400 font-semibold tracking-widest uppercase text-sm mb-2">
            {contactContent.subtitle}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {contactContent.title}
          </h2>
          <div className="mt-4 h-1 w-16 bg-red-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="flex flex-col gap-8">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {contactContent.description}
            </p>
            <div className="flex flex-col gap-5">
              {[
                { icon: 'fa-solid fa-envelope', label: 'Email', value: contactContent.email, href: `mailto:${contactContent.email}` },
                { icon: 'fa-solid fa-phone', label: 'Phone', value: contactContent.phone, href: `tel:${contactContent.phone}` },
                { icon: 'fa-solid fa-location-dot', label: 'Location', value: contactContent.location, href: '#' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-red-400/10 flex items-center justify-center group-hover:bg-red-400 transition-colors duration-300 shrink-0">
                    <i className={`${item.icon} text-red-400 group-hover:text-black transition-colors duration-300`}></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.label}</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-red-400 transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>


          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className={inputClass}
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className={inputClass}
              />
            </div>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className={inputClass}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your Message"
              className={`${inputClass} resize-none`}
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full border border-red-400 text-red-400 py-3 px-6 rounded-full hover:bg-red-500 hover:text-black hover:scale-105 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-center text-green-500 text-sm">
                ✓ Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-red-400 text-sm">
                Something went wrong. Please try emailing me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
