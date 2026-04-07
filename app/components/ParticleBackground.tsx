export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Slow ambient orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)',
          top: '-10%',
          left: '-5%',
          animation: 'drift1 20s ease-in-out infinite alternate',
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.05]"
        style={{
          background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
          bottom: '-5%',
          right: '-5%',
          animation: 'drift2 25s ease-in-out infinite alternate',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
          top: '40%',
          right: '20%',
          animation: 'drift1 30s ease-in-out infinite alternate-reverse',
        }}
      />

      <style>{`
        @keyframes drift1 {
          from { transform: translate(0, 0); }
          to   { transform: translate(40px, 30px); }
        }
        @keyframes drift2 {
          from { transform: translate(0, 0); }
          to   { transform: translate(-40px, -25px); }
        }
      `}</style>
    </div>
  );
}
