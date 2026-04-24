import {
  AbsoluteFill,
  Audio,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { motion } from 'framer-motion';
import { LECTURE_CONTENT } from './c1CellBiologyLectureContent.js';
import { GENERATED_LECTURE_TIMINGS } from './generated/c1CellBiologyLectureTimings.js';

const COLORS = {
  bg: '#050b15',
  bg2: '#091729',
  panel: 'rgba(11, 22, 40, 0.84)',
  panel2: 'rgba(13, 27, 49, 0.94)',
  accent: '#74d0ff',
  accent2: '#8bf0d2',
  warm: '#ffd18a',
  text: '#f8fbff',
  muted: '#c5d4e4',
};

const FADE = 72;
const FALLBACK_DURATION = 900;

const Visuals = {
  cell: CellVisual,
  membrane: MembraneVisual,
  glycolysis: GlycolysisVisual,
  mito: MitoVisual,
  atp: ATPVisual,
  summary: SummaryVisual,
};

function getLesson(lang) {
  const lesson = LECTURE_CONTENT[lang] ?? LECTURE_CONTENT.en;
  const timing = GENERATED_LECTURE_TIMINGS[lang] ?? GENERATED_LECTURE_TIMINGS.en;

  const scenes = lesson.scenes.map((scene, index) => {
    const generated = timing?.scenes?.[index];
    const durationFrames = generated?.durationFrames ?? FALLBACK_DURATION;

    return {
      ...scene,
      audioSrc:
        generated?.audioSrc ??
        `audio/c1-cell-biology-lecture/${lang}/${String(index).padStart(2, '0')}-${scene.slug}.wav`,
      durationFrames,
      durationSeconds: generated?.durationSeconds ?? durationFrames / 30,
      startFrame: generated?.startFrame,
    };
  });

  let cursor = 0;
  const normalizedScenes = scenes.map((scene) => {
    const next = {
      ...scene,
      startFrame: typeof scene.startFrame === 'number' ? scene.startFrame : cursor,
    };
    cursor = next.startFrame + next.durationFrames;
    return next;
  });

  return {
    ...lesson,
    scenes: normalizedScenes,
    totalFrames: timing?.totalFrames ?? cursor,
  };
}

function getActiveSceneIndex(frame, scenes) {
  const found = scenes.findIndex((scene) => frame < scene.startFrame + scene.durationFrames);
  return found === -1 ? scenes.length - 1 : found;
}

function sceneOpacity(frame, durationFrames) {
  const fade = Math.min(FADE, Math.max(18, Math.floor(durationFrames * 0.18)));
  return interpolate(frame, [0, fade, durationFrames - fade, durationFrames], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
}

function sceneOffset(frame) {
  return interpolate(frame, [0, FADE], [34, 0], { extrapolateRight: 'clamp' });
}

function Pill({ children, tone = 'accent' }) {
  const style =
    tone === 'warm'
      ? { color: COLORS.warm, border: 'rgba(255, 209, 138, 0.32)', bg: 'rgba(255, 209, 138, 0.08)' }
      : { color: COLORS.accent2, border: 'rgba(126, 198, 255, 0.24)', bg: 'rgba(126, 198, 255, 0.08)' };

  return (
    <div
      style={{
        display: 'inline-flex',
        padding: '12px 18px',
        borderRadius: 999,
        border: `1px solid ${style.border}`,
        background: style.bg,
        color: style.color,
        fontSize: 22,
        fontWeight: 900,
        letterSpacing: '0.08em',
      }}
    >
      {children}
    </div>
  );
}

function Background({ frame }) {
  const drift = Math.sin(frame / 120) * 16;
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 12% 18%, rgba(116, 208, 255, 0.18), transparent 22%), radial-gradient(circle at 82% 14%, rgba(139, 240, 210, 0.12), transparent 20%), radial-gradient(circle at 84% 78%, rgba(255, 209, 138, 0.10), transparent 22%), linear-gradient(160deg, ${COLORS.bg} 0%, ${COLORS.bg2} 100%)`,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
          opacity: 0.12,
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          left: 80,
          top: 120,
          width: 360,
          height: 360,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, rgba(116, 208, 255, 0.20), transparent 68%)',
          filter: 'blur(6px)',
          y: drift,
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          right: 140,
          top: 180,
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, rgba(139, 240, 210, 0.16), transparent 68%)',
          filter: 'blur(6px)',
          y: -drift,
        }}
      />
    </AbsoluteFill>
  );
}

function Header({ lesson }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 24,
        color: COLORS.muted,
        fontSize: 24,
        letterSpacing: '0.18em',
        fontWeight: 800,
      }}
    >
      <div>{lesson.deckLabel}</div>
      <div style={{ color: COLORS.accent2 }}>{lesson.subtitle}</div>
    </div>
  );
}

function Footer() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: COLORS.muted,
        fontSize: 22,
      }}
    >
      <div>c1-cell-biology · Section 1</div>
      <div style={{ color: COLORS.accent2, fontWeight: 800 }}>pandala.in</div>
    </div>
  );
}

function Bullets({ items }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {items.map((item, index) => (
        <div
          key={item}
          style={{
            padding: '16px 20px',
            borderRadius: 22,
            background: index === 0 ? 'rgba(116, 208, 255, 0.12)' : 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: COLORS.text,
            fontSize: 26,
            fontWeight: 800,
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function Captions({ scene }) {
  const frame = useCurrentFrame();
  const fade = Math.min(FADE, Math.max(18, Math.floor(scene.durationFrames * 0.18)));
  const fadeIn = interpolate(frame, [0, fade], [0, 1], { extrapolateLeft: 'clamp' });
  const fadeOut = interpolate(frame, [scene.durationFrames - fade, scene.durationFrames], [1, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: 160,
        right: 160,
        bottom: 170,
        display: 'flex',
        justifyContent: 'center',
        opacity: Math.min(fadeIn, fadeOut),
      }}
    >
      <div
        style={{
          maxWidth: 2400,
          padding: '22px 30px',
          borderRadius: 26,
          background: 'rgba(6, 12, 22, 0.72)',
          border: '1px solid rgba(126, 198, 255, 0.22)',
          color: COLORS.text,
          textAlign: 'center',
          fontSize: 34,
          lineHeight: 1.45,
          fontWeight: 800,
        }}
      >
        {scene.caption}
      </div>
    </div>
  );
}

function CellVisual({ sceneFrame, sceneFrames }) {
  const pulse = 1 + Math.sin(sceneFrame / 30) * 0.03;
  return (
    <div style={{ position: 'relative', width: 1320, maxWidth: '100%', aspectRatio: '1 / 1' }}>
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 30%, rgba(139,240,210,0.22), rgba(6,12,22,0.95) 66%)',
          border: '2px solid rgba(116, 208, 255, 0.2)',
          scale: pulse,
        }}
      />
      <div style={{ position: 'absolute', inset: 110, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)' }} />
      <div
        style={{
          position: 'absolute',
          left: 170,
          top: 180,
          width: 220,
          height: 220,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 209, 138, 0.32), rgba(255, 209, 138, 0.06) 72%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 240,
          top: 300,
          width: 260,
          height: 180,
          borderRadius: '44% 56% 50% 50% / 45% 40% 60% 55%',
          background: 'linear-gradient(135deg, rgba(116,208,255,0.48), rgba(139,240,210,0.14))',
          border: '1px solid rgba(116,208,255,0.24)',
          transform: `rotate(${interpolate(sceneFrame, [0, sceneFrames], [0, 12], { extrapolateRight: 'clamp' })}deg)`,
        }}
      />
      <div style={{ position: 'absolute', left: 60, bottom: 120, padding: '12px 18px', borderRadius: 999, background: 'rgba(6,12,22,0.8)', color: COLORS.accent2, fontSize: 22, fontWeight: 800 }}>membrane</div>
      <div style={{ position: 'absolute', right: 70, top: 90, padding: '12px 18px', borderRadius: 999, background: 'rgba(6,12,22,0.8)', color: COLORS.warm, fontSize: 22, fontWeight: 800 }}>nucleus</div>
      <div style={{ position: 'absolute', left: 240, bottom: 60, color: COLORS.muted, fontSize: 24 }}>A whole cell is a coordinated energy system.</div>
    </div>
  );
}

function MembraneVisual({ sceneFrame, sceneFrames }) {
  const gate = interpolate(sceneFrame, [0, sceneFrames], [0.1, 1], { extrapolateRight: 'clamp' });
  return (
    <div style={{ position: 'relative', width: 1320, maxWidth: '100%', aspectRatio: '1 / 1' }}>
      <div style={{ position: 'absolute', left: 140, right: 140, top: 330, height: 180, borderRadius: 999, background: 'rgba(116,208,255,0.10)', border: '1px solid rgba(116,208,255,0.24)' }} />
      <div style={{ position: 'absolute', left: 520, top: 250, width: 280, height: 360, borderRadius: 36, background: 'rgba(139,240,210,0.14)', border: '1px solid rgba(139,240,210,0.3)', transform: `scale(${gate})` }} />
      <div style={{ position: 'absolute', left: 220, top: 180, color: COLORS.text, fontSize: 32, fontWeight: 800 }}>Outside</div>
      <div style={{ position: 'absolute', right: 220, top: 180, color: COLORS.text, fontSize: 32, fontWeight: 800 }}>Inside</div>
      <div style={{ position: 'absolute', left: 300, top: 650, color: COLORS.muted, fontSize: 24, maxWidth: 280 }}>Transport proteins decide what enters, what leaves, and what stays controlled.</div>
      {[
        [250, 410, COLORS.warm],
        [1060, 410, COLORS.accent2],
      ].map(([x, y, color], i) => (
        <div key={i} style={{ position: 'absolute', left: x, top: y, width: 28, height: 28, borderRadius: '50%', background: color, boxShadow: `0 0 28px ${color}` }} />
      ))}
    </div>
  );
}

function GlycolysisVisual({ sceneFrame, sceneFrames }) {
  const p = interpolate(sceneFrame, [0, sceneFrames], [0, 1], { extrapolateRight: 'clamp' });
  return (
    <div style={{ position: 'relative', width: 1320, maxWidth: '100%', aspectRatio: '1 / 1' }}>
      {['Glucose', 'Split', 'ATP'].map((label, i) => (
        <motion.div
          key={label}
          style={{
            position: 'absolute',
            left: 140 + i * 360,
            top: 250 + i * 20,
            padding: '22px 28px',
            borderRadius: 28,
            background: 'rgba(11,22,40,0.88)',
            border: `1px solid ${(i === 1 ? COLORS.warm : i === 2 ? COLORS.accent2 : COLORS.accent)}66`,
            color: i === 1 ? COLORS.warm : i === 2 ? COLORS.accent2 : COLORS.text,
            fontSize: 34,
            fontWeight: 900,
            opacity: interpolate(p, [i * 0.2, i * 0.2 + 0.18], [0, 1], { extrapolateRight: 'clamp' }),
          }}
        >
          {label}
        </motion.div>
      ))}
      <div style={{ position: 'absolute', left: 250, right: 250, top: 420, height: 12, borderRadius: 999, background: 'rgba(255,255,255,0.08)' }} />
      <div style={{ position: 'absolute', left: 250, top: 420, width: `${p * 100}%`, height: 12, borderRadius: 999, background: 'linear-gradient(90deg, #74d0ff, #8bf0d2)' }} />
      <div style={{ position: 'absolute', left: 180, top: 640, color: COLORS.muted, fontSize: 24 }}>The first energy split happens in the cytoplasm.</div>
    </div>
  );
}

function MitoVisual({ sceneFrame }) {
  const pulse = 1 + Math.sin(sceneFrame / 26) * 0.04;
  return (
    <div style={{ position: 'relative', width: 1320, maxWidth: '100%', aspectRatio: '1 / 1' }}>
      <motion.div
        style={{
          position: 'absolute',
          left: 160,
          top: 240,
          width: 1000,
          height: 520,
          borderRadius: '46% 54% 50% 50% / 48% 42% 58% 52%',
          background: 'linear-gradient(135deg, rgba(116,208,255,0.34), rgba(139,240,210,0.14))',
          border: '1px solid rgba(116,208,255,0.25)',
          scale: pulse,
        }}
      />
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} style={{ position: 'absolute', left: 260, top: 310 + i * 60, width: 800, height: 8, borderRadius: 999, background: i % 2 ? 'rgba(255,209,138,0.28)' : 'rgba(255,255,255,0.10)' }} />
      ))}
      <div style={{ position: 'absolute', left: 170, top: 120, color: COLORS.muted, fontSize: 24, maxWidth: 340 }}>The folded inner membrane gives the cell more room to make ATP.</div>
    </div>
  );
}

function ATPVisual({ sceneFrame, sceneFrames }) {
  const p = interpolate(sceneFrame, [0, sceneFrames], [0, 1], { extrapolateRight: 'clamp' });
  return (
    <div style={{ position: 'relative', width: 1320, maxWidth: '100%', aspectRatio: '1 / 1' }}>
      {[
        ['Food', 160, 190, COLORS.warm],
        ['ATP', 520, 390, COLORS.accent],
        ['Work', 880, 590, COLORS.accent2],
      ].map(([label, x, y, color], i) => (
        <motion.div
          key={label}
          style={{
            position: 'absolute',
            left: x,
            top: y,
            padding: '26px 30px',
            borderRadius: 28,
            background: 'rgba(11,22,40,0.88)',
            border: `1px solid ${color}66`,
            color,
            fontSize: 36,
            fontWeight: 900,
            opacity: interpolate(p, [0, 0.18 + i * 0.08], [0, 1], { extrapolateRight: 'clamp' }),
          }}
        >
          {label}
        </motion.div>
      ))}
      <div style={{ position: 'absolute', left: 270, top: 370, right: 270, height: 14, borderRadius: 999, background: 'rgba(255,255,255,0.08)' }} />
      <div style={{ position: 'absolute', left: 270, top: 370, width: `${p * 100}%`, height: 14, borderRadius: 999, background: 'linear-gradient(90deg, #ffd18a, #74d0ff, #8bf0d2)' }} />
      <div style={{ position: 'absolute', left: 180, top: 700, color: COLORS.muted, fontSize: 24 }}>ATP is spent on movement, transport, repair, and heat.</div>
    </div>
  );
}

function SummaryVisual() {
  return (
    <div style={{ position: 'relative', width: 1320, maxWidth: '100%', aspectRatio: '1 / 1' }}>
      <div style={{ position: 'absolute', left: 290, top: 150, width: 740, height: 740, borderRadius: '50%', border: '2px solid rgba(116,208,255,0.22)', background: 'radial-gradient(circle at 35% 30%, rgba(116,208,255,0.14), rgba(6,12,22,0.92) 66%)' }} />
      {[
        [320, 260, 'Membrane', COLORS.accent],
        [840, 260, 'Mitochondria', COLORS.accent2],
        [570, 660, 'ATP', COLORS.warm],
      ].map(([x, y, label, color]) => (
        <div key={label} style={{ position: 'absolute', left: x, top: y, padding: '18px 22px', borderRadius: 999, background: 'rgba(6,12,22,0.86)', border: `1px solid ${color}66`, color, fontSize: 28, fontWeight: 900 }}>
          {label}
        </div>
      ))}
    </div>
  );
}

function SceneCard({ lesson, scene, index }) {
  const frame = useCurrentFrame();
  const opacity = sceneOpacity(frame, scene.durationFrames);
  const offset = sceneOffset(frame);
  const progress = interpolate(frame, [0, Math.min(scene.durationFrames, 150)], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const Visual = Visuals[scene.visual];

  return (
    <AbsoluteFill style={{ opacity, transform: `translateY(${offset}px)` }}>
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          gridTemplateRows: 'auto 1fr auto',
          padding: '96px 120px 90px',
          gap: 46,
        }}
      >
        <Header lesson={lesson} />
        <div style={{ display: 'grid', gridTemplateColumns: '1.03fr 0.97fr', gap: 84, alignItems: 'center' }}>
          <motion.div
            style={{
              transform: `translateX(${interpolate(progress, [0, 1], [74, 0])}px)`,
              opacity: interpolate(progress, [0, 0.15], [0, 1], { extrapolateRight: 'clamp' }),
              display: 'grid',
              gap: 24,
              maxWidth: 1580,
            }}
          >
            <Pill tone={index === 1 || index === 4 ? 'warm' : 'accent'}>{scene.tag}</Pill>
            <div style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 116, lineHeight: 0.95, letterSpacing: '-0.055em', fontWeight: 900, color: COLORS.text }}>
              {scene.title}
            </div>
            <div style={{ maxWidth: 1500, fontSize: 42, lineHeight: 1.52, color: COLORS.muted }}>{scene.body}</div>
            <div style={{ maxWidth: 1260 }}>
              <Bullets items={scene.bullets} />
            </div>
          </motion.div>
          <motion.div
            style={{
              transform: `translateX(${interpolate(progress, [0, 1], [90, 0])}px) scale(${interpolate(progress, [0, 1], [0.98, 1])})`,
              opacity: interpolate(progress, [0, 0.2], [0, 1], { extrapolateRight: 'clamp' }),
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '100%',
                padding: 28,
                borderRadius: 40,
                background: index === 0 ? COLORS.panel2 : COLORS.panel,
                border: '1px solid rgba(255,255,255,0.10)',
                boxShadow: '0 36px 100px rgba(0,0,0,0.34)',
              }}
            >
              <Visual sceneFrame={frame} sceneFrames={scene.durationFrames} />
            </div>
          </motion.div>
        </div>
        <div style={{ position: 'relative' }}>
          <Captions scene={scene} />
          <Footer />
        </div>
      </motion.div>
    </AbsoluteFill>
  );
}

function ProgressRail({ lesson }) {
  const frame = useCurrentFrame();
  const totalFrames = useVideoConfig().durationInFrames;
  const progress = interpolate(frame, [0, totalFrames], [0, 1], { extrapolateRight: 'clamp' });
  const active = getActiveSceneIndex(frame, lesson.scenes);

  return (
    <div style={{ position: 'absolute', left: 120, right: 120, bottom: 68, display: 'grid', gap: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: COLORS.muted, fontSize: 20, fontWeight: 800 }}>
        <span>{lesson.title}</span>
        <span>{Math.round(progress * 100)}%</span>
      </div>
      <div style={{ height: 10, borderRadius: 999, background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${progress * 100}%`, borderRadius: 999, background: 'linear-gradient(90deg, #74d0ff 0%, #8bf0d2 55%, #ffd18a 100%)' }} />
      </div>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        {lesson.scenes.map((scene, index) => (
          <div
            key={scene.tag}
            style={{
              padding: '10px 14px',
              borderRadius: 999,
              border: `1px solid ${index === active ? 'rgba(116,208,255,0.42)' : 'rgba(255,255,255,0.08)'}`,
              background: index === active ? 'rgba(116,208,255,0.12)' : 'rgba(255,255,255,0.04)',
              color: index === active ? COLORS.text : COLORS.muted,
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: '0.08em',
            }}
          >
            {scene.tag}
          </div>
        ))}
      </div>
    </div>
  );
}

function LectureDeck({ lang }) {
  const lesson = getLesson(lang);
  const frame = useCurrentFrame();
  const totalFrames = useVideoConfig().durationInFrames;
  const fadeStart = Math.max(0, totalFrames - 300);

  return (
    <AbsoluteFill>
      {lesson.scenes.map((scene) => (
        <Sequence key={`audio-${scene.slug}`} from={scene.startFrame} durationInFrames={scene.durationFrames}>
          <Audio src={staticFile(scene.audioSrc)} />
        </Sequence>
      ))}
      <Background frame={frame} />
      {lesson.scenes.map((scene, index) => (
        <Sequence key={scene.slug} from={scene.startFrame} durationInFrames={scene.durationFrames}>
          <SceneCard lesson={lesson} scene={scene} index={index} />
        </Sequence>
      ))}
      <ProgressRail lesson={lesson} />
      <AbsoluteFill
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.04) 82%, rgba(0,0,0,0.9) 100%)',
          opacity: interpolate(frame, [fadeStart, totalFrames], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          pointerEvents: 'none',
        }}
      />
    </AbsoluteFill>
  );
}

export function CellBiologyLecture4K({ lang = 'en' }) {
  return <LectureDeck lang={lang} />;
}
