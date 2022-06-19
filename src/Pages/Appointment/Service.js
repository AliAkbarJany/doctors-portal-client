import React from 'react';

const Service = ({ service, setTreatment }) => {
    console.log(service)
    const { name, slots } = service;
    return (
        <div >
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>
                        {
                            slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>No slot slots</span>
                        }
                    </p>
                    <p className='uppercase'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} slots</p>
                    <div class="card-actions justify-center">
                        <label
                            for="booking-modal" class="btn btn-primary"
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(service)}
                        >   Book Appointment
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;