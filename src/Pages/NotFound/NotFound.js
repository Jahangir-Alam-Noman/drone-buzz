import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <div className=" bg-light text-dark not_found mt-5">
                <div>
                    <h1>4 <span><i className="fa fa-frown-o" aria-hidden="true"></i></span>  4</h1>
                    <h3>Oops! Page not found!</h3>
                    <Link to="/home"> <button type="button" className="btn btn-outline-success mt-4 px-3 py-2">Go back to home page</button>  </Link>
                </div>
            </div>

        </div>
    );
};

export default NotFound;