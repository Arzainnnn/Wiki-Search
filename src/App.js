import { createContext, useReducer } from "react"; // CALLING FROM PACKAGE
import { useRoutes } from "react-router-dom"; // CALLING FROM PACKAGE
import { InternalRoutes } from "./pages/Routes"; // CALLING FROM PAGES
import { usePreLoader } from "./hooks/use-PreLoader"; // CALLING FROM HOOKS
import { Reducer, initialState } from "./store/AppReducer"; // CALLING FROM STORE..
import { PreLoader } from "./components/UI/PreLoader"; // CALLING FROM UI
import { NavBar } from "./components/UI/NavBar"; // CALLING FROM UI
import { Footer } from "./components/UI/Footer"; // CALLING FROM UI

export const AppContext = createContext(initialState); // USED TO CREATE A GLOBAL STATE WHICH CAN BE USED IN ANY COMPONENTS..

export const App = () => {
  const [searchResults, dispatch] = useReducer(Reducer, initialState); // (useReducer): 1) DESTRUCTING AS (useState) 2) 2 ARGS FUNCTION AND INITIAL-STATE..
  
  const PreLoading = usePreLoader(); // (PreLoading) CUSTOM HOOK..

  const ResultingData = (res) => {
    dispatch({ type: "SETSEARCHRESULTS", payload: res });
  };

  const DataResults = [searchResults.searchResults, ResultingData];

  const element = useRoutes(InternalRoutes); // IT TELLS WHAT SHOULD BE DISPLAYED IN (Url-bar) WITH RESPECT TO PAGES..

  return (
    <>
      {PreLoading ? (
        <PreLoader /> // (PreLoader) WHICH WAS BEEN OUT-SOURCED..
      ) : (
        // GETTING AND PROVIDING DATA VALUES..
        <AppContext.Provider value={DataResults}>
          <NavBar />
          {element}
          <Footer />
        </AppContext.Provider>
      )}
    </>
  );
};





































// import { createContext, useState, useReducer } from "react";
// import { useRoutes } from "react-router-dom";
// import { InternalRoutes } from "./pages/Routes";
// import { NavBar } from "./pages/NavBar";
// import { Footer } from "./components/Footer";
// import "./styles/App.css";

// export const SearchResults = createContext(); // Used to create a global state which can be used in any components.......

// export const App = () => {
//   const [searchResults, setSearchResults] = useState(null);

//   const element = useRoutes(InternalRoutes); // IT TELLS WHAT SHOULD BE DISPLAYED IN Url BAR WITH RESPECT TO PAGE=========

//   const Provider = SearchResults.Provider; // (Optional: instead of using SearchResults.Provider to context i gave it to a variable which is holding provider)
//   return (
//     <>
//       <Provider value={[searchResults, setSearchResults]}>
//         <NavBar />
//         {element}
//       </Provider>
//       <Footer />
//     </>
//   );
// };

// useReducer...need to be implemented need to use dispatch

// const initialState = {
//   searchResults: [],
// };
// export const SearchResults = createContext(); // Used to create a global state which can be used in any components.......

// const reducerfun = (state, action) => {
//   if (action.type === "SET") {
//     return initialState.res ;
//   }
//   return initialState;
// };

// export const App = () => {
//   const [searchResults, setSearchResults] = useReducer(
//     reducerfun,
//     initialState
//   );

//   const ResultingData = (res) => {
//     setSearchResults({ type: "SET", payload: res });
//   };

//   const DataResults = {
//     searchResults: searchResults.searchResults,
//     dataItem: ResultingData,
//   };

//   const element = useRoutes(InternalRoutes); // IT TELLS WHAT SHOULD BE DISPLAYED IN Url BAR WITH RESPECT TO PAGE=========

//   return (
//     <>
//       <SearchResults.Provider value={DataResults}>
//         <NavBar />
//         {element}
//       </SearchResults.Provider>
//       <Footer />
//     </>
//   );
// };

// useReducer...need to be implemented need to use dispatch

// const Provider = ; // (Optional: instead of using SearchResults.Provider to context i gave it to a variable which is holding provider)

// export const SearchResults = createContext(); // Used to create a global state which can be used in any components.......

// export const App = () => {
//   const [searchResults, setSearchResults] = useState(null);

//   const element = useRoutes(InternalRoutes); // IT TELLS WHAT SHOULD BE DISPLAYED IN Url BAR WITH RESPECT TO PAGE=========

//   const Provider = SearchResults.Provider; // (Optional: instead of using SearchResults.Provider to context i gave it to a variable which is holding provider)
//   return (
//     <>
//       <Provider value={[searchResults, setSearchResults]}>
//         <NavBar />
//         {element}
//       </Provider>
//       <Footer />
//     </>
//   );
// };

// useReducer...need to be implemented need to use dispatch

// useReducer...need to be implemented need to use dispatch

// const Provider = ; // (Optional: instead of using SearchResults.Provider to context i gave it to a variable which is holding provider)
