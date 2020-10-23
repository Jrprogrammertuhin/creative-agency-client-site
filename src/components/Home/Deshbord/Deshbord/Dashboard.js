import React from 'react';
import Order from '../Order/Order';
import './Dashboard.css'
import { Link } from 'react-router-dom';
const Dashboard = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-3 orderList">
                    <Link><h4>Order</h4></Link>
                    <Link><h4>Service</h4></Link>
                    <Link><h4>Review</h4></Link>
                </div>
                <div className="col-md-9 d-flex justify-content-center">
                    <Order></Order>
                </div>
                {/* <div className="col-md-5">
                   <h1>dd</h1>
                </div> */}
            </div>
        </section>
    );
};

export default Dashboard;