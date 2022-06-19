import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonoals = () => {

    const reviews=[
        {
            _id:2,
            name:'william herry',
            review:'',
            location:'california',
            img:people1
        },
        {
            _id:2,
            name:'william herry',
            review:'',
            location:'california',
            img:people2
        },
        {
            _id:3,
            name:'william herry',
            review:'',
            location:'california',
            img:people3
        }
    ]
    return (
       <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-primary text-2xl font-bold'>Testimonial</h2>
                    <h2 className='text-3xl font-bold'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-28 lg:w-48' src={quote} alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review=><Review key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </div>
       </section>
    );
};

export default Testimonoals;