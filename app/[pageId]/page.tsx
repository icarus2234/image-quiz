import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { quizConfig } from '@/helpers';
import { quizMetadata } from '@/helpers/metadata-content';
import { QuizPageTemplate } from '@/modules/quiz/templates/quiz-page';

export const metadata: Metadata = quizMetadata;

interface QuizPageProps {
  params: {
    pageId: string;
  };
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { pageId } = params;

  const pageConfig = quizConfig.pages.find(({ id }) => id === pageId);

  if (!pageConfig) {
    return notFound();
  }

  return <QuizPageTemplate pageConfig={pageConfig} />;
}
