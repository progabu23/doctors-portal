import React from 'react';

const ServiceInfo = ({ service }) => {
    return (
        <div className="col-md-4 text-center mb-5">
            <img style={{height: '50px'}} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
        </div>
    );
};

export default ServiceInfo;