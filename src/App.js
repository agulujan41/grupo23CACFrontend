import './App.css';

import { Routes,Route } from 'react-router-dom';
import { createGlobalState } from 'react-hooks-global-state';
import Main from './components/Main';
import PostDetails from './components/PostDetails';
import Authentication from './components/Authentication';
const {useGlobalState} = createGlobalState({
  defaultLanguageItem : 0  
});
export {useGlobalState};


function App() {

  return (

    <>
      <Routes>
          <Route path='/' element={ <Main/>}/>
          <Route path='/login/' element={ <Authentication type="login"/>}/>
          <Route path='/sign_in/' element={ <Authentication type="sign_in"/>}/>
          <Route path='/post_details/' element={ <PostDetails/>}/>
      </Routes>
     
    </>
  );
}

export default App;
