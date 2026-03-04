import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import Root from './routes/Root';
import ErrorPage from './components/ErrorPage';
import Movies from './routes/Movies';
import MovieDetail, { loader as detailLoader } from './routes/MovieDetail';
import Login from './routes/Login';
import store from './app/store';

import './index.css';

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/movies/', element: <Movies /> },
      { path: '/movies/login', element: <Login /> },
      { path: '/movies/:id', element: <MovieDetail />, loader: detailLoader },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />,
  </Provider>,
);
