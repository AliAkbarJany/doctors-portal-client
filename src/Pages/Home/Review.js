import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-2-lg bg-base-100 shadow-xl">
            <div class="card-body">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta aspernatur quas? Adipisci, perspiciatis blanditiis.</p>
                <div className='flex items-center '>
                    <div>
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                                <img src={review.img} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>{review.name}</h2>
                        <h3>{review.location}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;