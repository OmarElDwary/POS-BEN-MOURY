import React from 'react';
import { Link } from 'react-router-dom';
import Mainlayout from '../layouts/MainLayout';


const Homepage = () => {
    return (
        <Mainlayout>
            <div className='bg-light p-5 mt-4 rounded-3'>
                    <h1>BEN MOURY</h1>
                    <p>Real Madrid mbt5srsh</p>
                    <Link to='/pos' className='btn btn-primary'>Cashier</Link>
                </div>
        </Mainlayout>
    );
};


Homepage.propTypes = {

};


export default Homepage;
