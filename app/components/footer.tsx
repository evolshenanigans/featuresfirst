import React from 'react'
//create 2 divs one on top of eachother the top div should have a background color of #e09900 and the bottom one should have a background color of #59406c
function Footer() {
    return (
      <footer className="flex flex-col w-full bg-[#e5e5e5]">
        <div className="flex flex-row justify-between items-center text-center w-full bg-[#e09900] rounded-t-2xl">
          <div className="flex flex-col justify-center text-center w-1/3 h-64 px-4">
            <h1 className="font-extrabold text-[#333333] text-xl">Contact us</h1>
            <p className="text-gray-800 mt-4">1050 Lakes Drive West<br />Covina, CA 91790</p>
            <p className="text-gray-800 mt-4">Phone: 555-1234<br />info@featuresfirstauto.com</p>
          </div>
          <div className="flex flex-col justify-center text-center w-1/3 h-64 px-4">
            <h1 className="font-extrabold text-[#333333] text-xl">Quick Links</h1>
            <ul className="mt-4 ">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Our Podcast</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Solutions</a></li>
            </ul>
          </div>
          <div className="flex flex-col justify-center text-center w-1/3 h-64 px-4">
            <h1 className="font-extrabold text-[#333333] text-xl">Subscribe to Our Newsletter</h1>
            <form className="mt-4">
              <input type="email" placeholder="Email" className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4f4f4f] focus:border-transparent" />
              <button type="submit" className="mt-4 bg-[#D94F33] hover:bg-[#59406C] text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
          </div>
        </div>
        <div className="flex flex-col w-full bg-[#59406c] h-10 p-5">
          <h1 className="text-white text-sm text-center">
            ©2019 FeaturesFirst Auto, a multipurpose automotive platform. | Privacy Policy | Terms &amp; Conditions | Disclaimer
          </h1>
        </div>
      </footer>
    );
  }
  
  export default Footer;