import React from 'react';
import chair from '../../../images/logos/Frame.png';
import { useHistory } from 'react-router-dom';

const HeaderMain = () => {
    // const history = useHistory();
    // const handleBtn = () =>{
    //     history.push('/order')
    // }
    return (
        <main style={{height:'600px',backgroundColor:'#FBD062'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Let's Grow Your Brand To The Next Level</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button className="btn btn-dark">Hire us</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;