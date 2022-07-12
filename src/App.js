import { createContext, useReducer, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { InternalRoutes } from "./pages/Routes";
import RingLoader from "react-spinners/RingLoader";
import { NavBar } from "./components/UI/NavBar";
import { Footer } from "./components/UI/Footer";
import "./styles/App.css";

const initialState = {
  searchResults: null,
};

export const AppContext = createContext(initialState); // USED TO CREATE A GLOBAL STATE WHICH CAN BE USED IN ANY COMPONENTS..

export const reducer = (state, action) => {
  if (action.type === "SETSEARCHRESULTS") {
    return {
      ...state,
      searchResults: action.payload,
    };
  }
  return initialState;
};

export const App = () => {
  const [searchResults, dispatch] = useReducer(reducer, initialState); // usereducer: 1) DESTRUCTING AS usestate 2) 2 ARGS FUNCTION AND INITIALSTATE..
  const [PreLoading, setPreLoading] = useState(false); 

  useEffect(() => {
    setPreLoading(true);
    setTimeout(() => {
      setPreLoading(false);
    }, 2000);
  }, []);

  const ResultingData = (res) => {
    dispatch({ type: "SETSEARCHRESULTS", payload: res });
  };

  const DataResults = [searchResults.searchResults, ResultingData];

  const element = useRoutes(InternalRoutes); // IT TELLS WHAT SHOULD BE DISPLAYED IN (Url-bar) WITH RESPECT TO PAGES..

  return (
    <>
      {PreLoading ? ( // PRELOADER IN STATRTING OF APPLICATION..
        <div className="PreLoading">
          <RingLoader color={"#27659a"} loading={PreLoading} size={70} />
          <p>Loading....</p>
        </div>
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
