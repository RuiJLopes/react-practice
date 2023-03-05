import { Outlet } from "react-router-dom";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <div>
      <Layout />
      <Outlet />
    </div>
  );
}

export default App;
