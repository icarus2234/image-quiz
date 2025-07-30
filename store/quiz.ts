import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type QuizState = {
  headerProgress: number;
};

type QuizActions = {
  setHeaderProgress: (progress: number) => void;
};

export const useQuizStore = create<QuizState & QuizActions>()(
  devtools(
    persist(
      set => ({
        headerProgress: 0,
        setHeaderProgress: progress => set({ headerProgress: progress }),
      }),
      {
        name: 'quiz-store',
      }
    )
  )
);
