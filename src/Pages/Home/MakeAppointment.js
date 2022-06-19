import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from './PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center  mt-32'
            style={{background:`url(${appointment})`}}
        >
            <div className='flex-1'>
                <img className='mt-[-150px] hidden lg:block' src={doctor} alt="" />
            </div>
            <div className='flex-1 '>
                <h2 className='text-4xl text-primary font-bold uppercase'>Appointment</h2>
                <h2 className='text-3xl'>Make an Appointment</h2>
                <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga deleniti, soluta quos id consequatur aspernatur! Reiciendis perferendis asperiores, dolorem porro ipsam sed, incidunt laboriosam ut rerum eos provident earum saepe ipsum delectus debitis. Sequi, vitae iusto! Quasi doloremque amet vitae?
                </p>
                <PrimaryButton>get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;