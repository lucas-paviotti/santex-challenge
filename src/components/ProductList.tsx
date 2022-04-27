import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';
import { ProductCard } from './ProductCard';
import { Product, ProductData } from '../types';
import { ProductListStyled } from './styles/ProductList.styled';

export function ProductList() {
  const { loading, data } = useQuery<ProductData>(GET_PRODUCTS);

  if (loading) return <p>Loading ...</p>;

  return (
    <ProductListStyled>
      {data && data.products.items.map((item: Product) => {
        return (
          <ProductCard
            key={item.id}
            id={item.id}
            description={item.description}
            name={item.name}
            assets={item.assets}
            variants={item.variants}
          />
        );
      })}
    </ProductListStyled>
  );
}
