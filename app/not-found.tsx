import { Metadata } from 'next';
import Link from 'next/link';

import { notFoundMetaDataContent } from '@/helpers';
import { Typography } from '@/modules/layout/typography';

export const metadata: Metadata = notFoundMetaDataContent;

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="heading1">404 - Page Not Found</Typography>
      <Typography>Sorry, the page you are looking for does not exist.</Typography>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
