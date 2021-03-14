import fs from 'fs/promises';
import path from 'path';

export default function ProductDetailPage(props) {
  console.log(props);
  return (
    <>
      <h1>TITLE</h1>
      <p>Description</p>
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
