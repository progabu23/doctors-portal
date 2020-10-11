import React, { useState } from 'react';
import Footer from '../../HomePage/Footer/Footer';
import Nav from '../../HomePage/Header/Nav/Nav';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';


const AppointmentPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = date => {
        setSelectedDate(date)
    }
    return (
        <div style={{ overflow: 'hidden' }}>
            <Nav></Nav>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default AppointmentPage;