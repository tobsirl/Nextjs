import { useRouter } from 'next/router';

export default function ClientProjectsPage() {
  const router = useRouter();
  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <h3>{router.query.id}</h3>
    </div>
  );
}
