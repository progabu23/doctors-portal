import React from 'react';
import doctor from '../../../images/doctor.png'
import DoctorsInfo from './DoctorsInfo';

const doctorsInfo = [
    {
        id: 1,
        img: doctor,
        title: 'Dr. Caudi',
        phone: '+61 452 200 126'
    },
    {
        id: 2,
        img: doctor,
        title: 'Dr. Caudi',
        phone: '+61 452 200 126'
    },
    {
        id: 3,
        img: doctor,
        title: 'Dr. Caudi',
        phone: '+61 452 200 126'
    },
]

const Doctors = () => {
    return (
        <div className="row">
            {
                doctorsInfo.map(doctor => <DoctorsInfo doctor={doctor} key={doctor.id} />)
            }
        </div>
    );
};

export default Doctors;