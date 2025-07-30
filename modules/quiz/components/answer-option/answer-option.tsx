import classNames from 'classnames';
import { FC } from 'react';

import styles from './answer.module.css';

interface AnswerOptionProps {
  id: string;
  answerText?: string;
  isSelected: boolean;
  handleAnswerSelect: (id: string) => void;
}

export const AnswerOption: FC<AnswerOptionProps> = ({
  id,
  answerText,
  isSelected,
  handleAnswerSelect,
}) => {
  const answerStyles = classNames(styles.answerOption, {
    [styles.selected]: isSelected,
  });

  const onSelect = () => {
    handleAnswerSelect(id);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect();
    }
  };

  return (
    <div className={styles.answerOptionContainer}>
      <label className={answerStyles} tabIndex={1} onKeyDown={handleKeyDown}>
        <input
          type="radio"
          id={`answer-${id}`}
          name="quiz-answer"
          checked={isSelected}
          onChange={onSelect}
          className={styles.radioInput}
        />
        <span className={styles.radioText}>{answerText}</span>
      </label>
    </div>
  );
};
