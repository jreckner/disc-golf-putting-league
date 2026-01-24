import { lazy } from 'react';
import { Route, Routes } from 'react-router';

// Lazy load the optional components to improve initial load time
const HomePage = lazy(() => import('@/pages/home'));

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path='/' />
    </Routes>
  );
}

export default App;
