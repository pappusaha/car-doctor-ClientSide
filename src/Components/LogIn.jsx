// import React from "react";
import { useForm } from "react-hook-form"
import { Link } from "react-router";
import UseAuth from "../Hooks/UseAuth";
import { FaLinkedinIn ,FaFacebookF,FaGoogle} from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';



const Login = () => {

  const {signInUser, goggle}=UseAuth()
  const { register, handleSubmit,formState: { errors } } = useForm()
  const onSubmit = (data) => {
    console.log(data)

    const{email, password}=data
    signInUser(email,password)
    .then(userCredential =>{
      if(userCredential.user){
        console.log(userCredential)
        toast.success("you have logged in ")
      }
    })
    .catch((error) => {
      
      const errorMessage = error.message;
      // ..
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg flex max-w-4xl w-full">
        {/* Left Section */}
        <div className="hidden md:flex items-center justify-center w-1/2  p-4">
          <img
            src="/assets/images/login/login.svg" // আপনার SVG ফাইলের সঠিক পাথ দিন
            alt="Login Illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Login
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
                    <ToastContainer />

            <div className="mb-4">
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
                {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Or Sign In with
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
              <FaFacebookF  className=" text-blue-600"/>
            </button>
            <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
              <FaLinkedinIn    className=" text-blue-700"/>
             
              
            </button>
            <button onClick={() => goggle()} className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
              <FaGoogle  className="fab fa-google text-yellow-400"/>
            </button>
          </div>
          <p className="text-center text-gray-600 mt-4">
            Haven't an account?
            <Link to={'/signup'} className="text-red-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
