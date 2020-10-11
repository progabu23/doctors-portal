import React, { useState } from 'react';


const BookCard = ({booking, date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 style={{ color: '#1cc7c1' }} className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SPACES AVAILABLE</p>
                    <button onClick={openModal} style={{backgroundColor: '#1cc7c1', color: '#ffffff'}} className="btn text-uppercase">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;