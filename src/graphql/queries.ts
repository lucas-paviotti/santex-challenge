import { gql } from '@apollo/client';

export const ORDER_FRAGMENT = gql`
  fragment ActiveOrder on Order {
    id
    subTotal
    lines {
      id
      quantity
      unitPrice
      linePrice
      productVariant {
        id
        name
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query {
    products(options: {
      take:12
    }) {
      items {
        id
        name
        description
        assets {
          preview
        }
        variants {
          id
          price
        }
      }
    }
  }
`;

export const GET_ACTIVE_ORDER = gql`
  {
    activeOrder {
      ...ActiveOrder
    }
  }
  ${ORDER_FRAGMENT}
`;