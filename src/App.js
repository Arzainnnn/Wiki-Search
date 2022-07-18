import { createContext, useReducer, useState } from "react"; // CALLING FROM PACKAGE
import { useRoutes } from "react-router-dom"; // CALLING FROM PACKAGE
import { InternalRoutes } from "./pages/Routes"; // CALLING FROM PAGES
import { usePreLoader } from "./hooks/use-PreLoader"; // CALLING FROM HOOKS
import { Reducer, initialState } from "./store/AppReducer"; // CALLING FROM STORE(AppReducer)..
import { PreLoader } from "./components/UI/PreLoader"; // CALLING FROM UI
import { NavBar } from "./components/UI/NavBar"; // CALLING FROM UI
import { Footer } from "./components/UI/Footer"; // CALLING FROM UI
import ReactSwitch from "react-switch"; // CALLING FROM PACKAGE
import "./styles/Mode.css"; // CALLING FROM STYLES

export const AppContext = createContext(initialState); // USED TO CREATE A GLOBAL STATE WHICH CAN BE USED IN ANY COMPONENTS..
export const App = () => {
  const [Theme, setTheme] = useState("light");
  const [searchResults, dispatch] = useReducer(Reducer, initialState); // (useReducer): 1) DESTRUCTING AS (useState) 2) 2 ARGS FUNCTION AND INITIAL-STATE..
  const PreLoading = usePreLoader(); // (PreLoading) CUSTOM HOOK..
  const ResultingData = (res) => {
    dispatch({ type: "SETSEARCHRESULTS", payload: res });
  };
  const DataResults = [searchResults.searchResults, ResultingData];
  const element = useRoutes(InternalRoutes); // IT TELLS WHAT SHOULD BE DISPLAYED IN (Url-bar) WITH RESPECT TO PAGES..
  const ToggleThemeHandler = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>
      {PreLoading ? (
        <PreLoader /> // (PreLoader) WHICH WAS BEEN OUT-SOURCED..
      ) : ( // GETTING AND PROVIDING DATA VALUES..
        <AppContext.Provider value={DataResults}>
          <div id={Theme}>
            <div className="Toggler">
              <label className="labelmode">
                {Theme === "light" ? "Light Mode ☀" : "Dark Mode 🌙"}
              </label>
              <ReactSwitch
                onChange={ToggleThemeHandler}
                checked={Theme === "dark"}
              />
            </div>
            <NavBar />
            {element}
            <Footer />
          </div>
        </AppContext.Provider>
      )}
    </>
  );
};