import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import DentalInfo from '../DentalInfo/DentalInfo';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div style={{ overflow: 'hidden' }}>
            <Header></Header>
            <Services></Services>
            <DentalInfo></DentalInfo>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;