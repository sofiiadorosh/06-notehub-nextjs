'use client';

import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';

type Props = {
  error: Error;
};

function NotesError({ error }: Props) {
  return (
    <ErrorMessage
      message={`Could not fetch the list of notes. ${error.message}`}
    />
  );
}

export default NotesError;
