'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

interface Cert {
  name: string;
  issuer: string;
  color: string;
}

const certGroups: { provider: string; color: string; certs: string[] }[] = [
  {
    provider: 'Udacity',
    color: '#02B3E4',
    certs: [
      'Deep Learning with PyTorch Nanodegree',
      'AWS Machine Learning Engineer Nanodegree',
      'Natural Language Processing Nanodegree',
      'Advanced Data Analysis Nanodegree',
      'AI Programming with Python Nanodegree',
      'Data Structures & Algorithms Nanodegree',
      'Intermediate Python Nanodegree',
      'Data Analysis Professional Nanodegree',
    ],
  },
  {
    provider: 'DeepLearning.AI',
    color: '#FF6F00',
    certs: [
      'Deep Learning Specialization',
      'Natural Language Processing Specialization',
    ],
  },
  {
    provider: 'Stanford / Coursera',
    color: '#8C1515',
    certs: [
      'Machine Learning (Andrew Ng)',
      'Mathematics for Machine Learning Specialization',
      'Database Management Essentials',
    ],
  },
  {
    provider: 'IBM / Coursera',
    color: '#1F70C1',
    certs: [
      'Data Science Professional Certificate',
    ],
  },
  {
    provider: 'Harvard / edX',
    color: '#A51C30',
    certs: [
      "CS50's Introduction to AI with Python",
    ],
  },
  {
    provider: 'Other',
    color: '#7c3aed',
    certs: [
      'Python: SOLID Principles and Top Design Patterns',
      'Leadership: Practical Leadership Skills',
      'AI Trading Strategies',
      'Creative Thinking: Techniques and Tools',
      'Developing Your Emotional Intelligence',
    ],
  },
];

// Flatten for total count display
const allCerts: Cert[] = certGroups.flatMap((g) =>
  g.certs.map((name) => ({ name, issuer: g.provider, color: g.color }))
);

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="certifications" className="relative py-24 px-6">
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#00d4ff]/4 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="h-px w-8 bg-[#00d4ff]" />
            <span className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase">Lifelong Learner</span>
            <div className="h-px w-8 bg-[#00d4ff]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-3">
            <span className="gradient-text">{allCerts.length}+</span> Certifications
          </h2>
          <p className="text-[#8892b0] text-sm max-w-lg mx-auto">
            Continuously expanding expertise across the full AI/ML stack — from foundations to cutting-edge specializations.
          </p>
        </motion.div>

        {/* Groups */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {certGroups.map((group, gi) => (
            <motion.div
              key={group.provider}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="glass rounded-2xl p-6"
              style={{ borderColor: `${group.color}15` }}
            >
              {/* Provider header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-xs"
                  style={{ background: group.color }}
                >
                  {group.provider.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{group.provider}</div>
                  <div className="text-[#8892b0] text-[10px]">{group.certs.length} certification{group.certs.length > 1 ? 's' : ''}</div>
                </div>
              </div>

              {/* Cert list */}
              <ul className="space-y-2.5">
                {group.certs.map((cert, ci) => (
                  <motion.li
                    key={cert}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: gi * 0.08 + ci * 0.04 }}
                    className="flex items-start gap-2.5"
                  >
                    <FiAward size={13} className="mt-0.5 flex-shrink-0" style={{ color: group.color }} />
                    <span className="text-[#8892b0] text-xs leading-relaxed">{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Floating count strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 glass rounded-2xl px-8 py-6 flex flex-wrap items-center justify-center gap-8"
        >
          {certGroups.map((g) => (
            <div key={g.provider} className="text-center">
              <div className="text-2xl font-black" style={{ color: g.color }}>{g.certs.length}</div>
              <div className="text-[10px] text-[#8892b0] mt-0.5">{g.provider}</div>
            </div>
          ))}
          <div className="w-px h-10 bg-white/5 hidden sm:block" />
          <div className="text-center">
            <div className="text-2xl font-black gradient-text">{allCerts.length}</div>
            <div className="text-[10px] text-[#8892b0] mt-0.5">Total Certifications</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
