import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightMode } from './themes/themes';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Info from './components/Info';
import { createGlobalState } from 'react-hooks-global-state';
const {useGlobalState} = createGlobalState({
  defaultLanguageItem : 0  
});
export {useGlobalState};
const Body = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
  overflow-x: hidden;
`

function App() {

  return (
    <>
      <ThemeProvider theme={lightMode}>
          <Navbar />
          <Body>
            <Home />
            <Info />
          </Body>

      </ThemeProvider>
    </>
  );
}

export default App;
