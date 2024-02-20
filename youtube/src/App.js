import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "home",
        element: <Home />,
        children: [
          {
            path: "products",
            element: <p>프러닥츠</p>,
          },
          {
            path: "customers",
            element: <p>커스토머</p>,
          },
        ],
      },
      {
        path: "/videos",
        element: <Videos />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
