'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiChevronDown } from 'react-icons/fi';
import ParticleBackground from './ParticleBackground';

const titles = [
  'AI Supervisor',
  'MLOps Architect',
  'LangGraph/LangChain Expert',
  'University Instructor',
  'Computer Vision Engineer',
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle bg */}
      <ParticleBackground />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a18] via-transparent to-[#050a18] z-[1]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7c3aed]/8 rounded-full blur-3xl z-[1]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00d4ff]/6 rounded-full blur-3xl z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium text-[#00d4ff] tracking-[0.2em] uppercase mb-4 px-3 py-1 border border-[#00d4ff]/20 rounded-full bg-[#00d4ff]/5">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-4"
          >
            <span className="text-white">Abdelrhman</span>
            <br />
            <span className="gradient-text">Wahdan</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 justify-center lg:justify-start mb-6 h-10"
          >
            <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
            <span className="text-xl sm:text-2xl font-semibold text-[#00d4ff] glow-text">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#8892b0] text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
          >
            AI Supervisor &amp; MLOps Architect leading <span className="text-[#00d4ff] font-semibold">8 engineers</span> at Valify Solutions.
            Specialized in <span className="text-[#7c3aed] font-semibold">LangChain/LangGraph agents</span>, computer vision
            pipelines, and end-to-end MLOps. Also teaching graduate AI at Woolf University.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
          >
            <button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-7 py-3 rounded-xl text-white font-semibold text-sm"
            >
              View Experience
            </button>
            <a
              href="/resume.pdf"
              download
              className="btn-outline px-7 py-3 rounded-xl font-semibold text-sm flex items-center gap-2"
            >
              <FiDownload size={15} />
              Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-5 justify-center lg:justify-start"
          >
            {[
              { icon: FiGithub, href: 'https://github.com/abdelrhmanwahdan', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/abdelrhmanwahdan-21a483180', label: 'LinkedIn' },
              { icon: FiMail, href: 'mailto:abdelrhmanwahdan129@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg border border-[#00d4ff]/20 bg-[#00d4ff]/5 flex items-center justify-center text-[#8892b0] hover:text-[#00d4ff] hover:border-[#00d4ff]/50 transition-all"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative flex-shrink-0 px-8"
        >
          {/* Spinning ring */}
          <div className="absolute inset-8 rounded-full animate-spin-slow">
            <div className="w-full h-full rounded-full border-2 border-transparent"
              style={{
                background: 'conic-gradient(from 0deg, #00d4ff, #7c3aed, #ec4899, transparent, transparent)',
                borderRadius: '50%',
                padding: '2px',
              }}
            />
          </div>

          {/* Photo container */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 animate-float">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0a1628] animate-pulse-ring">
              <Image
                src="/me.jpeg"
                alt="Abdelrhman Wahdan"
                width={320}
                height={320}
                className="w-full h-full object-cover object-center"
                priority
              />
            </div>

            {/* Floating badge — AI Supervisor */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 right-0 glass rounded-xl px-3 py-2 border border-[#00d4ff]/20"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-white">AI Supervisor</span>
              </div>
              <div className="text-[10px] text-[#8892b0] mt-0.5">Valify · Open to Consulting</div>
            </motion.div>

            {/* Floating badge — engineers */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -top-2 left-0 glass rounded-xl px-3 py-2 border border-[#7c3aed]/20"
            >
              <div className="text-xl font-black gradient-text">8</div>
              <div className="text-[10px] text-[#8892b0]">Engineers Led</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-[#8892b0] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiChevronDown className="text-[#00d4ff]" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
