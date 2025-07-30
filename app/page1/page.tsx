import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { quizConfig } from '@/helpers';
import { getUserData } from '@/helpers/fetch-instance';
import { quizMetadata } from '@/helpers/metadata-content';
import { QuizPageTemplate } from '@/modules/quiz/templates/quiz-page';

export const metadata: Metadata = quizMetadata;

export default async function QuizPageWithUserData() {
  const pageConfig = quizConfig.pages.find(({ id }) => id === 'page1');

  if (!pageConfig) {
    return notFound();
  }

  const apiData = await getUserData();

  return (
    <QuizPageTemplate
      pageConfig={{ ...pageConfig, pageData: { ...apiData, ...pageConfig.pageData } }}
    />
  );
}
