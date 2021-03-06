import { useRouter } from 'next/router';
export default function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
      <h3>{`This is the path: ${router.pathname}`}</h3>
      <h3>{`This is the ID: ${router.query.clientprojectid}`}</h3>
    </div>
  );
}
