import React from 'react';
import {
  FaDribbbleSquare,
  FaGithubSquare,
  FaInstagram,
FaTwitterSquare,
  
} from 'react-icons/fa';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-10 relative  text-[#525252]  '>
          <div className='justify-center '>
            <img className='h-12 w-12 inline-block relative bottom-2 right-2' src="logoimg.png" alt="LogoImg"></img>
        <a href='/src/components/Home.jsx' className=' text-4xl  text-[#ffffff] inline-block'>FINOVATECH.IO</a>
        
              <ul className='py-4 text-2xl'>
              <li>123-456-7890</li>
              <li>finovatech@mysite.com</li>
              <li>56/23</li>
              <li>Rose Street Goa- 94158</li>
              </ul>
        <div className='flex justify-between md:w-[75%] my-6'>
           
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h2 className='text-3xl text-[#FE6262]'>Class Title</h2>
        <ul>
            <li className='py-2 text-2xl '>Services</li>
            <li className='py-2 text-2xl'>Portfolio</li>
            <li className='py-2 text-2xl'>Vision</li>
            <li className='py-2 text-2xl'>About Us</li>
        </ul>
    </div>
    <div className='relative left-[100px]'>
        <h2 className='font-medium text-3xl text-[#FE6262]'>Subscribe to Our Newsletter</h2>    
        <Newsletter className='relative bottom-[20px]' />
    </div>
    <div>
        <h2 className='font-medium text-3xl flex text-[#FE6262]'>Follow Us On:</h2>
        <ul className='text-[#a09f9f] flex justify-between md:w-[75%] my-6 '>
        <li><FaInstagram size={30} radius={30} /></li>                 
        <li><FaTwitterSquare size={30} radius={30}/></li>
        <li><FaGithubSquare size={30} radius={30}/></li>
        <li><FaDribbbleSquare size={30} radius={30}/></li>
        </ul>
    </div>
    
      </div>
    </div>
  );
};

export default Footer;