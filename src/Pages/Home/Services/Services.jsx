import React, { useEffect, useState } from 'react';
import ServiceCard from './serviceCard';

const Services = () => {

  const [service, setService]=useState([])

useEffect(()=>{
  fetch('http://localhost:5000/services')
  .then(res => res.json())
  .then(data =>{
console.log(data)
    setService(data)
  })

},[])

    return (
    <div className='mt-20'>

<div className='text-center'>
            <p className='text-orange-400 font-bold'>Service</p>
            <h1 className='text-5xl'>Our Service Area</h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <div className=' grid grid-cols-2 lg:grid-cols-3 gap-5'>
        {
            service.map((singleCardService,idx) => <ServiceCard key={idx} singleCardService={singleCardService}></ServiceCard>)
           }
        </div>
        </div>
        <div className='text-center'>
    <button className='btn btn-outline btn-warning'>More Services</button>
</div>

    </div>
    
    );
};

export default Services;