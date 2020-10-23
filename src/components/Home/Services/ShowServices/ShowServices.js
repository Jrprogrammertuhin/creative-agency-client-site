import React from 'react';
import a from '../../../../images/icons/service1.png'
import '../Services.css'
import { Link, useHistory } from 'react-router-dom';
const ShowServices = ({ course }) => {
    const history = useHistory();
    
    const services = () =>{
        history.push('/order')
    }
    return (
        

        <div class="col-sm-4 serviceData">
            <div class="card">
                <div class="card-body" onClick={services}>
                    <img src={require(`../../../../images/icons/${course.pic}`)} alt="" />
                    {/* <img src={require(`http://localhost:5000/${course.pic}`)} alt="" /> */}
                    <h4>{course.name}</h4>
                    <p>{course.details}</p>
                </div>
            </div>
        </div>


    );
};

export default ShowServices;