import React from 'react';
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import './CarouselPage.css';
const CarouselPage = () => {
    return (
        <div className="carouselStyle">
            <h1>Here are some of <span>our works</span></h1>
            <div id="carouselExampleIndicators" class="carousel slide d-black" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={carousel1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={carousel2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={carousel3} class="d-block w-100" alt="..." />
                    </div>
                </div>
                {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a> */}
            </div>
        </div>
    );
};

export default CarouselPage;