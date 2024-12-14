import Main from "./Main";
import Catalog from "./Catalog";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Product from "./Product";
import Authorization from "./Authorization";
import About from "./About";
import LogIn from "./LogIn";
import Basket from "./Basket";
import Сompilation from './Сompilation';
import Podbor from './Podbor';
import CartContextProvider from "./contexts/CartContextProvider";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/authorization",
    element: <Authorization />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/enter",
    element: <LogIn />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/compilation",
    element: <Сompilation />,
  },
  {
    path: "/podbor",
    element: <Podbor />,
  },
]);

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;