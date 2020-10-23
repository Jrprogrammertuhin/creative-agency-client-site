import React, { useContext } from 'react';
import './Order.css'
import { UserContext } from '../../../../App';
const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleOrderChange = (e) => {
        console.log(e)
    }
    return (
        <div className="a">
            <h1>Order</h1>
            <div className="">
                <form action="submit" >
                    <input type="text" name="name" id="a" onBlur={handleOrderChange} placeholder="Your Names/ Company Name's" required /><br />
                    <input type="text" name="email" id="a" onBlur={handleOrderChange} placeholder="" required value={loggedInUser.email}/><br />
                    <input type="text" name="design" id="a" onBlur={handleOrderChange} placeholder="Design" required /><br />
                    <input type="text" name="product" id="product" onBlur={handleOrderChange} placeholder="Product Details" required /><br />
                    <input type="text" name="design" id="price" onBlur={handleOrderChange} placeholder="Price" required /><br />
                    
                    <input className="btn btn-primary" type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Order;