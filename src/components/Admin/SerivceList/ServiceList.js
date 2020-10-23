import React from 'react';
import { Link } from 'react-router-dom';

const ServiceList = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-3 orderList">
                    <Link to="/serviceList"><h4>Service list</h4></Link>
                    <Link to="/addService"><h4>Add Service</h4></Link>
                    <Link to="/makeAdmin"><h4>Make Admin</h4></Link>
                </div>
                <div className="col-md-9 d-flex justify-content-center">
                    <h1>ServiceList</h1>
                </div>
                {/* <div className="col-md-5">
                   <h1>dd</h1>
                </div> */}
            </div>
        </section>
    );
};

export default ServiceList;