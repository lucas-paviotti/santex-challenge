import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';
import { ProductCard } from './ProductCard';
import { Product, ProductData } from '../types';
import { ProductListStyled } from './styles/ProductList.styled';
import { SpinnerStyled } from './styles/Spinner.styled';

export function ProductList() {
  const { loading, data } = useQuery<ProductData>(GET_PRODUCTS);

  if (loading) return <SpinnerStyled src="/Spinner-1s-200px.gif" alt="Spinner" />;

  return (
    <ProductListStyled>
      {data &&
        data.products.items.map((item: Product) => {
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
