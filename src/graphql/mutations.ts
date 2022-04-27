import { gql } from '@apollo/client';
import { ORDER_FRAGMENT } from './queries';


export const ADD_ITEM_TO_ORDER = gql`
  mutation addItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ...ActiveOrder
    }
  }
  ${ORDER_FRAGMENT}
`;