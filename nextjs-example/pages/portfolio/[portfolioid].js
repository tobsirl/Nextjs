import { useRouter } from 'next/router';

export default function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query.portfolioid);

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
      {router.pathname} --- {router.query.portfolioid}
    </div>
  );
}
