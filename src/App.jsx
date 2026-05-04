import { Outlet } from "react-router-dom";
import DemoBanner from "./components/DemoBanner";

function App() {
  return (
    <>
      <DemoBanner />
      <Outlet />
    </>
  );
}

export default App;