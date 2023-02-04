import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Error from './routes/Eroor';
//import { render } from '@testing-library/react';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error/>,
    children:[
      {
        /*contact es una ruta fija y contactid con los dos punto es una ruta dinamica */
        path: 'contact/:contactid',
        element: <Contact />
      }
    ]
  },
  {
    path: '/about',
    element: <About />,
  },
  // {
  //   path: '/contact',
  //   element: <Contact />,
  // }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement) 
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

