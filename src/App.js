import './App.css';

import { Routes,Route } from 'react-router-dom';
import { createGlobalState } from 'react-hooks-global-state';
import Main from './components/Main';
import Login from './components/Login';
import SignIn from './components/SignIn';
import PostDetails from './components/PostDetails';
const {useGlobalState} = createGlobalState({
  defaultLanguageItem : 0  
});
export {useGlobalState};


function App() {

  return (

    <>
      <Routes>
          <Route path='/' element={ <Main/>}/>
          <Route path='/login/' element={ <Login/>}/>
          <Route path='/sign_in/' element={ <SignIn/>}/>
          <Route path='/post_details/' element={ <PostDetails/>}/>
      </Routes>
     
    </>
  );
}

export default App;
