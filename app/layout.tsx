import type { Metadata } from 'next';
import 'modern-normalize';
import './globals.css';

export const metadata: Metadata = {
  title: '06-notehub-nextjs',
  description: 'NoteHub Homework Application built with Next.js',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
