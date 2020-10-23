import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import ViewLogo from '../ViewLogo/ViewLogo';
import ServicesData from '../Services/Services/ServicesData';
import CarouselPage from '../Carousel/CarouselPage';
import Feedback from '../Feedback/Feedback';

const Header = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <ViewLogo></ViewLogo>
            <ServicesData></ServicesData>
            <CarouselPage></CarouselPage>
            <Feedback></Feedback>
        </div>
    );
};

export default Header;