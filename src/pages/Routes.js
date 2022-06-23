import { AboutUs } from "./AboutUs";
import { Contactus } from "./Contactus";
import { ErrorPage } from "./ErrorPage";
import { Home } from "./Home";
import { Result } from "./Result";

// to the navigate between the pages and display them in url bar
export const InternalRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:pageid/:title/",
    element: <Result />,
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
    path: "*",
    element: <ErrorPage />,
  },
];
// {
//   path: "/:pages",
//   element: <AboutUs />,
// },
// {
//   path: "/:pages",
//   element: <Contactus />,
// },