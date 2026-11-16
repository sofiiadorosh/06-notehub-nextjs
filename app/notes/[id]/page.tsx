type NoteDetailsProps = {
  params: Promise<{ id: string }>;
};

const NoteDetails = async ({ params }: NoteDetailsProps) => {
  const { id } = await params;

  return <div>NoteDetails</div>;
};

export default NoteDetails;
