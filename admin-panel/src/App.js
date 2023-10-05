import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import List from './pages/list/List.jsx';
import Single from './pages/single/Single.jsx';
import New from './pages/new/New.jsx';
import { useContext } from "react";
import "./style/dark.scss"
import { userInputs , productInputs } from "./formSource.js";
import { DarkModeContext } from "./context/darkModeContext";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path="users">
          <Route index element={<List/>} />
          <Route path=":userId" element={<Single/>} />
          <Route path="new" element={<New inputs={userInputs} title="Add New User " />} />
        </Route>
        <Route path="products">
          <Route index element={<List/>} />
          <Route path=":productId" element={<Single/>} />
          <Route path="new" element={<New inputs={productInputs} title="Add New Products" />} />
        </Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
