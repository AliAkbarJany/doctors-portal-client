import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment,refetch }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    
    const formatedDate=format(date, 'PP')
    console.log(user)
    const handleBooking = event => {
        event.preventDefault();
        // const name=event.target.name.value
        // const email = event.target.email.value
        const slot = event.target.slot.value
        // console.log(name, email, slot)

        const booking = {
            treatmentId:_id,
            treatment:name,
            date:formatedDate,
            slot,
            patient:user.email,
            patientName:user.displayName,
            phone:event.target.phone.value

        }
        fetch('http://localhost:5000/booking',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{  
            console.log(data)
            if(data.success){
                toast(`Appointed is set ${formatedDate} at ${slot}`)
            }
            else{
                toast.error(`Already have an account ${data.booking?.date} at ${slot}`)
            }
            refetch()
            // setTreatment(null)
        })
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Book for:{name}</h3>
                    <form onSubmit={handleBooking} className='grid gap-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) =>
                                    <option
                                        key={index}
                                        value={slot}>
                                        {slot}
                                    </option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone Nymber" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" class="btn btn-primary input input-bordered w-full max-w-xs" />
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default BookingModal;