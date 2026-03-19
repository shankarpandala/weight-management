import useAppStore from '../store/appStore';
import { CURRICULUM } from '../subjects/index.js';

function useProgress() {
  const markComplete = useAppStore((state) => state.markSectionComplete);
  const isComplete = useAppStore((state) => state.isComplete);
  const getSubjectProgress = useAppStore((state) => state.getSubjectProgress);
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

  return { markComplete, isComplete, isChapterComplete, getSubjectProgress };
}

export default useProgress;
