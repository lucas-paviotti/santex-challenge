import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/Global.styled';
import { Theme } from './components/styles/Theme.styled';
import { Container } from './components/styles/Container.styled';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <ProductList></ProductList>
      </Container>
    </ThemeProvider>
  );
}

export default App;
