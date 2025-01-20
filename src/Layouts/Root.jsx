import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className=''>
            <Outlet ></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;