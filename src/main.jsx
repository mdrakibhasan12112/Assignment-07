import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import RootLayout from './layout/RootLayout';
import HomePage from './components/HomePage/HomePage';
import Timeline from './components/Timeline/Timeline';
import Stats from './components/Stats/Stats';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element:<HomePage></HomePage>
      },
      {
        path: '/timeline',
        element:<Timeline></Timeline>
      },
      {
        path: '/stats',
        element:<Stats></Stats>
      }
    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
