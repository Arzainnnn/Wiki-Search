import { createContext } from "react";
import  { initialState } from "./AppReducer"; // CALLING FROM STORE

export const AppContext = createContext(initialState); // USED TO CREATE A GLOBAL STATE WHICH CAN BE USED IN ANY COMPONENTS..
