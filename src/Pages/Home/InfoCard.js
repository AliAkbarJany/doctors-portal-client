import React from 'react';

const InfoCard = ({raf,cardtitle,bgClass}) => {
    return (
        <div>
            <div class={`card lg:card-side bg-base-100 shadow-xl h-36 ${bgClass}`} >
                <figure><img className='pl-5' src={raf} alt="Album" /></figure>
                <div class="card-body text-white ">
                    <h2 class="card-title">{cardtitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default InfoCard;