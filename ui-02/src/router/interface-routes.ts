import React, { lazy } from "react";

interface Routes {
  root: string;
  // dashboard: string;
  page: (id: string) => string;
  error404: string;
}

export const routesApp: Routes = {
  root: "/",
  // dashboard: "/dashboard",
  page: (id: string) => `/page/${id}`,
  error404: "*",
};

// Lazy Page Components
export const LazyHomePage: React.LazyExoticComponent<React.FC<{}>> = lazy(
  () => import("../pods/home/home-page.component"),
); // with 'export default'
