// import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider} from 'react-router-dom';

import './index.css';
import router from './Routers/Routes';
import { StrictMode } from 'react';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';


ReactDOM.createRoot(document.getElementById("root")).render(
 <div className='max-w-7xl mx-auto bg-white'>
   <StrictMode>
    <FirebaseProvider>
    <RouterProvider router={router} />
    </FirebaseProvider>
  
  </StrictMode>
 </div>
);
