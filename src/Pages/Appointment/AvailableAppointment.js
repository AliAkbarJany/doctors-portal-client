
// BHAI.......
import { format } from 'date-fns';
import Loading from '../Shared/Loading'
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    // React QUERY.....
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='my-10'>
            <h4 className='text-xl text-secondary text-center my-12'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch = {refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;



/*
// MY CODE>>>>>>>>>>>>>>>>>> 

import { format } from 'date-fns';
import Loading from '../Shared/Loading'
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([])
    const [treatment,setTreatment] =useState(null)

    const formatedDate= format(date, 'pp')
    const {data:services,isLoading,refetch}=useQuery(['available',formatedDate], ()=>fetch(`http://localhost:5000/available?date=${formatedDate}`)
            .then(res => res.json())
            )
            if(isLoading){
                return <Loading></Loading>
            }
    
    
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setServices(data)})
    // }, [formatedDate])
    
    return (
        <div>

            <h4 className='text-xl text-secondary text-center'>Available Appointments on{format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        refetch={refetch}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>

            
            {
                treatment && <BookingModal
                 date={date} 
                 treatment={treatment}
                 setTreatment={setTreatment}
                 refetch={refetch}
                 > </BookingModal>
            }
        </div>
    );
    // console.log({children})
    // return (
    //     <div>
    //         <p className='text-7xl text-black'>You picked {format(children, 'PP')}.</p>
    //         <h2 className='text-7xl text-black'>rafsan</h2>
    //     </div>
    // );
};

export default AvailableAppointment; 

*/

