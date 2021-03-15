import fs from 'fs/promises';
import path from 'path';

export default function ProductDetailPage(props) {
  const { title, description } = props.product;

  if (!title) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), 'static', '../dummy-backend.json');
  const response = await fs.readFile(filePath);
  const data = await JSON.parse(response);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.productId;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);

  const pathWithParams = ids.map((id) => ({ params: { productId: id } }));

  return {
    paths: pathWithParams,
    fallback: false,
  };
}
