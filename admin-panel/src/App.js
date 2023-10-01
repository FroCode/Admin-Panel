import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import List from './pages/list/List.jsx';
import Single from './pages/single/Single.jsx';
import New from './pages/new/New.jsx';
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
        <Route path="user">
          <Route index element={<List/>} />
          <Route path=":userId" element={<Single/>} />
          <Route path=":userId" element={<New/>} />
        </Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
