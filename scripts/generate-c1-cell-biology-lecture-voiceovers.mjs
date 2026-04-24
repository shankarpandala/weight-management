import fs from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { promisify } from 'node:util';
import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js';
import { FPS, LECTURE_CONTENT } from '../src/remotion/c1CellBiologyLectureContent.js';

const execFileAsync = promisify(execFile);

const OUTPUT_DIR = resolve('public/audio/c1-cell-biology-lecture');
const GENERATED_TIMINGS = resolve('src/remotion/generated/c1CellBiologyLectureTimings.js');
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || 'p7sxnTSsMLYFxne9Suke';
const MODEL_ID = process.env.ELEVENLABS_MODEL_ID || 'eleven_v3';
const OUTPUT_FORMAT = process.env.ELEVENLABS_OUTPUT_FORMAT || 'wav_24000';
const SEED = Number(process.env.ELEVENLABS_SEED || 20260324);
const SUPPORTS_CONTINUITY_HINTS = !MODEL_ID.startsWith('eleven_v3');

const client = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY,
});

async function ensureDir(filePath) {
  await fs.mkdir(dirname(filePath), { recursive: true });
}

async function getDurationSeconds(filePath) {
  const { stdout } = await execFileAsync('ffprobe', [
    '-v',
    'error',
    '-show_entries',
    'format=duration',
    '-of',
    'default=noprint_wrappers=1:nokey=1',
    filePath,
  ]);

  const parsed = Number.parseFloat(stdout.trim());
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(`Unable to read duration for ${filePath}`);
  }

  return parsed;
}

async function writeSceneAudio({ lang, scene, index, previousText, nextText }) {
  const fileName = `${String(index).padStart(2, '0')}-${scene.slug}.wav`;
  const outputFile = resolve(OUTPUT_DIR, lang, fileName);
  const alignmentFile = resolve(OUTPUT_DIR, lang, `${String(index).padStart(2, '0')}-${scene.slug}.alignment.json`);

  await ensureDir(outputFile);

  const response = await client.textToSpeech.convertWithTimestamps(VOICE_ID, {
    text: scene.narration,
    modelId: MODEL_ID,
    languageCode: LECTURE_CONTENT[lang].languageCode,
    outputFormat: OUTPUT_FORMAT,
    seed: SEED + index,
    previousText: SUPPORTS_CONTINUITY_HINTS ? previousText : undefined,
    nextText: SUPPORTS_CONTINUITY_HINTS ? nextText : undefined,
  });

  await fs.writeFile(outputFile, Buffer.from(response.audioBase64, 'base64'));
  await fs.writeFile(
    alignmentFile,
    JSON.stringify(
      {
        slug: scene.slug,
        alignment: response.alignment ?? null,
        normalizedAlignment: response.normalizedAlignment ?? null,
      },
      null,
      2,
    ),
  );

  const durationSeconds = await getDurationSeconds(outputFile);
  return {
    slug: scene.slug,
    audioSrc: `audio/c1-cell-biology-lecture/${lang}/${fileName}`,
    durationSeconds,
    durationFrames: Math.ceil(durationSeconds * FPS),
  };
}

async function buildLanguageTiming(lang) {
  const lesson = LECTURE_CONTENT[lang];
  let startFrame = 0;
  const scenes = [];

  for (const [index, scene] of lesson.scenes.entries()) {
    const previousText = index > 0 ? lesson.scenes[index - 1].narration : undefined;
    const nextText = index < lesson.scenes.length - 1 ? lesson.scenes[index + 1].narration : undefined;
    const generated = await writeSceneAudio({
      lang,
      scene,
      index,
      previousText,
      nextText,
    });

    scenes.push({
      ...generated,
      startFrame,
      startSeconds: startFrame / FPS,
    });

    startFrame += generated.durationFrames;
    console.log(`Generated ${lang} scene ${scene.slug} (${generated.durationSeconds.toFixed(3)}s)`);
  }

  return {
    fps: FPS,
    totalFrames: scenes.reduce((sum, scene) => sum + scene.durationFrames, 0),
    totalSeconds: scenes.reduce((sum, scene) => sum + scene.durationSeconds, 0),
    scenes,
  };
}

async function writeGeneratedTimings(timings) {
  await ensureDir(GENERATED_TIMINGS);
  const moduleContents = `export const GENERATED_LECTURE_TIMINGS = ${JSON.stringify(timings, null, 2)};\n`;
  await fs.writeFile(GENERATED_TIMINGS, moduleContents);
}

async function main() {
  if (!process.env.ELEVENLABS_API_KEY) {
    throw new Error(
      'Missing ELEVENLABS_API_KEY. Set it before running cellbio4k:audio or cellbio4k:render.',
    );
  }

  const timings = {};
  for (const lang of Object.keys(LECTURE_CONTENT)) {
    timings[lang] = await buildLanguageTiming(lang);
  }

  await writeGeneratedTimings(timings);
  console.log(`Wrote generated timings to ${GENERATED_TIMINGS}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
