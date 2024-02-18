import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./components/Navbar";

import Home from "./pages/Home";
import Videos from "./pages/Videos";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "videos",
          element: <Videos />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
