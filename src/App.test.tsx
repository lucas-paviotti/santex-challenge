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
});