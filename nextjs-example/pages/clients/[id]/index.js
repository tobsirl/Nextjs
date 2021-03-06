import { useRouter } from 'next/router';

export default function ClientProjectsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    // load data
    router.push('/clients/001/projecta');
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <h3>{router.query.id}</h3>
      <button onClick={loadProjectHandler}>Load Project</button>
    </div>
  );
}
