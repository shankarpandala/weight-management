import fs from 'node:fs';
import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js';

const OUTPUT_FILE = resolve('public/audio/pandala-voiceover.mp3');
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || 'p7sxnTSsMLYFxne9Suke';
const MODEL_ID = process.env.ELEVENLABS_MODEL_ID || 'eleven_v3';

const text =
  'బరువు నియంత్రణకు షార్ట్‌కట్ లేదు. కానీ స్పష్టమైన మార్గం ఉంది. pandala.in శాస్త్రం, భారతీయ భోజనాలు, మరియు మీ రోజువారీ అలవాట్లను ఒకే చోట కలుపుతుంది. మీరు శరీరం ఎలా స్పందిస్తుందో, ఆహారం ఎలా పనిచేస్తుందో, పురోగతి ఎలా కనిపిస్తుందో అర్థం చేసుకుంటారు. ఇక్కడ 8 విషయాలు, 22కి పైగా అధ్యాయాలు, 60కి పైగా విభాగాలు ఉన్నాయి. మీ వేగంతో చదవండి, తిరిగి చూడండి, కొనసాగండి. ఈరోజే pandala.in లో ప్రారంభించండి. ప్రతి దశ స్పష్టం. ప్రతి నిర్ణయం అర్థవంతం.';

async function main() {
  if (!process.env.ELEVENLABS_API_KEY) {
    throw new Error(
      'Missing ELEVENLABS_API_KEY. Set it in your shell before running audio:voiceover or promo:render.',
    );
  }

  await mkdir(dirname(OUTPUT_FILE), { recursive: true });

  const client = new ElevenLabsClient({
    apiKey: process.env.ELEVENLABS_API_KEY,
  });

  const audioStream = await client.textToSpeech.convert(VOICE_ID, {
    text,
    modelId: MODEL_ID,
    outputFormat: 'mp3_44100_128',
  });

  await pipeline(Readable.fromWeb(audioStream), fs.createWriteStream(OUTPUT_FILE));
  console.log(`Wrote ${OUTPUT_FILE}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
