import fs from 'fs/promises';
import path from 'path';

import Link from 'next/link';
export default function HomePage(props) {
  const { products } = props;
  console.log(products);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'static', '../dummy-backend.json');
  const response = await fs.readFile(filePath);
  const data = await JSON.parse(response);

  return {
    props: {
      products: data.products,
    },
    revalidate: 120,
  };
}
