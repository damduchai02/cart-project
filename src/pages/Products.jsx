import { ProductsContainer } from '../components';
import { customFetch } from '../utils';

const url = '/products';

function Products() {
  return <ProductsContainer />;
}

export async function loader() {
  const res = await customFetch.get(url);
  const products = res.data;

  return products;
}

export default Products;
