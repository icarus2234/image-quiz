import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { quizConfig, quizMetadata } from '@/helpers';
import { EndTemplate } from '@/modules/end/templates/end';

export const metadata: Metadata = quizMetadata;

export default function EndPage() {
  const pageConfig = quizConfig.pages.find(({ id }) => id === 'end-without-image');

  if (!pageConfig) {
    return notFound();
  }

  return <EndTemplate pageConfig={pageConfig} />;
}
