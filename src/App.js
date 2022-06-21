import { useRoutes } from "react-router-dom";
import { InternalRoutes } from "./pages/Routes";
import { Footer } from "./components/Footer";
import { NavBar } from "./pages/NavBar";
import "./styles/App.css";

export const App = () => {
  const element = useRoutes(InternalRoutes);
  return (
    <>
      {/* inner elements which need to be called from the router */}
      <NavBar />
      {element}
      <Footer />
    </>
  );
};
