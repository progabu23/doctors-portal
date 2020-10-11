import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Nav from '../Nav/Nav';
import './Header.css'

const Header = () => {
    return (
        <div className="header-bg">
         <Nav></Nav>   
         <HeaderMain></HeaderMain>
         <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;