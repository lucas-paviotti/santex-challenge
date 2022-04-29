import { MockedProvider } from '@apollo/client/testing';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { ProductList } from './components/ProductList';
import { GET_PRODUCTS } from './graphql/queries';
import { ThemeProvider } from 'styled-components';
import { Theme } from './components/styles/Theme.styled';
import { ProductCard } from './components/ProductCard';

const mockProducts: any[] = [
  {
    request: {
      query: GET_PRODUCTS,
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
      <ThemeProvider theme={Theme}>
        <MockedProvider mocks={mockProducts} addTypename={false}>
          <ProductList />
        </MockedProvider>
      </ThemeProvider>
    );
    await waitForElementToBeRemoved(() => screen.getByAltText('Spinner'));
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
  it('renders product card', async () => {
    render(
      <ThemeProvider theme={Theme}>
        <MockedProvider mocks={mockProducts} addTypename={false}>
            <ProductCard 
              key={mockProducts[0].result.data.products.items[0].id}
              id={mockProducts[0].result.data.products.items[0].id}
              description={mockProducts[0].result.data.products.items[0].description}
              name={mockProducts[0].result.data.products.items[0].name}
              assets={mockProducts[0].result.data.products.items[0].assets}
              variants={mockProducts[0].result.data.products.items[0].variants}
            />
        </MockedProvider>
      </ThemeProvider>
    );
    await new Promise((resolve) => setTimeout(resolve, 0));
    screen.getByAltText('Laptop')
    screen.getAllByText(/Laptop/i)
    screen.getByText(/Intel/i)
    screen.getByText('$139,900.00')
    screen.debug()
  });
});