export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Slow ambient orbs — sized in vw so they never exceed viewport */}
      <div
        className="absolute rounded-full opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)',
          width: 'min(600px, 80vw)',
          height: 'min(600px, 80vw)',
          top: '-10%',
          left: '-5%',
          animation: 'drift1 20s ease-in-out infinite alternate',
        }}
      />
      <div
        className="absolute rounded-full opacity-[0.05]"
        style={{
          background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
          width: 'min(500px, 70vw)',
          height: 'min(500px, 70vw)',
          bottom: '-5%',
          right: '-5%',
          animation: 'drift2 25s ease-in-out infinite alternate',
        }}
      />
      <div
        className="absolute rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
          width: 'min(400px, 60vw)',
          height: 'min(400px, 60vw)',
          top: '40%',
          right: '10%',
          animation: 'drift1 30s ease-in-out infinite alternate-reverse',
        }}
      />

      <style>{`
        @keyframes drift1 {
          from { transform: translate(0, 0); }
          to   { transform: translate(30px, 20px); }
        }
        @keyframes drift2 {
          from { transform: translate(0, 0); }
          to   { transform: translate(-30px, -20px); }
        }
      `}</style>
    </div>
  );
}
