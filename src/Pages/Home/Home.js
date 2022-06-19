import React from 'react';

import Banner from './Banner';
import ContactUs from './ContactUs';
import Footer from '../Shared/Footer';

import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonoals from './Testimonoals';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div className='px-12'>
            
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <ContactUs></ContactUs>
            <Testimonoals></Testimonoals>
            <Footer></Footer>
        </div>
    );
};

export default Home;