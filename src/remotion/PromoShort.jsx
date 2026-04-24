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
  background: '#020706',
  backgroundDeep: '#071815',
  surface: 'rgba(7, 24, 21, 0.82)',
  surfaceStrong: 'rgba(12, 38, 32, 0.92)',
  surfaceSoft: 'rgba(255, 255, 255, 0.06)',
  border: 'rgba(169, 255, 223, 0.18)',
  accent: '#36e8a5',
  accentSoft: '#99f5d2',
  accentWarm: '#ffd166',
  text: '#f4fff9',
  muted: '#a7c4ba',
};

const SCENE_DURATION = 112;
const TOTAL_FRAMES = 448;

const features = [
  {
    title: 'పరిశోధన ఆధారిత నేర్చుకోవడం',
    copy: 'శరీర మూలాలు, పోషక శాస్త్రం, మరియు శక్తి సమతుల్యతపై స్పష్టమైన వివరణలు.',
  },
  {
    title: 'భారతీయ ఆహారాలకు సరిపడేలా',
    copy: 'నిజమైన భోజనాలు, అలవాట్లు, మరియు రోజువారీ జీవనానికి సరిపోయే ప్రాక్టికల్ గైడెన్స్.',
  },
  {
    title: 'సులభంగా ట్రాక్ చేయగల పురోగతి',
    copy: 'అధ్యాయాలు, విభాగాల మధ్య సులభంగా ముందుకు వెళ్లే మార్గం.',
  },
];

const appStats = [
  { value: '8', label: 'విషయాలు' },
  { value: '22+', label: 'అధ్యాయాలు' },
  { value: '60+', label: 'విభాగాలు' },
];

const appTags = ['శక్తి సమతుల్యత', 'భారతీయ ఆహారం', 'పురోగతి', 'శోధన', 'అధ్యాయాలు'];

const captions = [
  {
    start: 0,
    end: 112,
    text: 'pandala.in ని పరిచయం చేస్తున్నాం.',
  },
  {
    start: 112,
    end: 224,
    text: 'బరువు నియంత్రణను అర్థం చేసుకోవడానికి పరిశోధన ఆధారిత మార్గం.',
  },
  {
    start: 224,
    end: 336,
    text: 'భారతీయ ఆహారాలకు సరిపోయేలా 8 విషయాలు, 22కి పైగా అధ్యాయాలు, 60కి పైగా విభాగాలతో.',
  },
  {
    start: 336,
    end: 448,
    text: 'ఈరోజే pandala.in లో నేర్చుకోవడం ప్రారంభించండి.',
  },
];

function sceneTiming(frame, start, duration, fade = 12) {
  return interpolate(
    frame,
    [start - fade, start, start + duration - fade, start + duration],
    [0, 1, 1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    },
  );
}

function titleMotion(frame, offset = 0) {
  const progress = spring({
    frame: Math.max(0, frame - offset),
    fps: 30,
    config: {
      damping: 17,
      stiffness: 140,
      mass: 0.9,
    },
  });

  return {
    opacity: progress,
    transform: `translateY(${(1 - progress) * 32}px) scale(${0.97 + progress * 0.03})`,
  };
}

function Pill({ children, tone = 'accent' }) {
  const styles =
    tone === 'warm'
      ? {
          color: COLORS.accentWarm,
          borderColor: 'rgba(255, 209, 102, 0.3)',
          background: 'rgba(255, 209, 102, 0.08)',
        }
      : {
          color: COLORS.accentSoft,
          borderColor: 'rgba(54, 232, 165, 0.24)',
          background: 'rgba(54, 232, 165, 0.08)',
        };

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '10px 16px',
        borderRadius: 999,
        border: `1px solid ${styles.borderColor}`,
        background: styles.background,
        color: styles.color,
        fontSize: 22,
        fontWeight: 700,
        letterSpacing: '0.01em',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.18)',
      }}
    >
      {children}
    </div>
  );
}

function StatCard({ value, label, delay = 0 }) {
  const frame = useCurrentFrame();
  const motion = titleMotion(frame, delay);

  return (
    <div
      style={{
        ...motion,
        minWidth: 160,
        padding: '20px 18px',
        borderRadius: 28,
        background: 'linear-gradient(180deg, rgba(54, 232, 165, 0.14), rgba(4, 16, 13, 0.9))',
        border: `1px solid ${COLORS.border}`,
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
      }}
    >
      <div style={{ fontSize: 52, fontWeight: 900, color: COLORS.text, lineHeight: 1 }}>{value}</div>
      <div style={{ marginTop: 8, fontSize: 20, color: COLORS.muted, fontWeight: 600 }}>{label}</div>
    </div>
  );
}

function FloatingOrb({ left, top, size, delay, color }) {
  const frame = useCurrentFrame();
  const scale = 1 + Math.sin((frame + delay) / 30) * 0.08;
  const drift = Math.sin((frame + delay) / 55) * 24;

  return (
    <div
      style={{
        position: 'absolute',
        left,
        top,
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle at 30% 30%, ${color}, transparent 70%)`,
        filter: 'blur(4px)',
        opacity: 0.75,
        transform: `translateY(${drift}px) scale(${scale})`,
      }}
    />
  );
}

function FeatureCard({ title, copy, index }) {
  const frame = useCurrentFrame();
  const motion = titleMotion(frame, 20 + index * 10);

  return (
    <div
      style={{
        ...motion,
        padding: '22px',
        borderRadius: 28,
        background: COLORS.surface,
        border: `1px solid ${COLORS.border}`,
        backdropFilter: 'blur(18px)',
        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.22)',
      }}
    >
      <div style={{ fontSize: 24, fontWeight: 800, color: COLORS.text }}>{title}</div>
      <div style={{ marginTop: 10, fontSize: 18, lineHeight: 1.55, color: COLORS.muted }}>{copy}</div>
    </div>
  );
}

function PhoneMockup() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({
    frame,
    fps,
    config: {
      damping: 20,
      stiffness: 120,
      mass: 1,
    },
  });
  const fill = interpolate(frame, [20, 120], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <div
      style={{
        width: 420,
        maxWidth: '100%',
        padding: 14,
        borderRadius: 42,
        background: 'linear-gradient(180deg, rgba(167, 196, 186, 0.18), rgba(2, 7, 6, 0.95))',
        border: '1px solid rgba(255,255,255,0.12)',
        transform: `rotate(${interpolate(frame, [0, 120], [6, 0], { extrapolateRight: 'clamp' })}deg) scale(${0.94 + pop * 0.06})`,
        boxShadow: '0 50px 90px rgba(0, 0, 0, 0.45)',
      }}
    >
      <div
        style={{
          borderRadius: 32,
          overflow: 'hidden',
          background: 'linear-gradient(180deg, rgba(4, 18, 15, 0.96), rgba(8, 28, 23, 0.98))',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 22px 14px',
          }}
        >
          <div>
            <div style={{ color: COLORS.accentSoft, fontSize: 14, letterSpacing: '0.18em', fontWeight: 800 }}>
              PANDALA.IN
            </div>
            <div style={{ color: COLORS.text, fontSize: 28, fontWeight: 900, marginTop: 6 }}>
              నేటి మార్గం
            </div>
          </div>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              border: '7px solid rgba(54, 232, 165, 0.18)',
              borderTopColor: COLORS.accent,
              transform: `rotate(${frame * 4}deg)`,
            }}
          />
        </div>

        <div style={{ padding: '0 22px 22px' }}>
          <div
            style={{
              padding: 18,
              borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(54, 232, 165, 0.16), rgba(255,255,255,0.05))',
              border: `1px solid ${COLORS.border}`,
            }}
          >
            <div style={{ fontSize: 17, color: COLORS.muted, fontWeight: 600 }}>నేర్చుకోవడం కొనసాగించండి</div>
            <div style={{ marginTop: 8, fontSize: 25, fontWeight: 900, color: COLORS.text }}>
              శక్తి సమతుల్యత
            </div>
            <div style={{ marginTop: 14, height: 12, borderRadius: 999, background: 'rgba(255,255,255,0.09)' }}>
              <div
                style={{
                  width: `${fill * 100}%`,
                  height: '100%',
                  borderRadius: 999,
                  background: 'linear-gradient(90deg, #36e8a5, #99f5d2)',
                  boxShadow: '0 0 18px rgba(54, 232, 165, 0.6)',
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 14,
              marginTop: 14,
            }}
          >
            <MiniCard label="శోధన" value="వేగంగా" />
            <MiniCard label="అధ్యాయాలు" value="22+" />
          </div>

          <div style={{ marginTop: 14, display: 'grid', gap: 12 }}>
            {appTags.slice(0, 3).map((tag, index) => (
              <div
                key={tag}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 16px',
                  borderRadius: 20,
                  background: index === 0 ? 'rgba(54, 232, 165, 0.12)' : COLORS.surfaceSoft,
                  border: `1px solid ${index === 0 ? 'rgba(54, 232, 165, 0.18)' : 'rgba(255,255,255,0.08)'}`,
                  color: COLORS.text,
                }}
              >
                <span style={{ fontSize: 18, fontWeight: 700 }}>{tag}</span>
                <span style={{ fontSize: 18, color: COLORS.accentSoft }}>తెరవండి</span>
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
        background: COLORS.surfaceSoft,
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div style={{ fontSize: 16, color: COLORS.muted, fontWeight: 600 }}>{label}</div>
      <div style={{ marginTop: 8, fontSize: 28, fontWeight: 900, color: COLORS.text }}>{value}</div>
    </div>
  );
}

function SceneOne() {
  const frame = useCurrentFrame();
  const motion = titleMotion(frame, 10);

  return (
    <div style={{ ...motion, display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
      <Pill tone="warm">గందరగోళం లేకుండా బరువు నియంత్రణ</Pill>
      <h1
        style={{
          margin: 0,
          fontSize: 84,
          lineHeight: 0.95,
          letterSpacing: '-0.04em',
          fontWeight: 1000,
          color: COLORS.text,
          maxWidth: 820,
        }}
      >
        మీ శరీరాన్ని నిజంగా మార్చేది ఏమిటో తెలుసుకోండి.
      </h1>
      <p style={{ margin: 0, fontSize: 28, lineHeight: 1.5, color: COLORS.muted, maxWidth: 760 }}>
        pandala.in బరువు నియంత్రణను శాస్త్రం, భారతీయ ఆహారం, మరియు నిజమైన పురోగతిపై ఆధారపడిన స్పష్టమైన మార్గంగా మారుస్తుంది.
      </p>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 10 }}>
        <Pill>శక్తి సమతుల్యత</Pill>
        <Pill>పోషక శాస్త్రం</Pill>
        <Pill>అలవాట్ల ట్రాకింగ్</Pill>
      </div>
    </div>
  );
}

function SceneTwo() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <Pill>భారతదేశం కోసం నిర్మితం</Pill>
      <h2
        style={{
          margin: 0,
          fontSize: 70,
          lineHeight: 1,
          letterSpacing: '-0.04em',
          color: COLORS.text,
          fontWeight: 950,
          maxWidth: 850,
        }}
      >
        ఆహారం, మెటబాలిజం, మరియు అలవాట్ల వెనుక కారణాన్ని యాప్ వివరిస్తుంది.
      </h2>
      <div style={{ display: 'grid', gap: 14, maxWidth: 760 }}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} index={index} {...feature} />
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
        gridTemplateColumns: '1.05fr 0.95fr',
        alignItems: 'center',
        gap: 36,
      }}
    >
      <div style={{ display: 'grid', gap: 16 }}>
        <Pill>స్పష్టమైన నేర్చుకునే మార్గం</Pill>
        <h2
          style={{
            margin: 0,
            fontSize: 68,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            color: COLORS.text,
            fontWeight: 950,
            maxWidth: 560,
          }}
        >
          8 విషయాలు.
          <br />
          22కి పైగా అధ్యాయాలు.
          <br />
          60కి పైగా విభాగాలు.
        </h2>
        <p style={{ margin: 0, fontSize: 26, lineHeight: 1.5, color: COLORS.muted, maxWidth: 560 }}>
          పూర్తి నేర్చుకునే వ్యవస్థను అన్వేషించండి, తర్వాత ప్రతి విభాగంతో ముందుకు సాగండి.
        </p>

        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 6 }}>
          {appStats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} delay={20 + index * 10} />
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
  const frame = useCurrentFrame();
  const motion = titleMotion(frame, 15);

  return (
    <div
      style={{
        ...motion,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 22,
        maxWidth: 860,
      }}
    >
      <Pill tone="warm">ఇప్పుడే ప్రారంభించండి</Pill>
      <h2
        style={{
          margin: 0,
          fontSize: 88,
          lineHeight: 0.94,
          letterSpacing: '-0.05em',
          color: COLORS.text,
          fontWeight: 1000,
        }}
      >
        pandala.in
        <br />
        తెలివైన బరువు నియంత్రణ కోసం.
      </h2>
      <p style={{ margin: 0, fontSize: 28, lineHeight: 1.5, color: COLORS.muted, maxWidth: 760 }}>
        తదుపరి దశను స్పష్టంగా చూపించే స్ట్రక్చర్డ్ యాప్‌తో నేర్చుకోండి, ట్రాక్ చేయండి, ఆరోగ్యకరమైన అలవాట్లు నిర్మించండి.
      </p>
      <div
        style={{
          marginTop: 14,
          padding: '18px 24px',
          borderRadius: 24,
          background: 'linear-gradient(135deg, rgba(54, 232, 165, 0.18), rgba(255, 255, 255, 0.06))',
          border: `1px solid ${COLORS.border}`,
          color: COLORS.text,
          fontSize: 30,
          fontWeight: 900,
          letterSpacing: '0.02em',
          boxShadow: '0 18px 45px rgba(0, 0, 0, 0.25)',
        }}
      >
        pandala.in ని సందర్శించండి
      </div>
    </div>
  );
}

function Background({ frame }) {
  const motion = interpolate(frame, [0, TOTAL_FRAMES], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 20% 20%, rgba(54, 232, 165, 0.18), transparent 30%), radial-gradient(circle at 80% 15%, rgba(255, 209, 102, 0.12), transparent 22%), linear-gradient(160deg, ${COLORS.background} 0%, ${COLORS.backgroundDeep} 100%)`,
        color: COLORS.text,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.05))',
          opacity: 0.35 + motion * 0.1,
        }}
      />

      <FloatingOrb left={80} top={170} size={190} delay={0} color="rgba(54, 232, 165, 0.24)" />
      <FloatingOrb left={860} top={100} size={240} delay={35} color="rgba(255, 209, 102, 0.18)" />
      <FloatingOrb left={920} top={1220} size={220} delay={70} color="rgba(54, 232, 165, 0.16)" />
      <FloatingOrb left={40} top={1460} size={170} delay={20} color="rgba(153, 245, 210, 0.14)" />
    </AbsoluteFill>
  );
}

function CaptionBar() {
  const frame = useCurrentFrame();
  const active = captions.find((caption) => frame >= caption.start && frame < caption.end);

  if (!active) {
    return null;
  }

  const fadeIn = interpolate(frame, [active.start, active.start + 12], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const fadeOut = interpolate(frame, [active.end - 12, active.end], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        left: 84,
        right: 84,
        bottom: 116,
        display: 'flex',
        justifyContent: 'center',
        opacity: Math.min(fadeIn, fadeOut),
      }}
    >
      <div
        style={{
          maxWidth: 920,
          padding: '18px 28px',
          borderRadius: 24,
          background: 'rgba(2, 7, 6, 0.7)',
          border: '1px solid rgba(169, 255, 223, 0.22)',
          backdropFilter: 'blur(12px)',
          color: COLORS.text,
          textAlign: 'center',
          fontSize: 28,
          lineHeight: 1.35,
          fontWeight: 800,
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
        }}
      >
        {active.text}
      </div>
    </div>
  );
}

export function PromoShort() {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <Audio src={staticFile('audio/pandala-voiceover.mp3')} />
      <Audio src={staticFile('audio/pandala-bgm.mp3')} volume={0.16} loop />
      <Background frame={frame} />

      <AbsoluteFill
        style={{
          padding: '102px 84px 92px',
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
            color: COLORS.accentSoft,
            fontWeight: 800,
          }}
        >
          <div>PANDALA.IN</div>
          <div style={{ color: COLORS.muted }}>బరువు నియంత్రణ నేర్చుకోవడం</div>
        </div>

        <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', inset: 0 }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                opacity: sceneTiming(frame, 0, SCENE_DURATION),
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <SceneOne />
            </div>

            <div
              style={{
                position: 'absolute',
                inset: 0,
                opacity: sceneTiming(frame, SCENE_DURATION, SCENE_DURATION),
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <SceneTwo />
            </div>

            <div
              style={{
                position: 'absolute',
                inset: 0,
                opacity: sceneTiming(frame, SCENE_DURATION * 2, SCENE_DURATION),
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <SceneThree />
            </div>

            <div
              style={{
                position: 'absolute',
                inset: 0,
                opacity: sceneTiming(frame, SCENE_DURATION * 3, SCENE_DURATION),
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <SceneFour />
            </div>
          </div>
        </div>

        <CaptionBar />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 20,
            color: COLORS.muted,
            fontSize: 18,
          }}
        >
          <div>శాస్త్ర ఆధారితం. భారతీయ సందర్భం. పురోగతి కోసం.</div>
          <div style={{ color: COLORS.accentSoft, fontWeight: 700 }}>pandala.in</div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
