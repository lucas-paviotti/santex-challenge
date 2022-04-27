import { HeaderStyled } from './styles/Header.styled';
import { Container } from './styles/Container.styled';

export function Header() {
  return (
    <HeaderStyled>
      <Container>
        <img
          src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
          alt="logo"
        />
        <div>$ 0</div>
      </Container>
    </HeaderStyled>
  );
}
