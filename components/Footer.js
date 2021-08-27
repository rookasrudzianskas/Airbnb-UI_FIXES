import React from 'react';

const Footer = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100">
        <div className="space-y-4 text-sm text-gray-800 ">
          <h5 className="font-bold">ABOUT</h5>
          <p className="hover:text-black duration-150 cursor-pointer">How Airbnb works</p>
          <p className="hover:text-black duration-150 cursor-pointer">Newsroom</p>
          <p className="hover:text-black duration-150 cursor-pointer">Investors</p>
          <p className="hover:text-black duration-150 cursor-pointer">Airbnb Plus</p>
          <p className="hover:text-black duration-150 cursor-pointer">Airbnb Luxe</p>
          <p className="hover:text-black duration-150 cursor-pointer">HotelTonight</p>
          <p className="hover:text-black duration-150 cursor-pointer">Airbnb for Work</p>
          <p className="hover:text-black duration-150 cursor-pointer">Made possible by Hosts</p>
          <p className="hover:text-black duration-150 cursor-pointer">Careers</p>
          <p className="hover:text-black duration-150 cursor-pointer">Founders' Letter</p>
        </div>

        <div className="space-y-4 text-sm text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p className="hover:text-black duration-150 cursor-pointer">Diversity & Belonging</p>
          <p className="hover:text-black duration-150 cursor-pointer">Against Discrimination</p>
          <p className="hover:text-black duration-150 cursor-pointer">Accessibility</p>
          <p className="hover:text-black duration-150 cursor-pointer">Airbnb Associates</p>
          <p className="hover:text-black duration-150 cursor-pointer">Frontline Stays</p>
          <p className="hover:text-black duration-150 cursor-pointer">Guest Referrals</p>
          <p className="hover:text-black duration-150 cursor-pointer">Gift cards</p>
          <p className="hover:text-black duration-150 cursor-pointer">Airbnb.org</p>
        </div>

        <div className="space-y-4 text-sm text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p className="hover:text-black duration-150 cursor-pointer">Host an Online Experience</p>
          <p className="hover:text-black duration-150 cursor-pointer">Host an Experience</p>
          <p className="hover:text-black duration-150 cursor-pointer">Responsible hosting</p>
          <p className="hover:text-black duration-150 cursor-pointer">Resource Center</p>
          <p className="hover:text-black duration-150 cursor-pointer">Community Center</p>
        </div>

        <div className="space-y-4 text-sm text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p className="hover:text-black duration-150 cursor-pointer">Our COVID-19 Response</p>
          <p className="hover:text-black duration-150 cursor-pointer">Help Center</p>
          <p className="hover:text-black duration-150 cursor-pointer">Cancellation options</p>
          <p className="hover:text-black duration-150 cursor-pointer">Neighborhood Support</p>
          <p className="hover:text-black duration-150 cursor-pointer">Trust & Safety</p>
        </div>


      </div>
  );
};

export default Footer;

// done
