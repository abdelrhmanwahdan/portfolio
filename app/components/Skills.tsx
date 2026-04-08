'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SkillGroup {
  category: string;
  color: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'AI / Machine Learning',
    color: '#00d4ff',
    skills: [
      'Machine Learning', 'Deep Learning', 'Reinforcement Learning',
      'Computer Vision', 'Natural Language Processing', 'Speech Recognition',
      'Data Science', 'Data Analysis', 'Predictive Modeling', 'Anomaly Detection',
    ],
  },
  {
    category: 'Frameworks & Libraries',
    color: '#7c3aed',
    skills: [
      'PyTorch', 'TensorFlow', 'Keras', 'Scikit-Learn', 'OpenCV',
      'LangChain', 'LangGraph', 'HuggingFace', 'YOLO', 'EasyOCR',
      'PaddleOCR', 'Tesseract', 'Flask', 'React.js',
    ],
  },
  {
    category: 'Cloud & MLOps',
    color: '#10b981',
    skills: [
      'AWS', 'GCP', 'Azure', 'Azure Document Intelligence',
      'Docker', 'CI/CD', 'MLOps', 'Model Monitoring',
      'Model Deployment', 'Pipeline Automation', 'Linux',
    ],
  },
  {
    category: 'Programming & Engineering',
    color: '#10b981',
    skills: [
      'Python', 'C++', 'C', 'Java', 'JavaScript', 'MySQL',
      'PostgreSQL', 'Git', 'OOP', 'Design Patterns', 'SOLID Principles',
      'Data Structures', 'Algorithms',
    ],
  },
  {
    category: 'Leadership & Soft Skills',
    color: '#f59e0b',
    skills: [
      'Team Leadership', 'Mentoring', 'Strategy', 'Technical Direction',
      'Teaching', 'Research', 'Communication', 'Cross-functional Collaboration',
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="h-px w-8 bg-[#10b981]" />
            <span className="text-[#10b981] text-sm font-medium tracking-widest uppercase">Technical Arsenal</span>
            <div className="h-px w-8 bg-[#10b981]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass rounded-2xl p-6"
              style={{ borderColor: `${group.color}15` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-6 rounded-full" style={{ background: group.color }} />
                <h3 className="font-bold text-sm text-white tracking-wide">{group.category}</h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.03 }}
                    className="skill-tag text-xs px-3 py-1.5 rounded-lg text-[#b0bfd0] font-medium cursor-default"
                    style={{
                      background: `${group.color}08`,
                      borderColor: `${group.color}20`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual proficiency highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 glass rounded-2xl p-8"
        >
          <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-6">Core Proficiencies</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Deep Learning', pct: 95, color: '#00d4ff' },
              { label: 'Computer Vision', pct: 90, color: '#7c3aed' },
              { label: 'NLP / LLMs', pct: 88, color: '#7c3aed' },
              { label: 'MLOps / DevOps', pct: 85, color: '#10b981' },
              { label: 'Python', pct: 97, color: '#f59e0b' },
              { label: 'Cloud (AWS/GCP/Azure)', pct: 82, color: '#38bdf8' },
              { label: 'Team Leadership', pct: 92, color: '#8b5cf6' },
              { label: 'Research & R&D', pct: 88, color: '#06b6d4' },
            ].map((item, i) => (
              <div key={item.label}>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-[#8892b0] font-medium">{item.label}</span>
                  <span className="font-bold" style={{ color: item.color }}>{item.pct}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.pct}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.5 + i * 0.07, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${item.color}80, ${item.color})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
