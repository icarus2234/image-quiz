'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';

import { QuizConfig } from '@/helpers';
import { Button } from '@/modules/layout/button';

interface HomeTemplateProps {
  quizConfig: QuizConfig;
}

export const HomeTemplate: FC<HomeTemplateProps> = ({ quizConfig }) => {
  const { push } = useRouter();

  const handleStart = () => {
    push(`/${quizConfig.pages[0].id}`);
  };

  return (
    <>
      <Button onClick={handleStart}>Start</Button>
    </>
  );
};
