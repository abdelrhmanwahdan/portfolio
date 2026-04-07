'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend } from 'react-icons/fi';

const contactLinks = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'abdelrhmanwahdan129@gmail.com',
    href: 'mailto:abdelrhmanwahdan129@gmail.com',
    color: '#00d4ff',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'abdelrhmanwahdan-21a483180',
    href: 'https://www.linkedin.com/in/abdelrhmanwahdan-21a483180',
    color: '#0ea5e9',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'abdelrhmanwahdan',
    href: 'https://github.com/abdelrhmanwahdan',
    color: '#7c3aed',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1c]/50 to-[#050a18]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="h-px w-8 bg-[#00d4ff]" />
            <span className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase">Let&apos;s Connect</span>
            <div className="h-px w-8 bg-[#00d4ff]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Build the Future of<br />
            <span className="gradient-text">AI Together</span>
          </h2>
          <p className="text-[#8892b0] text-base max-w-lg mx-auto">
            Open to senior AI/ML leadership roles, research collaborations, consulting engagements,
            and speaking opportunities. Let&apos;s talk.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass rounded-2xl p-6 text-center group transition-all duration-300"
              style={{ borderColor: `${link.color}20` }}
            >
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{ background: `${link.color}15`, border: `1px solid ${link.color}30` }}
              >
                <link.icon size={22} style={{ color: link.color }} />
              </div>
              <div className="text-white font-bold text-sm mb-1">{link.label}</div>
              <div className="text-[#8892b0] text-xs break-all group-hover:text-[#00d4ff] transition-colors">
                {link.value}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="glass rounded-2xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-[#8892b0] text-sm mb-6">
            <FiMapPin className="text-[#00d4ff]" size={15} />
            <span>Cairo / Giza, Egypt</span>
            <span className="mx-2">·</span>
            <span className="text-emerald-400 font-medium">Open to Remote & Relocation</span>
          </div>

          <div className="text-[#8892b0] text-sm max-w-md mx-auto mb-6">
            Phone: <a href="tel:+201148829299" className="text-white hover:text-[#00d4ff] transition-colors">(+20) 1148829299</a>
          </div>

          <a
            href="mailto:abdelrhmanwahdan129@gmail.com"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-sm"
          >
            <FiSend size={15} />
            Send a Message
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="divider mb-8" />
          <p className="text-[#4a5568] text-xs">
            © 2026 Abdelrhman Wahdan · Built with Next.js & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
