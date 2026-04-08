'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMapPin, FiBookOpen, FiUsers, FiBriefcase } from 'react-icons/fi';

const stats = [
  { value: 5, suffix: '+', label: 'Years Experience', icon: FiBriefcase, color: '#00d4ff' },
  { value: 8, suffix: '', label: 'Engineers Managed', icon: FiUsers, color: '#7c3aed' },
  { value: 8, suffix: '+', label: 'Companies', icon: FiBriefcase, color: '#10b981' },
  { value: 20, suffix: '+', label: 'Certifications', icon: FiBookOpen, color: '#10b981' },
];

function Counter({ target, suffix, color }: { target: number; suffix: string; color: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 50);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl font-black" style={{ color }}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#7c3aed]/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:text-left"
        >
          <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
            <div className="h-px w-8 bg-[#00d4ff]" />
            <span className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase">About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-2">
            The Story Behind the<br />
            <span className="gradient-text">Machine</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5 text-[#8892b0] text-base leading-relaxed"
          >
            <p>
              I&apos;m an <span className="text-white font-semibold">AI Supervisor and MLOps Architect</span> with
              5+ years building and leading production-grade AI systems. Specialized in
              LangChain/LangGraph agent systems, computer vision pipelines, and end-to-end MLOps infrastructure.
            </p>
            <p>
              Currently leading a team of <span className="text-[#00d4ff] font-semibold">8 engineers</span> at
              Valify Solutions — setting technical direction, driving ML pipeline design (face match,
              face liveness), and coaching engineers across all levels. I also serve as an
              <span className="text-[#7c3aed] font-semibold"> Instructor in the Master&apos;s in Artificial Intelligence program</span> at
              Woolf University, Switzerland, bridging industry practice with academic rigor.
            </p>
            <p>
              Built document intelligence pipelines, face liveness systems, and LLM-powered agents
              used in production. My stack spans PyTorch/TensorFlow, LangGraph, YOLO/PaddleOCR/EasyOCR,
              Docker, CI/CD, and cloud deployments on Azure and AWS.
            </p>
            <p>
              I&apos;m passionate about bridging the gap between cutting-edge research and real-world
              impact. I actively mentor engineers, contribute to the Python open-source community,
              and help students at Udacity master AI fundamentals.
            </p>

            <div className="flex items-center gap-2 text-sm pt-2">
              <FiMapPin className="text-[#00d4ff]" size={15} />
              <span className="text-[#8892b0]">Cairo / Giza, Egypt</span>
              <span className="text-[#8892b0] mx-2">·</span>
              <span className="text-emerald-400 font-medium">Open to remote opportunities</span>
            </div>

            {/* Education */}
            <div className="mt-8 space-y-3">
              {[
                { degree: 'MSc Data Science', school: 'Helwan University', year: '2023–2025' },
                { degree: 'BSc Information Systems (Very Good)', school: 'Helwan University, Faculty of Computers & AI', year: '2017–2021' },
              ].map((ed) => (
                <div key={ed.degree} className="glass rounded-xl p-4 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00d4ff]/10 to-[#7c3aed]/10 border border-[#00d4ff]/20 flex items-center justify-center flex-shrink-0">
                    <FiBookOpen className="text-[#00d4ff]" size={16} />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{ed.degree}</div>
                    <div className="text-[#8892b0] text-xs">{ed.school} · {ed.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
                style={{ borderColor: `${stat.color}15` }}
              >
                <div className="w-10 h-10 rounded-xl mx-auto mb-4 flex items-center justify-center"
                  style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}30` }}>
                  <stat.icon size={18} style={{ color: stat.color }} />
                </div>
                <Counter target={stat.value} suffix={stat.suffix} color={stat.color} />
                <div className="text-[#8892b0] text-xs mt-2">{stat.label}</div>
              </motion.div>
            ))}

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="glass rounded-2xl p-5 col-span-2"
            >
              <div className="text-[#8892b0] text-xs uppercase tracking-widest mb-3">Languages</div>
              <div className="flex gap-4">
                {[
                  { lang: 'English', level: 'Full Professional', pct: 90 },
                  { lang: 'Arabic', level: 'Native', pct: 100 },
                ].map((l) => (
                  <div key={l.lang} className="flex-1">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-white font-medium">{l.lang}</span>
                      <span className="text-[#8892b0]">{l.level}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${l.pct}%` } : {}}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-full rounded-full bg-gradient-to-r from-[#10b981] to-[#00d4ff]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
