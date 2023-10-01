import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
