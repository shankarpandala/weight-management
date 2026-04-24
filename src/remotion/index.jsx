import { Composition, registerRoot } from 'remotion';
import { CellBiologyLecture4K } from './CellBiologyLecture4K.jsx';
import { CellBiologyLecture } from './CellBiologyLecture.jsx';
import { PromoShortV2 } from './PromoShortV2.jsx';
import { GENERATED_LECTURE_TIMINGS } from './generated/c1CellBiologyLectureTimings.js';

function RemotionRoot() {
  return (
    <>
      <Composition
        id="PandalaPromoShort"
        component={PromoShortV2}
        durationInFrames={1350}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
      <Composition
        id="CellBiologyLectureEN"
        component={CellBiologyLecture}
        durationInFrames={1980}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{ lang: 'en' }}
      />
      <Composition
        id="CellBiologyLectureTE"
        component={CellBiologyLecture}
        durationInFrames={1980}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{ lang: 'te' }}
      />
      <Composition
        id="CellBiologyLecture4KEN"
        component={CellBiologyLecture4K}
        durationInFrames={GENERATED_LECTURE_TIMINGS.en.totalFrames}
        fps={30}
        width={3840}
        height={2160}
        defaultProps={{ lang: 'en' }}
      />
      <Composition
        id="CellBiologyLecture4KTE"
        component={CellBiologyLecture4K}
        durationInFrames={GENERATED_LECTURE_TIMINGS.te.totalFrames}
        fps={30}
        width={3840}
        height={2160}
        defaultProps={{ lang: 'te' }}
      />
    </>
  );
}

registerRoot(RemotionRoot);
