import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router';

const ServiceCard = ({singleCardService}) => {
    console.log(singleCardService)
    const{_id,service_id,title,img,price,description,facility}=singleCardService
    return (
        <div>
        <div className="card card-compact rounded-lg  shadow-lg p-6 bg-white border-[1px] border-[#E8E8E8]">
  <figure>
    <img
      src={img}
      alt="Shoes"  className=''/>
  </figure>
<div className='space-y-5'>
<div className="">
    <h2 className="card-title text-2xl font-bold text-slate-900">{title}</h2>
   
    
  </div>
  <div className='flex  justify-between'>
    <p className='text-orange-600 text-xl font-semibold'>Price:${price}</p>
    <Link to={`/serviceCardDetails/:${_id}`}><FaArrowRight className='text-orange-500' /></Link>
    </div>
</div>
</div>


        </div>
    );
};

export default ServiceCard;