import React from 'react';
import error from '../../img/error.jpg'

const Error = () => {
    return (
        <div className="container text-center">
            <img src={error} className="img-fluid" style={{objectFit:"cover",height:'500px'}} alt="" />
        </div>
    );
};

export default Error;