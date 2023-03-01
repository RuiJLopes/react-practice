import { Route, Routes } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <AllMeetUpsPage />
    </div>
  );
}

export default App;
