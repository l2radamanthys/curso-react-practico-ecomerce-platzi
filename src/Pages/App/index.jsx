import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import { SignUp } from "../SignUp";
import { SignOut } from "../SignOut";
import "./App.css";
import { useAuth } from "../../Hooks/useAuth";

const AppRoutes = ({ logIn, logOut, addAccount, user }) => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/clothes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/furnitures", element: <Home /> },
    { path: "/toys", element: <Home /> },
    { path: "/othes", element: <Home /> },
    { path: "/my-account", element: <MyAccount activeUser={user} /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn logIn={logIn} /> },
    { path: "/sign-up", element: <SignUp addAccount={addAccount} /> },
    { path: "/sign-out", element: <SignOut logOut={logOut} /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  const auth = useAuth();

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes {...auth} />
        <Navbar activeUser={auth.user} />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
