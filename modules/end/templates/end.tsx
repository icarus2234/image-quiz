'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

import { imageFilePathKey, localFileStorage, QuizPage, Routes } from '@/helpers';
import { Button } from '@/modules/layout/button';
import { Typography } from '@/modules/layout/typography';
import { useQuizPage } from '@/modules/quiz/hooks/use-quiz-page';
import { useQuizStore } from '@/store';

import styles from './end.module.css';

interface EndTemplateProps {
  pageConfig: QuizPage;
}

export const EndTemplate: FC<EndTemplateProps> = ({ pageConfig }) => {
  const { pageId, title } = useQuizPage(pageConfig);
  const { setHeaderProgress } = useQuizStore();

  const { push } = useRouter();

  const filePath = localFileStorage.get(imageFilePathKey);

  const handleEndQuiz = () => {
    push(Routes.Home);
    localFileStorage.clear();
    setHeaderProgress(0);
  };

  const pageWithImage = pageId === 'end-with-image';

  return (
    <div className={styles.endContainer}>
      <span className={styles.emoji}>{pageWithImage ? '🎉' : '👋'}</span>
      <Typography variant="heading1" className="mb-32">
        {title}
      </Typography>
      {pageWithImage && filePath && (
        <Image
          src={filePath}
          width={608}
          height={528}
          alt="User Image"
          layout="responsive"
          style={{ width: '100%', height: 'auto', marginBottom: '32px' }}
        />
      )}
      <Button onClick={handleEndQuiz}>Try again</Button>
    </div>
  );
};
