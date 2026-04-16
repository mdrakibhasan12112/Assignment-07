import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import RootLayout from './layout/RootLayout';
import HomePage from './components/HomePage/HomePage';
import Timeline from './components/Timeline/Timeline';
import Stats from './components/Stats/Stats';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friends from './components/Friends/Friends';
import FriendTimelineProvider from './context/FriendTimelineProvider';
import NotFound from './components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },

      {
        path: '/friend/:id',
        element: <FriendDetails></FriendDetails>,
      },
      {
        path: '/timeline',
        element: <Timeline></Timeline>,
      },
      {
        path: '/stats',
        element: <Stats></Stats>,
      },
    ],
    errorElement:<NotFound></NotFound>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendTimelineProvider>
      <RouterProvider router={router} />
    </FriendTimelineProvider>
  </StrictMode>,
);
