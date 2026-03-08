import React, { Suspense } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { LazyHomePage, routesApp } from "./interface-routes";
import { HomeLayout } from "../layouts";

interface PropsRoutes {
  key: number;
  path: string;
  element: JSX.Element;
}

//
const routes: PropsRoutes[] = [
  {
    key: -1,
    path: routesApp?.root,
    element: <LazyHomePage />,
  },
  ...Array.from({ length: 7 }, (_, index: number) => ({
    key: index,
    path: routesApp?.page(index.toString()),
    element: (
      <div className={`rootElement rootElement-${index}`}>Page nº {index}</div>
    ),
  })),
];

// Layout wrapper component
const LayoutWrapper: React.FC = () => (
  <HomeLayout>
    <Outlet />
  </HomeLayout>
);

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<strong>🌀 Loading...</strong>}>
      <Routes>
        <Route element={<LayoutWrapper />}>
          {routes.map((route: PropsRoutes) => (
            <Route key={route.key} path={route.path} element={route.element} />
          ))}

          <Route
            path={routesApp?.error404}
            element={<Navigate to={routesApp.root} />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
