import React from 'react';

const CustomerFeedback = () => {
    return (
        <div>
          <div className='text-center space-y-6'>
            <p className='text-orange-500 font-medium'>Testimonial</p>
            <h3 className='text-5xl font-bold'>What Customer Says</h3>
           <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>  
            {/* feedback section  */}
            <div className='flex justify-between'>
{/* first feedback */}
<div>
  {/*img section  */}
  <div className='flex justify-between'>
    <div className='flex items-center'>
      <img src="https://i.postimg.cc/8kxy9svZ/download-Photoroom.jpg" alt="" className='w-16 h-16' />
      <div>
        <p>Monir Hossain</p>
        <p>Developer</p>
      </div>
      {/* icon part */}
      <div>
        <img src="https://i.postimg.cc/ZRGr7BQ3/quote-1.png" alt="" className='w-5 h-5' />
      </div>
    </div>
  </div>
  <div>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
    {/* rating  */}
    <div>

    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    </div>
  </div>
</div>
{/* second part */}
<div>
  {/*img section  */}
  <div className='flex justify-between'>
    <div className='flex items-center'>
      <img src="https://i.postimg.cc/RZFCTGHy/image-Photoroom.jpg" alt="" className='w-16 h-16'/>
      <div>
        <p>Awlad Hossain</p>
        <p>Businessman</p>
      </div>
      {/* icon part */}
      <div>
        <img src="https://i.postimg.cc/ZRGr7BQ3/quote-1.png" alt="" className='w-5 h-5' />
      </div>
    </div>
  </div>
  <div>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
    {/* rating  */}
    <div>
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    </div>
  </div>
</div>
            </div>

            
        </div>
    );
};

export default CustomerFeedback;