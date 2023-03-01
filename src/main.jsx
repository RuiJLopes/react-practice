import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/new-meetup",
    element: <NewMeetupPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
