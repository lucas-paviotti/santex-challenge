import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import { ProductList } from './components/ProductList';
import { getProducts } from './graphql/queries';

const mocks: any[] = [
  {
    request: {
      query: getProducts,
    },
    result: {
      data: {
        products: {
          items: [
            {
              assets: [
                {
                  preview:
                    'https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg',
                },
              ],
              description:
                'Now equipped with seventh-generation Intel Core processors, Laptop',
              id: '1',
              name: 'Laptop',
              variants: [
                {
                  price: 139900,
                },
              ],
            },
          ],
        },
      },
    },
  },
];

describe('ProductList', () => {
  it('renders list of products', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ProductList />
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));
    
    expect(screen.getByText('Laptop')).toBeInTheDocument();
  });
});
