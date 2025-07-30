'use client';
import { FC } from 'react';

import { QuizPage, replaceTemplatePlaceholders } from '@/helpers';
import { Button } from '@/modules/layout/button';
import { Typography } from '@/modules/layout/typography';
import { AnswerContainer } from '@/modules/quiz/components/answer-container';
import { useQuizPage } from '@/modules/quiz/hooks/use-quiz-page';

import styles from './quiz-page.module.css';

interface QuizPageTemplateProps {
  pageConfig: QuizPage;
}

export const QuizPageTemplate: FC<QuizPageTemplateProps> = ({ pageConfig }) => {
  const { title, answers, pageData, selectedAnswerId, handleAnswerSelect, goToNextPage } =
    useQuizPage(pageConfig);

  return (
    <div className={styles.container}>
      <Typography variant="heading1" className="mb-32">
        {replaceTemplatePlaceholders(title, pageData as Record<string, string> | undefined)}
      </Typography>
      {answers.length ? (
        <AnswerContainer
          answers={answers}
          selectedAnswerId={selectedAnswerId}
          handleAnswerSelect={handleAnswerSelect}
          pageData={pageData as Record<string, string> | undefined}
        />
      ) : (
        <Button
          style={{
            marginTop: '24px',
          }}
          onClick={goToNextPage}
        >
          Next
        </Button>
      )}
    </div>
  );
};
