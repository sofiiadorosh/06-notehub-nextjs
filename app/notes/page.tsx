import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

export const dynamic = 'force-dynamic';

async function NotesPage() {
  const search = '';
  const page = 1;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', search, page],
    queryFn: () => fetchNotes({ search, page }),
  });

  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesClient />
      </HydrationBoundary>
    </main>
  );
}

export default NotesPage;
