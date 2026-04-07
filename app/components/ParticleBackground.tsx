'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

const options: ISourceOptions = {
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
      resize: { enable: true },
    },
    modes: {
      grab: { distance: 140, links: { opacity: 0.4 } },
    },
  },
  particles: {
    color: { value: ['#00d4ff', '#7c3aed', '#38bdf8'] },
    links: {
      color: '#00d4ff',
      distance: 130,
      enable: true,
      opacity: 0.1,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: { default: 'bounce' },
      random: true,
      speed: 0.6,
      straight: false,
    },
    number: { density: { enable: true }, value: 80 },
    opacity: { value: { min: 0.05, max: 0.4 } },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 2.5 } },
  },
  detectRetina: true,
};

export default function ParticleBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0"
    />
  );
}
