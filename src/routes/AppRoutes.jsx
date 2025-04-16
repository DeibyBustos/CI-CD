import React from 'react';
import { Routes, Route } from 'react-router';
import Gallery from '../pages/Gallery';

const AppRoutes = ({ category }) => {
  return (
    <Routes>
      <Route path="/" element={<Gallery category={category} />} />
    </Routes>
  );
};

export default AppRoutes;
