import fs from 'fs/promises';
import path from 'path';

export default function HomePage(props) {
  const { products } = props;
  console.log(products);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
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
