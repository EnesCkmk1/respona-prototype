import { useEffect, useState } from "react";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
export default function App() {
  const [route, setRoute] = useState(window.location.hash);
  useEffect(() => {
    const update = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  return route.startsWith("#/dashboard") ? <DashboardPage /> : <HomePage />;
}
