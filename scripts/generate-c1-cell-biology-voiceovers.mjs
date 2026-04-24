import fs from 'node:fs';
import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js';

const OUTPUT_DIR = resolve('public/audio/c1-cell-biology');
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || 'p7sxnTSsMLYFxne9Suke';
const MODEL_ID = process.env.ELEVENLABS_MODEL_ID || 'eleven_v3';

const LESSONS = [
  {
    lang: 'en',
    outputFile: resolve(OUTPUT_DIR, 'cell-biology-en.mp3'),
    text:
      'Cell biology is where metabolism begins. Every calorie you eat is handled inside cells. The membrane controls what enters and leaves. In the cytoplasm, glycolysis starts. The nucleus holds the instructions. And the mitochondria produce most of your ATP, the body\'s energy currency. So fat loss, muscle gain, and metabolic health all come back to one question: how do cells handle energy? Keep three ideas in mind: membrane, mitochondria, and ATP. If those are clear, the rest of metabolism becomes much easier to understand.',
  },
  {
    lang: 'te',
    outputFile: resolve(OUTPUT_DIR, 'cell-biology-te.mp3'),
    text:
      'Weight management కి పునాది cell biology. మీరు తినే ప్రతి calorie చివరికి cells లోనే process అవుతుంది. Cell membrane ఏది లోపలికి రావాలో, ఏది బయటికి వెళ్లాలో నియంత్రిస్తుంది. Cytoplasm లో glycolysis మొదలవుతుంది, glucose ను usable energy గా మారుస్తుంది. Nucleus metabolism ని నడిపించే genetic instructions ను కలిగి ఉంటుంది. Mitochondria మాత్రం శరీరానికి కావలసిన ATP లో ఎక్కువ భాగాన్ని తయారు చేస్తాయి. అందుకే fat loss, muscle gain, metabolic health గురించి మాట్లాడేటప్పుడు, మనం cells energy ని ఎలా handle చేస్తాయో మాట్లాడుతున్నాం. తర్వాత section లో glycolysis, Krebs cycle, ATP synthesis ను step-by-step గా చూస్తాం. ఈ first section లో మూడు విషయాలు గుర్తుపెట్టుకోండి: membrane, mitochondria, ATP. ఇవి clear అయితే metabolism మొత్తం మరింత సులభం.',
  },
];

async function writeVoiceover({ outputFile, text, lang }) {
  await mkdir(dirname(outputFile), { recursive: true });

  const client = new ElevenLabsClient({ apiKey: process.env.ELEVENLABS_API_KEY });
  const audioStream = await client.textToSpeech.convert(VOICE_ID, {
    text,
    modelId: MODEL_ID,
    outputFormat: 'mp3_44100_128',
  });

  await pipeline(Readable.fromWeb(audioStream), fs.createWriteStream(outputFile));
  console.log(`Wrote ${lang} voiceover to ${outputFile}`);
}

async function main() {
  if (!process.env.ELEVENLABS_API_KEY) {
    throw new Error('Missing ELEVENLABS_API_KEY. Set it before running cellbio:audio or cellbio:render.');
  }

  for (const lesson of LESSONS) {
    await writeVoiceover(lesson);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
