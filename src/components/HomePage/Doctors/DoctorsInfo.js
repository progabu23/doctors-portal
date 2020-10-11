import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const DoctorsInfo = ({ doctor }) => {
    return (
        <div className="col-md-4 my-5 pb-3">
            <div className="text-center">
                <img className="img-fluid mb-3" style={{height: '250px'}} src={doctor.img} alt="" />
                <h4>{doctor.title}</h4>
                <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} />{doctor.phone}</p>
            </div>
        </div>
    );
};

export default DoctorsInfo;