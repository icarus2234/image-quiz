import { FC } from 'react';

import type { Answer } from '@/helpers';
import { replaceTemplatePlaceholders } from '@/helpers/utils';

import { AnswerOption } from '../answer-option';
import styles from './answer-container.module.css';

interface AnswerContainerProps {
  answers: Answer[];
  handleAnswerSelect: (id: string) => void;
  pageData?: Record<string, string>;
  selectedAnswerId: string | null;
}

export const AnswerContainer: FC<AnswerContainerProps> = ({
  answers,
  handleAnswerSelect,
  selectedAnswerId,
  pageData,
}) => {
  return (
    <div className={styles.answerContainer}>
      {answers.map(({ label, id }) => (
        <AnswerOption
          key={id}
          id={id}
          answerText={replaceTemplatePlaceholders(label, pageData)}
          isSelected={selectedAnswerId === id}
          handleAnswerSelect={handleAnswerSelect}
        />
      ))}
    </div>
  );
};
