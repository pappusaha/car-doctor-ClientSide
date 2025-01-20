import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TeamCarousel = () => {
  // Data for the cards
  const teamMembers = [
    {
      id: 1,
      name: 'Car Engine Plug',
      role: 'Engine Expert',
      image: 'https://i.postimg.cc/sg3RKLmc/1.jpg', // Replace with actual image URLs
    },
    {
      id: 2,
      name: 'Car Engine Plug',
      role: 'Engine Expert',
      image: 'https://i.postimg.cc/YC8BPxyw/2.jpg', // Replace with actual image URLs
    },
    {
      id: 3,
      name: 'Car Engine Plug',
      role: 'Engine Expert',
      image: 'https://i.postimg.cc/gj3fHy6Q/3.jpg', // Replace with actual image URLs
    },
  ];

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-10">
      <p className='text-orange-600 text-center'>Team</p>
      <h2 className="text-center text-3xl font-bold mb-6 text-slate-900">Meet Our Team</h2>
      <p className='text-slate-600 font-medium text-center pb-10'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {teamMembers.map((member) => (
            <div key={member.id} className="px-4">
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-t-lg h-52 w-full object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                  <div className="flex justify-center mt-4 space-x-3 text-blue-500">
                    <a href="#facebook" className="hover:text-blue-700">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#twitter" className="hover:text-blue-700">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#linkedin" className="hover:text-blue-700">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#instagram" className="hover:text-pink-500">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamCarousel;
