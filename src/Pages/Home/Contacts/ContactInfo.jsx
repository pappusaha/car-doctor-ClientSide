import React from 'react';

const contactInfo = () => {
  const infoItems = [
    {
      icon: '📅', // Replace this with an actual icon using libraries like Font Awesome or Heroicons
      title: 'We are open Monday-Friday',
      text: '7:00 am - 9:00 pm',
    },
    {
      icon: '📞', // Replace with a call icon
      title: 'Have a question?',
      text: '+2546 251 2658',
    },
    {
      icon: '📍', // Replace with a location pin icon
      title: 'Need a repair? Our address',
      text: 'Liza Street, New York',
    },
  ];

  return (
    <div className="bg-black text-white py-10 px-4">
      <div className="flex justify-around items-center max-w-5xl mx-auto">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="py-10 flex items-center space-x-3 group transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
          >
            <div
              className="text-red-500 text-3xl group-hover:animate-bounce"
              aria-hidden="true"
            >
              {item.icon}
            </div>
            <div>
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-lg font-bold">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default contactInfo;
