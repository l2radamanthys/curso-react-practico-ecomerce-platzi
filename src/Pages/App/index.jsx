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
import { AuthRequired } from "../../Components/AuthRequired";

const AppRoutes = ({ logIn, logOut, addAccount, user, isAuthenticated }) => {
  let routes = useRoutes([
    { path: "/", element: <Home isAuthenticated={isAuthenticated} /> },
    { path: "/clothes", element: <Home isAuthenticated={isAuthenticated} /> },
    {
      path: "/electronics",
      element: <Home isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/furnitures",
      element: <Home isAuthenticated={isAuthenticated} />,
    },
    { path: "/toys", element: <Home isAuthenticated={isAuthenticated} /> },
    { path: "/othes", element: <Home isAuthenticated={isAuthenticated} /> },
    {
      path: "/my-account",
      element: (
        <AuthRequired isAuthenticated={isAuthenticated}>
          <MyAccount activeUser={user} />
        </AuthRequired>
      ),
    },
    {
      path: "/my-order",
      element: (
        <AuthRequired isAuthenticated={isAuthenticated}>
          <MyOrder />
        </AuthRequired>
      ),
    },
    {
      path: "/my-orders",
      element: (
        <AuthRequired isAuthenticated={isAuthenticated}>
          <MyOrders />
        </AuthRequired>
      ),
    },
    {
      path: "/my-orders/last",
      element: (
        <AuthRequired isAuthenticated={isAuthenticated}>
          <MyOrder />
        </AuthRequired>
      ),
    },
    {
      path: "/my-orders/:id",
      element: (
        <AuthRequired isAuthenticated={isAuthenticated}>
          <MyOrder />
        </AuthRequired>
      ),
    },
    { path: "/sign-in", element: <SignIn logIn={logIn} /> },
    { path: "/sign-up", element: <SignUp addAccount={addAccount} /> },
    {
      path: "/sign-out",
      element: (
        <AuthRequired isAuthenticated={isAuthenticated}>
          <SignOut logOut={logOut} />
        </AuthRequired>
      ),
    },
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
        <Navbar activeUser={auth.user} isAuthenticated={auth.isAuthenticated} />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
