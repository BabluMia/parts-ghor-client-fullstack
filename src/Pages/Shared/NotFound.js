import React from 'react';
import Footer from './Footer';
import Header from './Header';


const NotFound = () => {
    return (
        <>
        <Header/>
        <div className=' h-screen grid items-center justify-center'>
            <img src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?t=st=1653230678~exp=1653231278~hmac=a039e99e25ccb24bedd32cccefa10b40567f62f49fa70c10dd6d789d6484c8b5&w=996" className='' alt="" />
        </div>
        <Footer/>
        </>
    );
};

export default NotFound;