import React from "react";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Videos />,
    children: [
      {
        path: "/videos/query",
        element: <Videos />,
      },
    ],
  },
]);

export default function () {
  return (
    <div>
      <p>asd</p>
    </div>
  );
}
