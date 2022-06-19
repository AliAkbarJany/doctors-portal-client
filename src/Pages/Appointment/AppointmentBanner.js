import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'


import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns'; 
import AvailableAppointment from './AvailableAppointment';

const AppointmentBanner = ({date,setDate}) => {
    
    return (
        <div>
            <div class="hero min-h-screen " style={{ "backgroundImage": `url(${bg})` }}>
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                        
                        {/* {
                            <AvailableAppointment >{date}</AvailableAppointment>
                        } */}
                        
                    </div>
                </div>


            </div>

        </div>
    );
};

export default AppointmentBanner;