'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { QuizPage, replaceTemplatePlaceholders, Routes, saveResults } from '@/helpers';
import { useQuizStore } from '@/store';

export const useQuizPage = (pageConfig: QuizPage) => {
  const { push, prefetch } = useRouter();
  const { setHeaderProgress } = useQuizStore();

  const { id: pageId, title, answers, pageData, nextPageId: defaultNextPageId } = pageConfig;

  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [nextPageId, setNextPageId] = useState<string>(defaultNextPageId || '');

  const determineNextPage = useCallback(
    (answerId: string): string => {
      const selected = answers.find(answer => answer.id === answerId);
      return selected?.nextPageId || nextPageId || Routes.Home;
    },
    [answers, nextPageId]
  );

  const goToNextPage = useCallback(() => {
    push(nextPageId || Routes.Home);
  }, [nextPageId, push]);

  const handleAnswerSelect = useCallback(
    (answerId: string) => {
      if (selectedAnswerId) return;

      const nextId = determineNextPage(answerId);
      const selectedAnswer = answers.find(answer => answer.id === answerId);
      if (!selectedAnswer) return;
      if (selectedAnswer.value)
        saveResults(
          `${pageId}:${replaceTemplatePlaceholders(String(selectedAnswer.value), pageData as Record<string, string> | undefined)} `
        );
      setSelectedAnswerId(answerId);
      setNextPageId(nextId);
    },
    [selectedAnswerId, answers, pageId, determineNextPage]
  );

  useEffect(() => {
    if (nextPageId) {
      prefetch(nextPageId.startsWith('/') ? nextPageId : `/${nextPageId}`);
    }
  }, [nextPageId, prefetch]);

  useEffect(() => {
    if (selectedAnswerId) {
      setTimeout(goToNextPage, 300); // delay for better UX
    }
  }, [selectedAnswerId, goToNextPage]);

  useEffect(() => {
    setHeaderProgress((pageConfig.pageData?.headerProgress as number) || 0);
  }, []);

  return {
    pageId,
    title,
    answers,
    pageData,
    selectedAnswerId,
    handleAnswerSelect,
    goToNextPage,
  };
};
