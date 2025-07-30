import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { quizConfig, quizMetadata } from '@/helpers';
import { GetImageTemplate } from '@/modules/get-image/templates/get-image';

export const metadata: Metadata = quizMetadata;

export default function GetImagePage() {
  const pageConfig = quizConfig.pages.find(({ id }) => id === 'get-image');

  if (!pageConfig) {
    return notFound();
  }

  return <GetImageTemplate pageConfig={pageConfig} />;
}
