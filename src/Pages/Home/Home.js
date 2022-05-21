import React from 'react';
import Header from '../Shared/Header';
import Banner from './Banner';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Products/>
        </div>
    );
};

export default Home;