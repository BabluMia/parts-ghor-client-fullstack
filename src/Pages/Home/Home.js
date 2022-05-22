import React from 'react';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Banner from './Banner';
import ExtraOne from './ExtraOne';
import Products from './Products';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Products/>

            {/* summary */}
            <Summary/>
            {/* extra one */}
            <ExtraOne/>
            {/* footer */}
            <Footer/>
        </div>
    );
};

export default Home;