import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            
                <InfoCard cardtitle="opening hours" bgClass="bg-gradient-to-r from-primary to-secondary" raf={clock} ></InfoCard>
                <InfoCard cardtitle=" our locatoin " bgClass="bg-[#3A4256]" raf={marker} ></InfoCard>
                <InfoCard cardtitle="contact us" bgClass="bg-gradient-to-r from-primary to-secondary" raf={phone} ></InfoCard>
            
        </div>
    );
};

export default Info;