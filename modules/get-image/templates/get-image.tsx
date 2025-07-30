'use client';

import { FC, useEffect } from 'react';

import { QuizPage } from '@/helpers';
import { ImageDropzone } from '@/modules/get-image/components/image-dropzone';
import { Typography } from '@/modules/layout/typography';
import { useQuizPage } from '@/modules/quiz/hooks/use-quiz-page';

import { useFileUpload } from '../hooks/use-file-upload';

interface GetImageTemplateProps {
  pageConfig: QuizPage;
}

export const GetImageTemplate: FC<GetImageTemplateProps> = ({ pageConfig }) => {
  const { title, goToNextPage } = useQuizPage(pageConfig);
  const { handleFileUpload, isFileUploading, isFileUploaded, error } = useFileUpload();

  const handleDrop = (acceptedFiles: File[]) => {
    if (!acceptedFiles?.length) return;

    handleFileUpload(acceptedFiles[0]);
  };

  useEffect(() => {
    if (isFileUploaded) {
      goToNextPage();
    }
  }, [isFileUploaded, goToNextPage]);

  return (
    <>
      <Typography variant="heading1" className="mb-32">
        {title}
      </Typography>
      <ImageDropzone isFileUploading={isFileUploading} onDrop={handleDrop} error={error} />
    </>
  );
};
