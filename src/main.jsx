import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import AllMeetUpsPage from "./pages/AllMeetups";
import { FavoritesContextProvider } from "./store/favorites-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AllMeetUpsPage />,
      },
      {
        path: "/new-meetup",
        element: <NewMeetupPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <RouterProvider router={router} />
    </FavoritesContextProvider>
  </React.StrictMode>
);
