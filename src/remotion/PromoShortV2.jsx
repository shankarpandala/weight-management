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
  bg: '#02100d',
  bg2: '#071d18',
  surface: 'rgba(7, 29, 24, 0.86)',
  surface2: 'rgba(10, 38, 31, 0.96)',
  line: 'rgba(169, 255, 223, 0.18)',
  accent: '#35e8a4',
  accent2: '#9bf5d3',
  warm: '#ffd166',
  text: '#f5fffb',
  muted: '#b0c8c0',
};

const FPS = 30;
const TOTAL_FRAMES = 1350;
const SCENE_FRAMES = 270;
const FADE_FRAMES = 18;

const captions = [
  {
    start: 0,
    end: 270,
    text: 'బరువు నియంత్రణకు షార్ట్‌కట్ లేదు.',
  },
  {
    start: 270,
    end: 540,
    text: 'pandala.in శాస్త్రం, భోజనాలు, అలవాట్లను ఒకే చోట కలుపుతుంది.',
  },
  {
    start: 540,
    end: 810,
    text: 'శరీరం, ఆహారం, పురోగతి - అన్నీ ఒకే మార్గంలో.',
  },
  {
    start: 810,
    end: 1080,
    text: '8 విషయాలు. 22కి పైగా అధ్యాయాలు. 60కి పైగా విభాగాలు.',
  },
  {
    start: 1080,
    end: 1350,
    text: 'ఈరోజే pandala.in లో ప్రారంభించండి.',
  },
];

const featureCards = [
  {
    title: 'శరీరం ఎలా స్పందిస్తుందో',
    copy: 'శక్తి, మెటబాలిజం, మరియు బరువు మార్పు మధ్య ఉన్న అసలు సంబంధాన్ని అర్థం చేసుకోండి.',
  },
  {
    title: 'ఆహారం ఎలా పనిచేస్తుందో',
    copy: 'భారతీయ భోజనాలు, పోషక విలువలు, మరియు portion control ని ఒకే లాజిక్‌లో చూడండి.',
  },
  {
    title: 'పురోగతి ఎలా కనిపిస్తుందో',
    copy: 'చిన్న నిర్ణయాలు, స్థిరమైన అలవాట్లు, మరియు స్పష్టమైన రూట్‌తో ముందుకు సాగండి.',
  },
];

const statCards = [
  { value: '8', label: 'విషయాలు' },
  { value: '22+', label: 'అధ్యాయాలు' },
  { value: '60+', label: 'విభాగాలు' },
];

const navItems = ['ప్రారంభం', 'అభ్యాసం', 'పురోగతి'];

function easeOpacity(frame, start, end) {
  return interpolate(frame, [start, start + FADE_FRAMES, end - FADE_FRAMES, end], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
}

function introSpring(frame, offset = 0) {
  return spring({
    frame: Math.max(0, frame - offset),
    fps: FPS,
    config: {
      damping: 18,
      stiffness: 130,
      mass: 0.9,
    },
  });
}

function Pill({ children, tone = 'accent' }) {
  const styles =
    tone === 'warm'
      ? {
          color: COLORS.warm,
          borderColor: 'rgba(255, 209, 102, 0.32)',
          background: 'rgba(255, 209, 102, 0.08)',
        }
      : {
          color: COLORS.accent2,
          borderColor: 'rgba(53, 232, 164, 0.26)',
          background: 'rgba(53, 232, 164, 0.08)',
        };

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
        fontSize: 22,
        fontWeight: 800,
        letterSpacing: '0.01em',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.18)',
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
        background: `radial-gradient(circle at 18% 20%, rgba(53, 232, 164, 0.18), transparent 28%), radial-gradient(circle at 82% 18%, rgba(255, 209, 102, 0.14), transparent 22%), radial-gradient(circle at 70% 82%, rgba(153, 245, 211, 0.1), transparent 25%), linear-gradient(160deg, ${COLORS.bg} 0%, ${COLORS.bg2} 100%)`,
        overflow: 'hidden',
        color: COLORS.text,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          opacity: 0.22 + shimmer * 0.08,
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.78), rgba(0,0,0,0.08))',
        }}
      />
      <FloatingGlow left={100} top={170} size={220} color="rgba(53, 232, 164, 0.22)" frame={frame} drift={18} />
      <FloatingGlow left={860} top={120} size={250} color="rgba(255, 209, 102, 0.16)" frame={frame} drift={22} />
      <FloatingGlow left={940} top={1260} size={240} color="rgba(53, 232, 164, 0.16)" frame={frame} drift={30} />
      <FloatingGlow left={40} top={1510} size={180} color="rgba(153, 245, 211, 0.14)" frame={frame} drift={15} />
    </AbsoluteFill>
  );
}

function FloatingGlow({ left, top, size, color, frame, drift }) {
  const scale = 1 + Math.sin(frame / 28) * 0.06;
  const y = Math.sin((frame + left) / 48) * drift;

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
        opacity: 0.8,
        transform: `translateY(${y}px) scale(${scale})`,
      }}
    />
  );
}

function SectionShell({ frame, start, end, children }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        opacity: easeOpacity(frame, start, end),
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, subtitle, width = 820 }) {
  return (
    <div style={{ display: 'grid', gap: 16, maxWidth: width }}>
      <Pill tone="warm">{eyebrow}</Pill>
      <h1
        style={{
          margin: 0,
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: 80,
          lineHeight: 0.96,
          letterSpacing: '-0.05em',
          color: COLORS.text,
          fontWeight: 900,
        }}
      >
        {title}
      </h1>
      <p style={{ margin: 0, fontSize: 28, lineHeight: 1.5, color: COLORS.muted }}>{subtitle}</p>
    </div>
  );
}

function Card({ title, copy, accent = COLORS.accent }) {
  const frame = useCurrentFrame();
  const motion = introSpring(frame, 12);

  return (
    <div
      style={{
        transform: `translateY(${(1 - motion) * 26}px) scale(${0.98 + motion * 0.02})`,
        opacity: motion,
        padding: 22,
        borderRadius: 28,
        background: COLORS.surface,
        border: `1px solid ${COLORS.line}`,
        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.24)',
        backdropFilter: 'blur(18px)',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 42,
          height: 42,
          borderRadius: 14,
          background: `linear-gradient(135deg, ${accent}33, ${accent}10)`,
          border: `1px solid ${accent}44`,
          color: accent,
          fontWeight: 900,
          marginBottom: 14,
        }}
      >
        •
      </div>
      <div style={{ fontSize: 26, fontWeight: 900, color: COLORS.text }}>{title}</div>
      <div style={{ marginTop: 10, fontSize: 18, lineHeight: 1.6, color: COLORS.muted }}>{copy}</div>
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div
      style={{
        padding: '20px 18px',
        borderRadius: 28,
        background: 'linear-gradient(180deg, rgba(53, 232, 164, 0.14), rgba(7, 22, 18, 0.92))',
        border: `1px solid ${COLORS.line}`,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.22)',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: 54, lineHeight: 1, fontWeight: 950, color: COLORS.text }}>{value}</div>
      <div style={{ marginTop: 8, fontSize: 20, fontWeight: 700, color: COLORS.muted }}>{label}</div>
    </div>
  );
}

function ChipRow({ items }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
      {items.map((item) => (
        <div
          key={item}
          style={{
            padding: '10px 14px',
            borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(255,255,255,0.04)',
            color: COLORS.text,
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function PhoneMockup() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const entrance = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 120, mass: 1 },
  });
  const progress = interpolate(frame, [30, 180], [0, 1], { extrapolateRight: 'clamp' });
  const spin = interpolate(frame, [0, 180], [8, 0], { extrapolateRight: 'clamp' });

  return (
    <div
      style={{
        width: 430,
        maxWidth: '100%',
        padding: 14,
        borderRadius: 42,
        background: 'linear-gradient(180deg, rgba(178, 255, 231, 0.16), rgba(2, 8, 6, 0.94))',
        border: '1px solid rgba(255,255,255,0.12)',
        transform: `rotate(${spin}deg) scale(${0.94 + entrance * 0.06})`,
        boxShadow: '0 50px 100px rgba(0,0,0,0.48)',
      }}
    >
      <div
        style={{
          borderRadius: 32,
          overflow: 'hidden',
          background: 'linear-gradient(180deg, rgba(5, 20, 16, 0.98), rgba(10, 34, 28, 0.98))',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div style={{ padding: '18px 20px 10px', display: 'flex', justifyContent: 'space-between', gap: 18 }}>
          <div>
            <div style={{ color: COLORS.accent2, fontSize: 13, fontWeight: 900, letterSpacing: '0.2em' }}>
              PANDALA.IN
            </div>
            <div style={{ marginTop: 8, color: COLORS.text, fontSize: 28, fontWeight: 950 }}>నేటి మార్గం</div>
          </div>
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: '50%',
              border: '8px solid rgba(53, 232, 164, 0.16)',
              borderTopColor: COLORS.accent,
              transform: `rotate(${frame * 3.5}deg)`,
            }}
          />
        </div>

        <div style={{ padding: '0 20px 20px', display: 'grid', gap: 14 }}>
          <div
            style={{
              padding: 18,
              borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(53, 232, 164, 0.16), rgba(255,255,255,0.04))',
              border: `1px solid ${COLORS.line}`,
            }}
          >
            <div style={{ fontSize: 16, color: COLORS.muted, fontWeight: 700 }}>ఇప్పుడే కొనసాగించండి</div>
            <div style={{ marginTop: 8, fontSize: 24, fontWeight: 950, color: COLORS.text }}>శక్తి సమతుల్యత</div>
            <div style={{ marginTop: 14, height: 12, borderRadius: 999, background: 'rgba(255,255,255,0.08)' }}>
              <div
                style={{
                  width: `${progress * 100}%`,
                  height: '100%',
                  borderRadius: 999,
                  background: 'linear-gradient(90deg, #35e8a4, #9bf5d3)',
                  boxShadow: '0 0 20px rgba(53, 232, 164, 0.6)',
                }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <MiniCard label="శోధన" value="వేగంగా" />
            <MiniCard label="అధ్యాయాలు" value="22+" />
          </div>

          <div style={{ display: 'grid', gap: 10 }}>
            {['శక్తి సమతుల్యత', 'భారతీయ ఆహారం', 'పురోగతి'].map((item, index) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 16px',
                  borderRadius: 20,
                  background: index === 0 ? 'rgba(53, 232, 164, 0.12)' : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${index === 0 ? 'rgba(53, 232, 164, 0.18)' : 'rgba(255,255,255,0.08)'}`,
                  color: COLORS.text,
                }}
              >
                <span style={{ fontSize: 18, fontWeight: 800 }}>{item}</span>
                <span style={{ fontSize: 18, color: COLORS.accent2, fontWeight: 700 }}>తెరవండి</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniCard({ label, value }) {
  return (
    <div
      style={{
        padding: 16,
        borderRadius: 22,
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div style={{ fontSize: 16, color: COLORS.muted, fontWeight: 700 }}>{label}</div>
      <div style={{ marginTop: 8, fontSize: 28, color: COLORS.text, fontWeight: 950 }}>{value}</div>
    </div>
  );
}

function CaptionBar() {
  const frame = useCurrentFrame();
  const active = captions.find((caption) => frame >= caption.start && frame < caption.end);

  if (!active) {
    return null;
  }

  return (
    <div
      style={{
        position: 'absolute',
        left: 80,
        right: 80,
        bottom: 108,
        display: 'flex',
        justifyContent: 'center',
        opacity: Math.min(
          interpolate(frame, [active.start, active.start + FADE_FRAMES], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          interpolate(frame, [active.end - FADE_FRAMES, active.end], [1, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        ),
      }}
    >
      <div
        style={{
          maxWidth: 920,
          padding: '18px 28px',
          borderRadius: 24,
          border: '1px solid rgba(169, 255, 223, 0.24)',
          background: 'rgba(2, 10, 8, 0.74)',
          backdropFilter: 'blur(12px)',
          color: COLORS.text,
          textAlign: 'center',
          fontSize: 28,
          lineHeight: 1.35,
          fontWeight: 800,
          whiteSpace: 'pre-line',
          boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
        }}
      >
        {active.text}
      </div>
    </div>
  );
}

function SceneOne() {
  const frame = useCurrentFrame();
  const motion = introSpring(frame, 10);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr',
        gap: 36,
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div
        style={{
          transform: `translateY(${(1 - motion) * 26}px)`,
          opacity: motion,
          display: 'grid',
          gap: 18,
          maxWidth: 780,
        }}
      >
        <Pill tone="warm">తెలివైన బరువు నియంత్రణ</Pill>
        <h1
          style={{
            margin: 0,
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 86,
            lineHeight: 0.94,
            letterSpacing: '-0.05em',
            color: COLORS.text,
            fontWeight: 900,
          }}
        >
          షార్ట్‌కట్ లేదు.
          <br />
          కానీ స్పష్టమైన మార్గం ఉంది.
        </h1>
        <p style={{ margin: 0, fontSize: 28, lineHeight: 1.5, color: COLORS.muted }}>
          pandala.in శాస్త్రం, భారతీయ భోజనాలు, మరియు మీ రోజువారీ అలవాట్లను ఒకే చోట కలుపుతుంది.
        </p>
        <ChipRow items={navItems} />
      </div>

      <div
        style={{
          display: 'grid',
          gap: 16,
          alignContent: 'center',
        }}
      >
        <Card
          title="శాస్త్రం ముందు"
          copy="అర్థం చేసుకుంటేనే మార్పు స్థిరంగా ఉంటుంది. సమాచారం, కారణం, చర్య ఒకే లయలో పని చేస్తాయి."
        />
        <Card
          title="భారతీయ భోజనాలు"
          copy="చపాతీ, అన్నం, స్నాక్స్, office meals. నిజ జీవితానికి సరిపోయే దృక్కోణం."
          accent={COLORS.warm}
        />
        <Card
          title="అలవాట్లు కీలకం"
          copy="చిన్న నిర్ణయాలు, సరైన దిశ, మరియు నిరంతరత కలిసి పెద్ద మార్పును నిర్మిస్తాయి."
          accent={COLORS.accent2}
        />
      </div>
    </div>
  );
}

function SceneTwo() {
  return (
    <div style={{ display: 'grid', gap: 18, maxWidth: 880 }}>
      <Pill>మొదట అర్థం చేసుకోండి</Pill>
      <h2
        style={{
          margin: 0,
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: 72,
          lineHeight: 0.98,
          letterSpacing: '-0.05em',
          color: COLORS.text,
          fontWeight: 900,
        }}
      >
        శరీరం, ఆహారం, పురోగతి:
        <br />
        ప్రతి భాగం విడిగా కాదు.
      </h2>
      <div style={{ display: 'grid', gap: 14, maxWidth: 760 }}>
        {featureCards.map((card, index) => (
          <Card key={card.title} title={card.title} copy={card.copy} accent={index === 1 ? COLORS.warm : COLORS.accent} />
        ))}
      </div>
    </div>
  );
}

function SceneThree() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '0.95fr 1.05fr',
        gap: 36,
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div style={{ display: 'grid', gap: 18, maxWidth: 580 }}>
        <Pill>యాప్ లోపల</Pill>
        <h2
          style={{
            margin: 0,
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 72,
            lineHeight: 0.98,
            letterSpacing: '-0.05em',
            color: COLORS.text,
            fontWeight: 900,
          }}
        >
          ప్రతి దశ
          <br />
          స్పష్టంగా ఉంటుంది.
        </h2>
        <p style={{ margin: 0, fontSize: 26, lineHeight: 1.55, color: COLORS.muted }}>
          Search, chapters, progress, and a clear path. మీరు ఎక్కడ ఉన్నా, తదుపరి దశ కనిపిస్తుంది.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {[
            { value: '3', label: 'ప్రధాన దారులు' },
            { value: '1', label: 'స్పష్టమైన ప్రవాహం' },
            { value: '0', label: 'గందరగోళం' },
          ].map((item) => (
            <Metric key={item.label} {...item} />
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PhoneMockup />
      </div>
    </div>
  );
}

function SceneFour() {
  return (
    <div style={{ display: 'grid', gap: 18, maxWidth: 980 }}>
      <Pill>పూర్తి map</Pill>
      <h2
        style={{
          margin: 0,
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: 76,
          lineHeight: 0.95,
          letterSpacing: '-0.05em',
          color: COLORS.text,
          fontWeight: 900,
        }}
      >
        8 విషయాలు.
        <br />
        22కి పైగా అధ్యాయాలు.
        <br />
        60కి పైగా విభాగాలు.
      </h2>
      <p style={{ margin: 0, fontSize: 26, lineHeight: 1.55, color: COLORS.muted, maxWidth: 740 }}>
        మీ వేగంతో చదవండి. తిరిగి చూడండి. అవసరమైనప్పుడు ఆగి, అర్థం చేసుకుని, మళ్లీ కొనసాగండి.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, maxWidth: 760 }}>
        {statCards.map((stat) => (
          <Metric key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
}

function SceneFive({ frame }) {
  const motion = introSpring(frame, 12);

  return (
    <div
      style={{
        transform: `translateY(${(1 - motion) * 22}px)`,
        opacity: motion,
        display: 'grid',
        gap: 22,
        maxWidth: 920,
      }}
    >
      <Pill tone="warm">ఇప్పుడే ప్రారంభించండి</Pill>
      <h2
        style={{
          margin: 0,
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: 88,
          lineHeight: 0.92,
          letterSpacing: '-0.05em',
          color: COLORS.text,
          fontWeight: 900,
        }}
      >
        pandala.in తో
        <br />
        మరింత స్పష్టంగా ముందుకు సాగండి.
      </h2>
      <p style={{ margin: 0, fontSize: 28, lineHeight: 1.55, color: COLORS.muted, maxWidth: 760 }}>
        శాస్త్ర ఆధారితం. భారతీయ సందర్భం. దీర్ఘకాలిక పురోగతి.
      </p>
      <div
        style={{
          padding: '18px 24px',
          borderRadius: 24,
          border: `1px solid ${COLORS.line}`,
          background: 'linear-gradient(135deg, rgba(53, 232, 164, 0.18), rgba(255,255,255,0.05))',
          color: COLORS.text,
          fontSize: 30,
          fontWeight: 950,
          letterSpacing: '0.02em',
          boxShadow: '0 18px 45px rgba(0,0,0,0.25)',
          width: 'fit-content',
        }}
      >
        pandala.in
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {['సులభం', 'స్పష్టం', 'నిరంతరం'].map((tag) => (
          <div
            key={tag}
            style={{
              padding: '10px 14px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.04)',
              color: COLORS.text,
              fontSize: 16,
              fontWeight: 800,
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

export function PromoShortV2() {
  const frame = useCurrentFrame();
  const outroFade = interpolate(frame, [1310, 1350], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill>
      <Audio src={staticFile('audio/pandala-voiceover.mp3')} />
      <Audio src={staticFile('audio/pandala-bgm.mp3')} volume={0.16} loop />
      <Background frame={frame} />

      <AbsoluteFill
        style={{
          padding: '96px 84px 88px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 20,
            letterSpacing: '0.18em',
            color: COLORS.accent2,
            fontWeight: 800,
          }}
        >
          <div>PANDALA.IN</div>
          <div style={{ color: COLORS.muted, letterSpacing: '0.08em' }}>TELUGU PROMO</div>
        </div>

        <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center' }}>
          <SectionShell frame={frame} start={0} end={SCENE_FRAMES}>
            <SceneOne />
          </SectionShell>
          <SectionShell frame={frame} start={SCENE_FRAMES} end={SCENE_FRAMES * 2}>
            <SceneTwo />
          </SectionShell>
          <SectionShell frame={frame} start={SCENE_FRAMES * 2} end={SCENE_FRAMES * 3}>
            <SceneThree />
          </SectionShell>
          <SectionShell frame={frame} start={SCENE_FRAMES * 3} end={SCENE_FRAMES * 4}>
            <SceneFour />
          </SectionShell>
          <SectionShell frame={frame} start={SCENE_FRAMES * 4} end={SCENE_FRAMES * 5}>
            <SceneFive frame={frame} />
          </SectionShell>
        </div>

        <CaptionBar />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 20,
            color: COLORS.muted,
            fontSize: 18,
          }}
        >
          <div>శాస్త్రం. అలవాటు. పురోగతి.</div>
          <div style={{ color: COLORS.accent2, fontWeight: 800 }}>pandala.in</div>
        </div>
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          background: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.05) 82%, rgba(0,0,0,0.88) 100%)`,
          opacity: outroFade,
          pointerEvents: 'none',
        }}
      />
    </AbsoluteFill>
  );
}
