'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import css from './NoteDetails.module.css';

function NoteDetailsClient() {
  const { id } = useParams<{ id: string }>();

  const { data: note, isSuccess } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
    throwOnError: true,
  });

  if (!isSuccess) {
    return null;
  }

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>
        <p className={css.tag}>{note.tag}</p>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>
          {new Date(note.createdAt).toLocaleString('en-US', {
            timeZone: 'UTC',
          })}
        </p>
      </div>
    </div>
  );
}

export default NoteDetailsClient;
