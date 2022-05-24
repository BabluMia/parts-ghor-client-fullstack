import React from 'react';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Banner from './Banner';
import ExtraOne from './ExtraOne';
import ExtraTwo from './ExtraTwo';
import Products from './Products';
import ReviewSlider from './ReviewSlider';
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
            {/* extra two */}
            <ExtraTwo/>
            {/* slider */}
            <ReviewSlider/>
            {/* footer */}
            <Footer/>
        </div>
    );
};

export default Home;