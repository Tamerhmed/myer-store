import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';

export default async function HomePage() {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <h1>home page</h1>
      <ProductList data={latestProducts} title='Newest Arrivals' limit={4} />
    </>
  );
}
