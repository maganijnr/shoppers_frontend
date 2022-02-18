import {BrowserRouter, Route, Routes} from 'react-router-dom' 

//Components
import AppBody from './components/AppBody';

//Pages
import Login from './pages/Login';

const App = () =>{
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route index element={<AppBody/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
