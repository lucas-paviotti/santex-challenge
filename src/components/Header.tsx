import { HeaderStyled } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { formatter } from '../utils/Utils';
import { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

export function Header() {
  const { updatedOrder } = useContext(OrderContext);

  return (
    <HeaderStyled>
      <Container>
        <img
          src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
          alt="logo"
        />
        <div>{formatter.format(updatedOrder.subTotal)}</div>
      </Container>
    </HeaderStyled>
  );
}
