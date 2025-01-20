import React from 'react';

const About = () => {
    return (
        <div className="hero bg-white min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className='lg:w-1/2 relative'>
            <img src="https://i.postimg.cc/x18rCwCc/person.jpg" alt="" className=' w-3/4 h-[400px]'/>
            <img src="https://i.postimg.cc/526G187z/parts.jpg" alt="" className='absolute w-1/2 right-4 top-1/2 h-[300px] border-8 border-white outline-4 rounded-lg shadow-2xl' />
          </div>
          <div className='lg:w-1/2 space-y-5'>
          <p className='text-orange-500 font-bold'>About Us</p>
            <h1 className="lg:text-5xl font-bold text-black">We are qualified & of experience in this field</h1>
            <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className='btn bg-orange-400 text-white'>Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;