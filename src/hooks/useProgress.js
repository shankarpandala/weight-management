import useAppStore from '../store/appStore';
import { CURRICULUM } from '../subjects/index.js';

function useProgress() {
  const markComplete = useAppStore((state) => state.markSectionComplete);
  const isComplete = useAppStore((state) => state.isComplete);
  const completedSections = useAppStore((state) => state.completedSections);

  const isChapterComplete = (subjectId, chapterId) => {
    const subject = CURRICULUM.find((s) => s.id === subjectId);
    if (!subject) return false;
    const chapter = subject.chapters?.find((c) => c.id === chapterId);
    if (!chapter || !chapter.sections || chapter.sections.length === 0) return false;
    return chapter.sections.every((sec) => {
      const key = `${subjectId}::${chapterId}::${sec.id}`;
      return completedSections.includes(key);
    });
  };

  const getSectionProgress = (subjectId, chapterId, sectionId) => {
    const key = `${subjectId}::${chapterId}::${sectionId}`;
    return completedSections.includes(key);
  };

  const getChapterProgress = (subjectId, chapterId) => {
    const subject = CURRICULUM.find((s) => s.id === subjectId);
    if (!subject) return [];
    const chapter = subject.chapters?.find((c) => c.id === chapterId);
    if (!chapter || !chapter.sections) return [];
    return chapter.sections
      .filter((sec) => {
        const key = `${subjectId}::${chapterId}::${sec.id}`;
        return completedSections.includes(key);
      })
      .map((sec) => sec.id);
  };

  const getSubjectProgress = (subjectId) => {
    return completedSections.filter((key) => key.startsWith(`${subjectId}::`)).length;
  };

  return { markComplete, isComplete, isChapterComplete, getSubjectProgress, getSectionProgress, getChapterProgress };
}

export default useProgress;
