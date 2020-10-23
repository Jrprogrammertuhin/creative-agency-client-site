import React from 'react';
import ShowServices from '../ShowServices/ShowServices'; 
import '../Services.css';
const courses = [
    {
        pic: 'service1.png',
        name: 'Web & mobile Design',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam temporibus nemo saepe adipisci optio tempora ea magnam porro. Voluptatum perspiciatis quibusdam vel exercitationem, possimus temporibus quis in maxime totam quasi.',
    },
    {
        pic: 'service2.png',
        name: 'Graphic Design',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam temporibus nemo saepe adipisci optio tempora ea magnam porro. Voluptatum perspiciatis quibusdam vel exercitationem, possimus temporibus quis in maxime totam quasi.',
    }, {
        pic: 'service3.png',
        name: 'Web Development',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam temporibus nemo saepe adipisci optio tempora ea magnam porro. Voluptatum perspiciatis quibusdam vel exercitationem, possimus temporibus quis in maxime totam quasi.',
    }
]
const ServicesData = () => {
    const carda = () => {
        // console.log("card is click ")
    }
    return (
        <div className="container">
            <div onClick={carda} className='row'>
                {
                    courses.map(course => <ShowServices course={course}></ShowServices>)
                }
            </div>
        </div>
    );
};

export default ServicesData;