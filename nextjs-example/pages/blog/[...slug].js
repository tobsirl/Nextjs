import { useRouter } from 'next/router';

export default function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query.slug[0]);
  return (
    <div>
      <h1>Blog Posts Page</h1>
    </div>
  );
}
