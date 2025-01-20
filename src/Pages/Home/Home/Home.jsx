import React from 'react';
import Navbar from '../../../Components/Navbar';
import HomeHeader from '../HomeHeader/HomeHeader';
import About from '../About/About';
import Services from '../Services/Services';
// import { PiContactlessPaymentThin } from 'react-icons/pi';
import ContactInfo from '../Contacts/ContactInfo';
import TeamCarousel from '../Teams/TeamCarousel';
import Features from '../CoreFeatures/Features';
import CustomerFeedback from '../Testimonial/CustomerFeedback';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HomeHeader></HomeHeader>
            <About></About>
            <Services></Services>
            <ContactInfo></ContactInfo>
            <TeamCarousel></TeamCarousel>
            <Features></Features>
            <CustomerFeedback></CustomerFeedback>
        </div>
    );
};

export default Home;