// import React from 'react';
import Swal from 'sweetalert2'

import { useLoaderData } from "react-router";
import Navbar from "../../../Components/Navbar";
import UseAuth from "../../../Hooks/UseAuth";

const ServiceCardDetails = () => {
    //    service booking details

const cardDetails=useLoaderData()
const {title,price,description,facility,img}=cardDetails
// login userData
const {user}=UseAuth()


const handleBookingDetails=event=>{
event.preventDefault()
const form=event.target;
const name=form.name.value;
const date=form.date.value;
const email=user?.email;

const massage=form.message.value;
const customerBookingDetails={
    customerName:name,
    date,
    email,
    massage,
    price:price,
    image:img,
    serviceName:title
}
fetch('http://localhost:5000/bookingService',{
method:'POST',
headers:{
    'content-type': 'application/json'
},
body: JSON.stringify(customerBookingDetails)
})
.then(res=> res.json())
.then(data=> {
    console.log(data)
   if(data.insertedId){
    Swal.fire({
        position: "top",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
   }
  
})
}
   
    return (
      <>
      <Navbar></Navbar>
      {/* banner section */}
      <div className="relative ">
         <img src={img} alt=""  className="w-full h-[300px]"/>
          <div className="absolute  top-1/2 "> 

            <h1 className="text-5xl text-white font-bold">Service Details</h1>
          </div>
          <div className="absolute bottom-1 right-1/2"><p className="bg-orange-300 py-5 px-6 rounded-t-full font-bold text-white text-center">Home/service/details</p></div>
        </div>
        {/* service details section */}
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
            <div className="lg:col-span-2">
<img src={img} alt="" className="w-full" />
<div>
    <h1>{title}</h1>
    <p>{description}</p>
</div>
<div className="grid grid-cols-2 gap-3">
{
 facility.map((feature, idx) => {
const {name,details}=feature
return (

<div key={idx} className=" border-t-4 border-orange-500 bg-slate-100 rounded-xl p-5 ">

<h4 className="text-slate-800 font-bold text-xl">{name}</h4>
<p>{details}</p>
</div>
)


 })   
}
</div>

            </div>
            {/* this form section  */}
            <div className="lg:col-span-1 bg-slate-50 p-10">
                <h2 className="text-black text-xl font-bold mb-5">Booking service:{title}</h2>

            <form onSubmit={handleBookingDetails} action="" className=" space-y-5">
<input type="text" placeholder="Name" defaultValue={user?.displayName} name="name" className="input input-bordered w-full bg-slate-100" />
<input type="date" placeholder="date" name="date" className="input input-bordered w-full bg-slate-100" />
<input type="number" placeholder="Your number" name="number" className="input input-bordered w-full bg-slate-100 " />
<input type="email" defaultValue={user?.email} name="email" className="input input-bordered w-full bg-slate-100" />
<input type="text" defaultValue={'Price:'+'$'+price} name="email" className="input input-bordered w-full bg-slate-100 text-orange-400 font-bold" />

<textarea name="message" className="textarea textarea-bordered w-full bg-slate-100" placeholder="Bio"></textarea>

<button type="submit" className="btn btn-secondary w-full">Order confirm </button>
</form>
<div className="bg-black p-5 relative">
    <img src="" alt="" />
    <p>Car doctor</p>
    <p>Need help ? we are here to help you </p>
    <div className="bg-white p-5  rounded-xl space-y-8 ">
<p>Car doctor Spacial</p>
<p className="text-black font-extrabold">Save upto <span className="font-extrabold text-orange-600">60%off</span></p>

    </div>
    <div className=" bg-orange-500 p-2 absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
        <p>get a quote</p>
    </div>

</div>
            </div>

        </div>
      </>
    );
};

export default ServiceCardDetails;