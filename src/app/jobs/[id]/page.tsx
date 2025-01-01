export default function JobDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Job Detail Page: {params.id}</h1>
    </div>
  );
} 