'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface Project {
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  accent: string;
  emoji: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'BioBERT Pretraining on Genetic Mutations',
    emoji: '🧬',
    description:
      'Pretrained the BioBERT model on a genetic mutation classification dataset, achieving 72.86% accuracy and 73.31% F1-score.',
    bullets: [
      'Applied head, middle, and head+tail truncation methods for data preparation.',
      'Developed and implemented upsampling techniques to address class imbalance.',
      'Resulted in more reliable predictions across mutation categories.',
    ],
    tags: ['BioBERT', 'PyTorch', 'NLP', 'Transformers', 'HuggingFace', 'Python'],
    accent: '#00d4ff',
    githubUrl: 'https://github.com/abdelrhmanwahdan',
  },
  {
    title: 'BCD Flutter Application',
    emoji: '🏥',
    description:
      'Breast Cancer Detector — graduation project that predicts tumor malignancy from blood tests using ML, with smart scheduling and community features.',
    bullets: [
      'ML model predicts whether a tumor is benign or malignant based on blood test results.',
      'Integrated calendar system for doctor appointments, chemotherapy sessions, and medication reminders.',
      'Community support platform where users share their cancer journey stories.',
    ],
    tags: ['Flutter', 'Machine Learning', 'Scikit-Learn', 'Firebase', 'Python', 'Healthcare AI'],
    accent: '#7c3aed',
    githubUrl: 'https://github.com/abdelrhmanwahdan',
  },
  {
    title: 'DNN Automatic Speech Recognizer',
    emoji: '🎙️',
    description:
      'A deep neural network functioning as part of an end-to-end automatic speech recognition (ASR) pipeline.',
    bullets: [
      'Designed and implemented a full ASR pipeline using deep neural networks.',
      'Integrated acoustic model with language model for improved transcription accuracy.',
      'Evaluated on standard speech benchmarks with competitive WER performance.',
    ],
    tags: ['Deep Learning', 'PyTorch', 'ASR', 'RNN', 'CTC', 'Audio Processing'],
    accent: '#ec4899',
    githubUrl: 'https://github.com/abdelrhmanwahdan',
  },
  {
    title: 'ML Pipeline Automation Platform',
    emoji: '⚙️',
    description:
      'End-to-end MLOps infrastructure built from scratch at Valify Solutions enabling efficient model training, deployment, and monitoring.',
    bullets: [
      'Containerized ML workflows with Docker and Bash automation.',
      'Designed CI/CD processes and governance for reliable production deployments.',
      'Implemented model monitoring and retraining pipelines for face match and liveness detection.',
    ],
    tags: ['MLOps', 'Docker', 'CI/CD', 'Azure', 'Python', 'Model Monitoring'],
    accent: '#10b981',
  },
  {
    title: 'LangGraph Legal Document Agent',
    emoji: '⚖️',
    description:
      'LangGraph and LangChain-powered AI agent for extracting and summarizing key insights from legal documents.',
    bullets: [
      'Architected a multi-step reasoning agent pipeline using LangGraph.',
      'Enabled customer success team to query legal documents intelligently.',
      'Reduced document review time significantly with automated summarization.',
    ],
    tags: ['LangGraph', 'LangChain', 'GPT', 'Azure', 'Python', 'RAG'],
    accent: '#f59e0b',
  },
  {
    title: 'Ticket Pricing Reinforcement Learning',
    emoji: '🎟️',
    description:
      'Dynamic ticket pricing algorithm using reinforcement learning and deep learning for Ticket Wallet (YC X25 startup).',
    bullets: [
      'Led a team to design and train RL agents for real-time ticket price optimization.',
      'Built comprehensive data preprocessing pipelines ensuring high data quality.',
      'Deployed production system handling live pricing decisions.',
    ],
    tags: ['Reinforcement Learning', 'Deep Learning', 'Python', 'PyTorch', 'AWS'],
    accent: '#6366f1',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#ec4899]/4 rounded-full blur-3xl" />

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
            <span className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase">Featured Work</span>
            <div className="h-px w-8 bg-[#00d4ff]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Notable <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 flex flex-col group"
              style={{ borderColor: `${project.accent}15` }}
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${project.accent}12`, border: `1px solid ${project.accent}25` }}
                >
                  {project.emoji}
                </div>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8892b0] hover:text-[#00d4ff] transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <FiGithub size={18} />
                  </a>
                )}
              </div>

              {/* Title + desc */}
              <h3 className="text-white font-bold text-base mb-2 leading-tight">{project.title}</h3>
              <p className="text-[#8892b0] text-sm leading-relaxed mb-4">{project.description}</p>

              {/* Bullets */}
              <ul className="space-y-1.5 mb-5 flex-1">
                {project.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-start gap-2 text-xs text-[#6b7d9b]">
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.accent }} />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-1 rounded-md font-medium"
                    style={{
                      background: `${project.accent}10`,
                      color: project.accent,
                      border: `1px solid ${project.accent}20`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
