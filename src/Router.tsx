import React from 'react';
import { Routes, Route } from 'react-router';
import { HomeScreen, SecondScreen } from './Screen';

const Router = () => {
  return (
    <Routes>
      <Route index element={<HomeScreen />} />
      <Route path="/second-screen" element={<SecondScreen />} />
    </Routes>
  );
};

export default Router;
