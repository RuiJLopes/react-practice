import MainNavigation from "./components/layout/MainNavigation";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <MainNavigation />
      <Outlet />
    </div>
  );
}

export default App;
