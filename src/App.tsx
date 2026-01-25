import { lazy } from 'react';
import { Route, Routes } from 'react-router';

// Lazy load the optional components to improve initial load time
const HomePage = lazy(() => import('@/pages/home'));
const ResultsPage = lazy(() => import('@/pages/results'));

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path='/' />
      {/* TODO: Protect route to view results page */}
      <Route element={<ResultsPage />} path='/results' />{' '}
    </Routes>
  );
}

export default App;
