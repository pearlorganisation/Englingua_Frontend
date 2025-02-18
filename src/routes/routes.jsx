import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Layout from "../components/Layout/Layout";
import About from "../pages/About/About";
import UnlockPotentials from "../components/UnlockPotentials/UnlockPotentialsSection";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  
  },

  {
    path:"/unlock-potentials",
    element:<UnlockPotentials/>
  }
]);

export default Routes;
