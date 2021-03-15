import fs from 'fs/promises';
import path from 'path';

export default function ProductDetailPage(props) {
  const { title, description } = props.product;

  if(!title) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.productId;

  const filePath = path.join(process.cwd(), 'static', '../dummy-backend.json');
  const response = await fs.readFile(filePath);
  const data = await JSON.parse(response);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { productId: 'p1' } },
      { params: { productId: 'p2' } },
      { params: { productId: 'p3' } },
    ],
    fallback: 'blocking',
  };
}
