import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightMode } from './themes/themes';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home';
const Body = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
  overflow-x: hidden;
`

function App() {
  return (
    <>
      <ThemeProvider theme={lightMode}>
          <Navbar/>
          <Body>
            <Home />
          </Body>

      </ThemeProvider>
    </>
  );
}

export default App;
