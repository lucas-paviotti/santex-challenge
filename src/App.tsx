import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/Global.styled';
import { Theme } from './components/styles/Theme.styled';
import { Container } from './components/styles/Container.styled';
import { OrderProvider } from './context/OrderProvider';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <OrderProvider>
        <Header />
        <Container>
          <ProductList></ProductList>
        </Container>
      </OrderProvider>
    </ThemeProvider>
  );
}

export default App;
