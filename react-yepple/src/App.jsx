import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "@routes/router";

import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
