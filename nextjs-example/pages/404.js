import { useRouter } from 'next/router';
export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div>
      <h1>404</h1>
      <h3>{`Could not find page at ${router.asPath}`}</h3>
    </div>
  );
}
