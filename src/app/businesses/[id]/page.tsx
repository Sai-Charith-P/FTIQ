export default function BusinessDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Business Detail Page: {params.id}</h1>
    </div>
  );
} 