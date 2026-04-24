import {
  AbsoluteFill,
  Audio,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const COLORS = {
  bg: '#08111d',
  bg2: '#0d1e31',
  surface: 'rgba(11, 27, 43, 0.86)',
  line: 'rgba(148, 196, 255, 0.16)',
  accent: '#72c7ff',
  accent2: '#9ef0d8',
  warm: '#ffd58a',
  text: '#f8fbff',
  muted: '#bfd0df',
};

const TOTAL_FRAMES = 1980;
const SCENE_FRAMES = 360;

const LESSONS = {
  en: {
    title: 'Cell Biology & Energy Systems',
    subtitle: 'c1-cell-biology · Section 1',
    deck: 'TRAINING DECK',
    audio: 'audio/c1-cell-biology/cell-biology-en.mp3',
    captions: [
      { start: 0, end: 360, text: 'Cell biology is the foundation of metabolism.' },
      { start: 360, end: 720, text: 'The membrane controls what enters and leaves.' },
      { start: 720, end: 1080, text: 'Cytoplasm, nucleus, and mitochondria each have a role.' },
      { start: 1080, end: 1440, text: 'ATP is the body’s energy currency.' },
      { start: 1440, end: 1980, text: 'Membrane, mitochondria, and ATP. Keep these three in mind.' },
    ],
    scenes: [
      {
        label: 'OVERVIEW',
        title: 'Cells are where metabolism happens.',
        body: 'Every calorie you eat is processed inside cells. This section gives you the base layer.',
        bullets: ['What enters the cell', 'How energy begins', 'Why mitochondria matter'],
      },
      {
        label: 'MEMBRANE',
        title: 'The membrane decides what gets in and out.',
        body: 'It is a selective barrier, not a passive wrapper. Nutrients enter, waste exits, gradients stay controlled.',
        bullets: ['Selective transport', 'Ion gradients', 'Nutrient control'],
      },
      {
        label: 'CYTOPLASM + NUCLEUS',
        title: 'Energy starts in the cytoplasm; instructions sit in the nucleus.',
        body: 'Glycolysis begins in the cytoplasm, while DNA in the nucleus directs which enzymes the cell makes.',
        bullets: ['Glycolysis starts here', 'DNA directs enzymes', 'Metabolism is regulated'],
      },
      {
        label: 'MITOCHONDRIA',
        title: 'Mitochondria make most of the ATP.',
        body: 'Their folded inner membrane is built for energy production. More demand means more mitochondrial work.',
        bullets: ['Inner membrane', 'Electron transport', 'ATP synthesis'],
      },
      {
        label: 'ATP FLOW',
        title: 'Food becomes ATP, and ATP powers work.',
        body: 'Carbohydrate, fat, or protein, the cell ultimately turns fuel into ATP for motion, transport, and repair.',
        bullets: ['Food to ATP', 'ATP to work', 'Work to life'],
      },
    ],
  },
  te: {
    title: 'Cell Biology & Energy Systems',
    subtitle: 'c1-cell-biology · Section 1',
    deck: 'ట్రైనింగ్ డెక్',
    audio: 'audio/c1-cell-biology/cell-biology-te.mp3',
    captions: [
      { start: 0, end: 360, text: 'Cell biology అనేది metabolism కి పునాది.' },
      { start: 360, end: 720, text: 'Cell membrane లోపలికి, బయటికి ఏది వెళ్ళాలో నియంత్రిస్తుంది.' },
      { start: 720, end: 1080, text: 'Cytoplasm, nucleus, mitochondria - ప్రతి భాగానికి పాత్ర ఉంది.' },
      { start: 1080, end: 1440, text: 'ATP అనేది శరీరానికి కావలసిన energy currency.' },
      { start: 1440, end: 1980, text: 'Membrane, mitochondria, ATP. ఈ మూడు గుర్తుపెట్టుకోండి.' },
    ],
    scenes: [
      {
        label: 'OVERVIEW',
        title: 'Cells లోనే metabolism జరుగుతుంది.',
        body: 'మీరు తినే ప్రతి calorie ను నిజంగా ఉపయోగపడేలా మార్చేది cells. ఈ section foundation ని ఇస్తుంది.',
        bullets: ['ఏది లోపలికి వస్తుంది', 'Energy ఎలా మొదలవుతుంది', 'Mitochondria ఎందుకు ముఖ్యం'],
      },
      {
        label: 'MEMBRANE',
        title: 'Membrane ఏది లోపలికి రావాలో, ఏది బయటికి వెళ్లాలో నిర్ణయిస్తుంది.',
        body: 'ఇది కేవలం cover కాదు. Nutrients లోపలికి, waste బయటికి, gradients controlled గా ఉంటాయి.',
        bullets: ['Selective transport', 'Ion gradients', 'Nutrient control'],
      },
      {
        label: 'CYTOPLASM + NUCLEUS',
        title: 'Energy cytoplasm లో మొదలవుతుంది; instructions nucleus లో ఉంటాయి.',
        body: 'Glycolysis cytoplasm లో ప్రారంభమవుతుంది, DNA మాత్రం cell తయారుచేయాల్సిన enzymes ను nucleus ద్వారా guide చేస్తుంది.',
        bullets: ['Glycolysis ఇక్కడే మొదలు', 'DNA enzymes ని guide చేస్తుంది', 'Metabolism regulate అవుతుంది'],
      },
      {
        label: 'MITOCHONDRIA',
        title: 'Mitochondria ఎక్కువ ATP తయారు చేస్తాయి.',
        body: 'వాటి inner membrane energy production కోసం built. అవసరం ఎక్కువైతే mitochondria activity కూడా పెరుగుతుంది.',
        bullets: ['Inner membrane', 'Electron transport', 'ATP synthesis'],
      },
      {
        label: 'ATP FLOW',
        title: 'Food → ATP → Work.',
        body: 'Carbohydrate, fat, protein ఏదైనా సరే, చివరికి cell దానిని ATP గా మార్చి movement, transport, repair కోసం వాడుతుంది.',
        bullets: ['Food to ATP', 'ATP to work', 'Work to life'],
      },
    ],
  },
};

function fade(frame, start, end) {
  return interpolate(frame, [start, start + 20, end - 20, end], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
}

function pillStyle(tone) {
  if (tone === 'warm') {
    return {
      color: COLORS.warm,
      borderColor: 'rgba(255, 213, 138, 0.3)',
      background: 'rgba(255, 213, 138, 0.08)',
    };
  }

  return {
    color: COLORS.accent2,
    borderColor: 'rgba(114, 199, 255, 0.26)',
    background: 'rgba(114, 199, 255, 0.08)',
  };
}

function Pill({ children, tone = 'accent' }) {
  const styles = pillStyle(tone);
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 16px',
        borderRadius: 999,
        border: `1px solid ${styles.borderColor}`,
        background: styles.background,
        color: styles.color,
        fontSize: 20,
        fontWeight: 800,
        letterSpacing: '0.04em',
      }}
    >
      {children}
    </div>
  );
}

function Background({ frame }) {
  const shimmer = interpolate(frame, [0, TOTAL_FRAMES], [0, 1], { extrapolateRight: 'clamp' });
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 18% 20%, rgba(114, 199, 255, 0.18), transparent 26%), radial-gradient(circle at 80% 22%, rgba(158, 240, 216, 0.14), transparent 22%), radial-gradient(circle at 76% 82%, rgba(255, 213, 138, 0.11), transparent 24%), linear-gradient(160deg, ${COLORS.bg} 0%, ${COLORS.bg2} 100%)`,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          opacity: 0.14 + shimmer * 0.08,
        }}
      />
      <Glow left={110} top={180} size={240} color="rgba(114, 199, 255, 0.22)" frame={frame} drift={18} />
      <Glow left={900} top={120} size={260} color="rgba(158, 240, 216, 0.16)" frame={frame} drift={26} />
      <Glow left={940} top={1360} size={260} color="rgba(255, 213, 138, 0.16)" frame={frame} drift={20} />
    </AbsoluteFill>
  );
}

function Glow({ left, top, size, color, frame, drift }) {
  const scale = 1 + Math.sin(frame / 30) * 0.05;
  const y = Math.sin((frame + left) / 50) * drift;
  return (
    <div
      style={{
        position: 'absolute',
        left,
        top,
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle at 30% 30%, ${color}, transparent 68%)`,
        filter: 'blur(6px)',
        opacity: 0.82,
        transform: `translateY(${y}px) scale(${scale})`,
      }}
    />
  );
}

function Header({ lesson }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
        color: COLORS.muted,
        fontSize: 18,
        letterSpacing: '0.16em',
        fontWeight: 800,
      }}
    >
      <div>{lesson.deck}</div>
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
        fontSize: 18,
      }}
    >
      <div>Membrane · Mitochondria · ATP</div>
      <div style={{ color: COLORS.accent2, fontWeight: 800 }}>pandala.in</div>
    </div>
  );
}

function CaptionBar({ lesson }) {
  const frame = useCurrentFrame();
  const active = lesson.captions.find((caption) => frame >= caption.start && frame < caption.end);
  if (!active) return null;

  return (
    <div
      style={{
        position: 'absolute',
        left: 80,
        right: 80,
        bottom: 112,
        display: 'flex',
        justifyContent: 'center',
        opacity: Math.min(
          interpolate(frame, [active.start, active.start + 20], [0, 1], { extrapolateLeft: 'clamp' }),
          interpolate(frame, [active.end - 20, active.end], [1, 0], { extrapolateRight: 'clamp' }),
        ),
      }}
    >
      <div
        style={{
          maxWidth: 960,
          padding: '18px 24px',
          borderRadius: 24,
          border: '1px solid rgba(148, 196, 255, 0.22)',
          background: 'rgba(7, 16, 28, 0.72)',
          color: COLORS.text,
          textAlign: 'center',
          fontSize: 26,
          lineHeight: 1.4,
          fontWeight: 800,
        }}
      >
        {active.text}
      </div>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      {items.map((item, index) => (
        <div
          key={item}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '14px 16px',
            borderRadius: 20,
            border: '1px solid rgba(255,255,255,0.08)',
            background: index === 0 ? 'rgba(114, 199, 255, 0.12)' : 'rgba(255,255,255,0.04)',
            color: COLORS.text,
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: index === 1 ? COLORS.warm : COLORS.accent2,
            }}
          />
          {item}
        </div>
      ))}
    </div>
  );
}

function CellDiagram() {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 18) * 0.03;
  return (
    <div style={{ position: 'relative', width: 500, height: 500, maxWidth: '100%' }}>
      <div
        style={{
          position: 'absolute',
          inset: 18,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, rgba(158, 240, 216, 0.22), rgba(8, 18, 29, 0.96) 68%)',
          border: '2px solid rgba(114, 199, 255, 0.22)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 72,
          top: 76,
          right: 72,
          bottom: 76,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 35%, rgba(114, 199, 255, 0.18), rgba(9, 21, 36, 0.16) 65%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 110,
          top: 118,
          width: 88,
          height: 88,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 213, 138, 0.34), rgba(255, 213, 138, 0.08) 72%)',
          border: '1px solid rgba(255, 213, 138, 0.2)',
          transform: `scale(${pulse})`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 118,
          bottom: 122,
          width: 150,
          height: 150,
          borderRadius: '44% 56% 50% 50% / 45% 40% 60% 55%',
          background: 'linear-gradient(135deg, rgba(114, 199, 255, 0.4), rgba(158, 240, 216, 0.12))',
          border: '1px solid rgba(114, 199, 255, 0.24)',
          transform: `rotate(${frame * 0.3}deg)`,
        }}
      />
      <div style={{ position: 'absolute', left: 30, top: 28, padding: '10px 12px', borderRadius: 18, background: 'rgba(11, 27, 43, 0.78)', color: COLORS.accent2, fontSize: 14, fontWeight: 800 }}>membrane</div>
      <div style={{ position: 'absolute', right: 28, top: 34, padding: '10px 12px', borderRadius: 18, background: 'rgba(11, 27, 43, 0.78)', color: COLORS.warm, fontSize: 14, fontWeight: 800 }}>nucleus</div>
      <div style={{ position: 'absolute', left: 34, bottom: 32, padding: '10px 12px', borderRadius: 18, background: 'rgba(11, 27, 43, 0.78)', color: COLORS.text, fontSize: 14, fontWeight: 800 }}>ATP output</div>
    </div>
  );
}

function SceneBlock({ lesson, index }) {
  const frame = useCurrentFrame();
  const motion = spring({
    frame,
    fps: useVideoConfig().fps,
    config: { damping: 18, stiffness: 120, mass: 0.9 },
  });
  const slide = lesson.scenes[index];

  if (index === 0) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 36, alignItems: 'center', width: '100%' }}>
        <div style={{ transform: `translateY(${(1 - motion) * 20}px)`, opacity: motion, display: 'grid', gap: 18 }}>
          <Pill tone="warm">{slide.label}</Pill>
          <h1 style={{ margin: 0, fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 88, lineHeight: 0.94, letterSpacing: '-0.05em', color: COLORS.text, fontWeight: 900 }}>{lesson.title}</h1>
          <p style={{ margin: 0, fontSize: 28, lineHeight: 1.55, color: COLORS.muted, maxWidth: 760 }}>{slide.body}</p>
          <BulletList items={slide.bullets} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ padding: 22, borderRadius: 36, background: COLORS.surface, border: '1px solid rgba(255,255,255,0.1)' }}>
            <CellDiagram />
          </div>
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.95fr', gap: 34, alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'grid', gap: 18, maxWidth: 640 }}>
          <Pill>{slide.label}</Pill>
          <h2 style={{ margin: 0, fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 72, lineHeight: 0.96, letterSpacing: '-0.05em', color: COLORS.text, fontWeight: 900 }}>{slide.title}</h2>
          <p style={{ margin: 0, fontSize: 26, lineHeight: 1.55, color: COLORS.muted }}>{slide.body}</p>
        </div>
        <BulletList items={slide.bullets} />
      </div>
    );
  }

  if (index === 2) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '0.96fr 1.04fr', gap: 34, alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'grid', gap: 16 }}>
          <div style={{ padding: 24, borderRadius: 32, background: COLORS.surface, border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ color: COLORS.warm, fontSize: 14, fontWeight: 900, letterSpacing: '0.16em' }}>CYTOPLASM</div>
            <div style={{ marginTop: 12, fontSize: 30, color: COLORS.text, fontWeight: 900 }}>Glycolysis begins here</div>
            <div style={{ marginTop: 10, fontSize: 18, lineHeight: 1.6, color: COLORS.muted }}>Glucose starts being broken down into usable energy in the cytoplasm.</div>
          </div>
          <div style={{ padding: 24, borderRadius: 32, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ color: COLORS.accent2, fontSize: 14, fontWeight: 900, letterSpacing: '0.16em' }}>NUCLEUS</div>
            <div style={{ marginTop: 12, fontSize: 30, color: COLORS.text, fontWeight: 900 }}>Instructions for metabolism</div>
            <div style={{ marginTop: 10, fontSize: 18, lineHeight: 1.6, color: COLORS.muted }}>DNA controls which enzymes get made, shaping how each cell handles fuel.</div>
          </div>
        </div>
        <div style={{ display: 'grid', gap: 18 }}>
          <Pill tone="warm">{slide.label}</Pill>
          <h2 style={{ margin: 0, fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 70, lineHeight: 0.96, letterSpacing: '-0.05em', color: COLORS.text, fontWeight: 900 }}>{slide.title}</h2>
          <p style={{ margin: 0, fontSize: 26, lineHeight: 1.55, color: COLORS.muted }}>{slide.body}</p>
          <BulletList items={slide.bullets} />
        </div>
      </div>
    );
  }

  if (index === 3) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1.02fr 0.98fr', gap: 34, alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'grid', gap: 18, maxWidth: 640 }}>
          <Pill>{slide.label}</Pill>
          <h2 style={{ margin: 0, fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 72, lineHeight: 0.96, letterSpacing: '-0.05em', color: COLORS.text, fontWeight: 900 }}>{slide.title}</h2>
          <p style={{ margin: 0, fontSize: 26, lineHeight: 1.55, color: COLORS.muted }}>{slide.body}</p>
          <BulletList items={slide.bullets} />
        </div>
        <div style={{ display: 'grid', gap: 16 }}>
          <div style={{ padding: 22, borderRadius: 30, background: COLORS.surface, border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ color: COLORS.accent, fontSize: 14, fontWeight: 900, letterSpacing: '0.18em' }}>POWERHOUSE</div>
            <div style={{ marginTop: 10, fontSize: 28, color: COLORS.text, fontWeight: 900 }}>Most ATP comes from here</div>
          </div>
          <div style={{ padding: 22, borderRadius: 30, background: 'rgba(114, 199, 255, 0.08)', border: '1px solid rgba(114, 199, 255, 0.16)' }}>
            <div style={{ color: COLORS.accent2, fontSize: 14, fontWeight: 900, letterSpacing: '0.18em' }}>ENERGY FACT</div>
            <div style={{ marginTop: 10, fontSize: 28, color: COLORS.text, fontWeight: 900 }}>More demand means more mitochondrial work.</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.96fr', gap: 34, alignItems: 'center', width: '100%' }}>
      <div style={{ display: 'grid', gap: 18, maxWidth: 700 }}>
        <Pill tone="warm">{slide.label}</Pill>
        <h2 style={{ margin: 0, fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 80, lineHeight: 0.94, letterSpacing: '-0.05em', color: COLORS.text, fontWeight: 900 }}>{slide.title}</h2>
        <p style={{ margin: 0, fontSize: 28, lineHeight: 1.55, color: COLORS.muted }}>{slide.body}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {slide.bullets.map((item) => (
            <div key={item} style={{ padding: '18px 16px', borderRadius: 24, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: COLORS.text, fontSize: 18, fontWeight: 900, textAlign: 'center' }}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: 24, borderRadius: 30, background: COLORS.surface, border: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ display: 'grid', gap: 16 }}>
          <div style={{ display: 'grid', gap: 12 }}>
            <div style={{ color: COLORS.warm, fontSize: 14, fontWeight: 900, letterSpacing: '0.18em' }}>FLOW</div>
            <div style={{ padding: '16px 18px', borderRadius: 22, background: 'rgba(255,255,255,0.05)', color: COLORS.text, fontSize: 20, fontWeight: 700 }}>Food</div>
            <div style={{ textAlign: 'center', color: COLORS.accent2, fontSize: 26, fontWeight: 900 }}>↓</div>
            <div style={{ padding: '16px 18px', borderRadius: 22, background: 'rgba(255,255,255,0.05)', color: COLORS.text, fontSize: 20, fontWeight: 700 }}>ATP</div>
            <div style={{ textAlign: 'center', color: COLORS.accent2, fontSize: 26, fontWeight: 900 }}>↓</div>
            <div style={{ padding: '16px 18px', borderRadius: 22, background: 'rgba(255,255,255,0.05)', color: COLORS.text, fontSize: 20, fontWeight: 700 }}>Work</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SceneFrame({ lesson, index }) {
  const frame = useCurrentFrame();
  return (
    <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: fade(frame % SCENE_FRAMES, 0, SCENE_FRAMES) }}>
        <SceneBlock lesson={lesson} index={index} />
      </div>
    </div>
  );
}

function Lecture({ lang }) {
  const lesson = LESSONS[lang] || LESSONS.en;
  const frame = useCurrentFrame();
  const sceneIndex = Math.min(lesson.scenes.length - 1, Math.floor(frame / SCENE_FRAMES));

  return (
    <AbsoluteFill>
      <Audio src={staticFile(lesson.audio)} />
      <Audio src={staticFile('audio/pandala-bgm.mp3')} volume={0.1} loop />
      <Background frame={frame} />

      <AbsoluteFill style={{ padding: '90px 84px 82px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Header lesson={lesson} />
        <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center' }}>
          <SceneFrame lesson={lesson} index={sceneIndex} />
        </div>
        <CaptionBar lesson={lesson} />
        <Footer />
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.06) 82%, rgba(0,0,0,0.84) 100%)',
          opacity: interpolate(frame, [1880, 1980], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }),
          pointerEvents: 'none',
        }}
      />
    </AbsoluteFill>
  );
}

export function CellBiologyLecture({ lang = 'en' }) {
  return <Lecture lang={lang} />;
}
