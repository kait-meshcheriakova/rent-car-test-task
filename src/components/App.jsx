import { Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { Loader } from './Loader';
import Layout from 'SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Catalog = lazy(() => import('../pages/Catalog'));
const Favorite = lazy(() => import('../pages/Favorite'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path="/catalog"
          element={
            <Suspense fallback={<Loader />}>
              <Catalog />
            </Suspense>
          }
        />
        <Route
          path="/favorites"
          element={
            <Suspense fallback={<Loader />}>
              <Favorite />
            </Suspense>
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
