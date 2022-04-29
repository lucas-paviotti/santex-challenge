import { Product, Order } from '../types';
import { formatter } from '../utils/Utils';
import {
  ProductCardStyled,
  ProductCardImageContainerStyled,
  ProductCardPriceStyled,
} from './styles/ProductCard.styled';
import { ButtonStyled } from './styles/Button';
import { GrCart } from 'react-icons/gr';
import { GET_ACTIVE_ORDER } from '../graphql/queries';
import { ADD_ITEM_TO_ORDER } from '../graphql/mutations';
import { useMutation } from '@apollo/client';
import { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

export function ProductCard(props: Product) {
  const { setOrder } = useContext(OrderContext);

  const [addItemToOrder] = useMutation<
    { addItemToOrder: Order },
    { productVariantId: number | string; quantity: number }
  >(ADD_ITEM_TO_ORDER, {
    variables: { productVariantId: Number(props.variants[0].id), quantity: 1 },
    onCompleted(data) {
      if (data) {
        setOrder(data.addItemToOrder);
      }
    },
    refetchQueries: [
      { query: GET_ACTIVE_ORDER }
    ],
  });

  return (
    <ProductCardStyled>
      <ProductCardImageContainerStyled>
        <img src={props.assets[0].preview} alt={props.name} />
      </ProductCardImageContainerStyled>
      <ButtonStyled onClick={() => addItemToOrder()}>
        <GrCart />
        <span>Add to cart</span>
      </ButtonStyled>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <ProductCardPriceStyled>
        {formatter.format(props.variants[0].price)}
      </ProductCardPriceStyled>
    </ProductCardStyled>
  );
}
