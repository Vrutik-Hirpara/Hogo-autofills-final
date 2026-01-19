import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import HomeHero from "../components/HomeHero";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeHero />,
        
      },

    ],
  },
]);
