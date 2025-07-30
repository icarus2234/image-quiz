import type { Metadata } from 'next';

import { homePageMetaDataContent } from '@/helpers';
import { quizConfig } from '@/helpers';
import { HomeTemplate } from '@/modules/home/templates/home-template';

export const metadata: Metadata = homePageMetaDataContent;

export default async function HomePage() {
  return <HomeTemplate quizConfig={quizConfig} />;
}
