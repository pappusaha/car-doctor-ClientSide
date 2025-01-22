import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'; // Corrected the import
import { FaGoogle } from "react-icons/fa";
import UseAuth from '../Hooks/UseAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure CSS is imported
import { CiFacebook } from "react-icons/ci";
import { LiaLinkedinIn } from "react-icons/lia";

const SignUp = () => {
  const { createUser,goggle } = UseAuth(); // Ensure UseAuth is correctly implemented
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

  const { register, handleSubmit, setError, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { email, password, name } = data;

    try {
      // Ensure createUser works
      

      if (!regex.test(password)) {
       
         toast.error('Password must contain at least one uppercase letter, one number, one symbol, and be at least 6 characters long');
        return ;
      } 
      
      else if (regex.test(password)){
        createUser(email,password,name)
        .then(userCredential => {
          const user=userCredential.user
          if(user){
            toast.success('your data is registered')
          }
          
        })
      }
    } 
    
    
    catch (error) {
      console.error(error);
     
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg flex max-w-4xl w-full">
        {/* Left Section */}
        <div className="hidden md:flex items-center justify-center w-1/2 p-4">
          <img
            src="/public/assets/images/login/login.svg" // Ensure the image path is correct
            alt="Login Illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Your name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Confirm Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your password"
              />

            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Sign Up
            </button>
          </form>
          <ToastContainer />
          <p className="text-center text-gray-600 mt-4">
            Or Sign In with
          </p>
         <div className='flex justify-center space-x-8'>
         <div className="flex justify-center space-x-4 mt-4">
            <button onClick={()=> goggle()} className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
              <FaGoogle className="text-red-500" />
            </button>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
              <CiFacebook  className="text-red-500"/>
            </button>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-500">
              <LiaLinkedinIn  className="text-red-500"/>
              
            </button>
          </div>
         </div>
          <p className="text-center text-gray-600 mt-4">
            Have an account?{" "}
            <Link to={"/login"} className="text-red-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
