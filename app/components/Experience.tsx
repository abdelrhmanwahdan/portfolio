'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

interface Role {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  accent: string;
  current?: boolean;
}

const experience: Role[] = [
  {
    company: 'Woolf University',
    role: 'Instructor — MSc Artificial Intelligence',
    period: 'Oct 2025 – Present',
    location: 'Switzerland (Remote)',
    accent: '#10b981',
    current: true,
    bullets: [
      'Teach and mentor graduate students in advanced AI: ML, Deep Learning, MLOps, NLP & Computer Vision.',
      'Bridge industry and academia by combining hands-on Valify experience with academic rigor.',
      'Design curriculum covering Responsible AI and modern industry use cases.',
    ],
  },
  {
    company: 'Valify Solutions',
    role: 'AI Supervisor',
    period: 'Sep 2025 – Present',
    location: 'Cairo, Egypt',
    accent: '#00d4ff',
    current: true,
    bullets: [
      'Supervise a diverse AI/ML team of 8 engineers (juniors, mid-levels, and seniors), setting department strategy, structure, and technical direction.',
      'Drive design and improvement of ML pipelines (face match, face liveness), ensuring state-of-the-art accuracy via data-driven optimization.',
      'Coach and mentor engineers at all levels, fostering growth and aligning with business goals.',
    ],
  },
  {
    company: 'Valify Solutions',
    role: 'ML Team Lead',
    period: 'Jan 2025 – Aug 2025',
    location: 'Cairo, Egypt',
    accent: '#0ea5e9',
    bullets: [
      'Spearheaded end-to-end ML pipeline automation with Docker, Bash, and CI/CD processes for reliable production deployments.',
      'Leveraged Azure Document Intelligence for automated document processing and classification.',
      'Architected LangGraph- and LangChain-powered agents for legal document analysis and customer success assistance.',
      'Mentored junior engineers on MLOps, scalable cloud deployments, and automation strategies.',
    ],
  },
  {
    company: 'Valify Solutions',
    role: 'Senior Machine Learning Engineer',
    period: 'Oct 2024 – Feb 2025',
    location: 'Cairo, Egypt',
    accent: '#38bdf8',
    bullets: [
      'Developed and fine-tuned advanced computer vision and NLP models: YOLO, EasyOCR, Tesseract, PaddleOCR.',
      'Implemented state-of-the-art models for detecting scanned and manipulated images.',
      'Drove R&D to optimize codebases and explore innovative AI-driven solutions.',
      'Designed and built MLOps infrastructure from scratch for scalable model training and monitoring.',
    ],
  },
  {
    company: 'Ticket Wallet (YC X25)',
    role: 'Senior Machine Learning Engineer',
    period: 'Sep 2023 – Oct 2024',
    location: 'United States (Remote)',
    accent: '#f59e0b',
    bullets: [
      'Led a high-performing ML team to develop a ticket pricing algorithm using reinforcement learning and deep learning.',
      'Established and managed a comprehensive data preprocessing pipeline ensuring data quality and consistency.',
      'Built critical components of the ML system from scratch while allocating tasks and handling the most challenging responsibilities.',
    ],
  },
  {
    company: 'Udacity',
    role: 'AI Session Lead',
    period: 'May 2022 – Present',
    location: 'Remote (Global)',
    accent: '#7c3aed',
    bullets: [
      'Provide mentorship in AI and Data Science to students worldwide using specialized domain knowledge.',
      'Offer student support services and technical guidance across ML, deep learning, and data analysis topics.',
    ],
  },
  {
    company: 'Shebak',
    role: 'Software Engineer (AI)',
    period: 'Apr 2023 – Sep 2023',
    location: 'Cairo, Egypt',
    accent: '#ec4899',
    bullets: [
      'Built end-to-end AI-powered software systems in Python integrating computer vision and NLP models.',
      'Optimized massive datasets using advanced Python (metaclasses, decorators) for efficient AI pipelines.',
      'Leveraged transformers and deep learning to deliver state-of-the-art results.',
    ],
  },
  {
    company: 'ISemantics',
    role: 'Machine Learning Engineer',
    period: 'Feb 2022 – May 2022',
    location: 'Giza, Egypt',
    accent: '#6366f1',
    bullets: [
      'Worked on supervised, semi-supervised, and unsupervised problems using state-of-the-art deep learning.',
      'Implemented research paper algorithms on real-world datasets.',
      'Built end-to-end AI-powered software products.',
    ],
  },
  {
    company: 'Samsung Electronics',
    role: 'Programming Teaching Assistant',
    period: 'Dec 2019 – Nov 2020',
    location: 'Smart Village, Cairo',
    accent: '#8b5cf6',
    bullets: [
      'Taught 30 students Python, Algorithms, Data Structures, C, and Arduino in Samsung Innovation Campus.',
      'Collaborated with a team of 10 teachers and facilitators to deliver the full-time program.',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d4ff]/4 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="h-px w-8 bg-[#00d4ff]" />
            <span className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase">Career Journey</span>
            <div className="h-px w-8 bg-[#00d4ff]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Experience <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 -translate-x-1/2 timeline-track w-0.5 hidden sm:block" />

          <div className="space-y-8">
            {experience.map((role, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={`${role.company}-${role.role}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.07 }}
                  className={`relative flex items-start gap-4 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="glass rounded-2xl p-6 hover:scale-[1.01] transition-transform duration-300">
                      <div className="flex items-start justify-between mb-3 gap-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-black text-white text-base leading-tight">{role.company}</span>
                            {role.current && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 font-medium">
                                Current
                              </span>
                            )}
                          </div>
                          <div className="text-sm font-semibold" style={{ color: role.accent }}>{role.role}</div>
                        </div>
                        <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                          style={{ background: `${role.accent}15`, border: `1px solid ${role.accent}30` }}>
                          <FiBriefcase size={15} style={{ color: role.accent }} />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#8892b0] mb-4">
                        <span>{role.period}</span>
                        <span>·</span>
                        <span>{role.location}</span>
                      </div>

                      <ul className="space-y-2">
                        {role.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2 text-sm text-[#8892b0] leading-relaxed">
                            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: role.accent }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Dot on timeline */}
                  <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#050a18] items-center justify-center z-10"
                    style={{ background: role.accent, boxShadow: `0 0 12px ${role.accent}80` }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
