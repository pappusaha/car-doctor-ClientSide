import React from 'react';

const Features = () => {
    return (
        <div  className='mt-32'>
          <div className='space-y-5'>
          <p
            className='text-center text-orange-500 font-semibold'>Core Features</p>
            <h2 className='text-center text-4xl font-bold text-slate-900'>Why Choose Us</h2> 
            <p className='text-center'>
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
          </div>

<div className='flex  justify-evenly pt-12'>
<div className='text-center p-5 border-[1px] border-[rgb(232, 232, 232)] shadow-xl rounded-lg'>
        <img src="https://i.postimg.cc/fR5j03kK/group.png" alt="" />
        <p>Expert Team</p>
    </div>
    <div className='text-center p-5 border-[1px] border-[rgb(232, 232, 232)] shadow-xl rounded-lg bg-orange-200'>
    <img src="https://i.postimg.cc/mg6yYykg/Group-38729.png" className='text-center ' alt="" />         
    <p>Timely Delivery</p>
    </div>
    <div className='text-center p-5 border-[1px] border-[rgb(232, 232, 232)] shadow-xl rounded-lg bg-orange-200'>
    <img src="https://i.postimg.cc/tJH51RTd/person.png" alt="" />
    <p>24/7 Support</p>
    </div>
    <div className='text-center p-5 border-[1px] border-[rgb(232, 232, 232)] shadow-xl rounded-lg bg-orange-200'>
    <img src="https://i.postimg.cc/28k1L0Ws/Wrench.png" alt="" />
    <p>Best Equipment</p>
    </div>
    <div className='text-center p-5 border-[1px] border-[rgb(232, 232, 232)] shadow-xl rounded-lg bg-orange-200'>
    <img src="https://i.postimg.cc/q7MwmsWS/check-1.png" alt="" />
    <p>100% Guranty</p>
    </div>
    <div className='text-center p-5 border-[1px] border-[rgb(232, 232, 232)] shadow-xl rounded-lg bg-orange-200'>
        <img src="https://i.postimg.cc/yYHFQhZj/deliveryt.png" alt="" />
        <p>Timely Delivery</p>
    </div>
</div>
        </div>
    );
};

export default Features;