import { Home } from "./Home";
import { AboutUs } from "./AboutUs";
import { Contactus } from "./Contactus";
import { ErrorPage } from "../components/UI/ErrorPage";
import { Result } from "./Result";

// TO NAVIGATE BETWEEN THE PAGES AND DISPLAY IT IN (Url-bar)..
export const InternalRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About-Us",
    element: <AboutUs />,
  },
  {
    path: "/Contactus",
    element: <Contactus />,
  },
  {
    path: "/detail/:pageid/:title/",
    element: <Result />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
