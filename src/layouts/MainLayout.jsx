import React from 'react';
import { Link } from 'react-router-dom';



const Mainlayout = ({children}) => {
    return (
        <div>
            <header>
            <nav className="navbar navbar-light bg-primary">
                <div className="container">
                    <Link to="/" className="navbar-brand" href="#">Home</Link>
                </div>
            </nav>
        </header>
        <main>
            <div className='container mt-3'>
                {children}
            </div>
        </main>
        </div>
    );
};


Mainlayout.propTypes = {

};


export default Mainlayout;
