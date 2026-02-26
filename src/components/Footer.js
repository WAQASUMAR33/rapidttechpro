import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaTiktok, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="hidden md:flex flex-col bg-black w-full text-white py-12">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            <div>
              <div className="flex gap-2 items-center mb-6">
                <div className="h-3 w-3 bg-bluish rounded-full"></div>
                <h3 className="text-lg text-gray-400">Company</h3>
              </div>
              <ul className="text-base">
                <li><a href="/AboutUs" className="hover:text-bluish">About Us</a></li>
                <li><a href="/Company/Testimonials" className="hover:text-bluish">Testimonials</a></li>
                <li><a href="/Company/Process" className="hover:text-bluish">Process</a></li>
                <li><a href="/Help" className="hover:text-bluish">Contact</a></li>
              </ul>
            </div>

            <div>
              <div className="flex gap-2 items-center mb-6">
                <div className="h-3 w-3 bg-bluish rounded-full"></div>
                <h3 className="text-lg text-gray-400">Resources</h3>
              </div>
              <ul className="text-base">
                {/* <li><a href="/blog" className="hover:text-bluish">Blog</a></li> */}
                <li><a href="/Company/Events" className="hover:text-bluish">Events</a></li>
                <li><a href="/Company/Press-Release" className="hover:text-bluish">Press Release</a></li>
                <li><a href="/Work" className="hover:text-bluish">Inspire Me</a></li>
              </ul>
            </div>

            <div>
              <div className="flex gap-2 items-center mb-6">
                <div className="h-3 w-3 bg-bluish rounded-full"></div>
                <h3 className="text-lg text-gray-400">Services</h3>
              </div>
              <ul className="text-base">
                <li><a href="/Services/Mobile-Apps" className="hover:text-bluish">Mobile App Solutions</a></li>
                <li><a href="/Services/Ecommerce-Solutions" className="hover:text-bluish">Ecommerce Solutions</a></li>
                <li><a href="/Services/Web-Development" className="hover:text-bluish">Website Solutions</a></li>
                <li><a href="/Services/HR-Solution" className="hover:text-bluish">HR Solutions</a></li>
                <li><a href="/Services/Point-Of-Sale" className="hover:text-bluish">POS Solutions</a></li>
                <li><a href="/Services/UIUX-Figma" className="hover:text-bluish">UI/UX Solutions</a></li>
              </ul>
            </div>

            {/* Insights Section */}
            <div>
              <div className="flex gap-2 items-center mb-6">
                <div className="h-3 w-3 bg-bluish rounded-full"></div>
                <h3 className="text-lg text-gray-400">Insights</h3>
              </div>
              <ul className="text-base">
                <li><a href="/Company/Careers" className="hover:text-bluish">Careers</a></li>
                <li><a href="/Company/Manifesto" className="hover:text-bluish">Manifesto</a></li>
                <li><a href="/Company/Culture-Book" className="hover:text-bluish">Culture Book</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-white mt-5"></div>

          {/* Location Section */}
          <div className="mt-5">
            <div className="flex gap-2 items-center mb-6">
              <div className="h-3 w-3 bg-bluish rounded-full"></div>
              <h3 className="text-lg text-gray-400">Locations</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">

              <div>
                <p className="text-lg font-semibold mb-2">Dubai</p>
                <p>Building 11, Level 7, Bay Square,</p>
                <p>Business Bay, Dubai - 23304,</p>
                <p>United Arab Emirates</p>
              </div>
              <div>
                <p className="text-lg font-semibold mb-2">Mandi Bahauddin</p>
                <p>54C, Phalia Road, Punjab Center,</p>
                <p>Mandi Bahauddin - 75400,</p>
                <p>Pakistan</p>
              </div>
            </div>
          </div>

          <div className="w-full border-b-[1px] border-white mt-5"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-5">
            <div className="text-base">
              <a href="tel:+923403051059" className="font-semibold">+92 340 3051059</a>
              <a href="mailto:RapidTec@gmail.com" className="block">info@rapidtechpro.com</a>
            </div>

            <div className="flex flex-col md:items-center items-start">
              <p className="text-xl font-bold text-white mb-4 italic">
                Rapid<span className="text-bluish">TechPro</span>
              </p>
              <p className="text-sm text-gray-400">© 2024 RapidTechPro All Rights Reserved</p>
            </div>

            <div className="flex flex-col items-center space-y-4 md:space-y-0">
              {/* Social Icons Section */}
              <div className="flex space-x-4 text-lg mb-6"> {/* Add margin-bottom */}
                <a
                  href="https://www.linkedin.com/in/waqas-umar-5b0678196/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-bluish"
                >
                  <FaLinkedin className="text-2xl" /> {/* Increase icon size */}
                </a>

                <a
                  href="https://www.tiktok.com/search?q=rapidtechpro&t=1733306187819"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="hover:text-bluish"
                >
                  <FaTiktok className="text-2xl" /> {/* TikTok Icon */}
                </a>

                <a
                  href="https://x.com/rapidtechpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="hover:text-bluish"
                >
                  <FaTwitter className="text-2xl" /> {/* Increase icon size */}
                </a>
                <a
                  href="https://www.facebook.com/RapidTechPro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-bluish"
                >
                  <FaFacebook className="text-2xl" /> {/* Increase icon size */}
                </a>
                <a
                  href="https://www.instagram.com/rapidtechpro1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-bluish"
                >
                  <FaInstagram className="text-2xl" /> {/* Increase icon size */}
                </a>
                <a
                  href="https://www.youtube.com/@rapidtechpro1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="hover:text-bluish"
                >
                  <FaYoutube className="text-2xl" /> {/* Increase icon size */}
                </a>
              </div>

              {/* Privacy Policy and Terms Section */}
              <div className="my-6 flex md:flex-row flex-col justify-center items-center gap-4 text-sm md:text-base">
                <a href="/Company/Privacy-Policy" className="hover:text-bluish">
                  Privacy Policy
                </a>
                <a href="/Company/Terms-Of-Service" className="hover:text-bluish">
                  Terms Of Service
                </a>
              </div>
            </div>

          </div>
        </div>

      </footer>

      <footer className="md:hidden flex flex-col bg-black w-full text-white py-12">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            <div>
              <div className="flex gap-2 items-center mb-6">
                <div className="h-3 w-3 bg-bluish rounded-full"></div>
                <h3 className="text-lg text-gray-400">Company</h3>
              </div>
              <ul className="text-base">
                <li><a href="/AboutUs" className="hover:text-bluish">About Us</a></li>
                <li><a href="/Company/Testimonials" className="hover:text-bluish">Testimonials</a></li>
                <li><a href="/Company/Process" className="hover:text-bluish">Process</a></li>
                <li><a href="/Help" className="hover:text-bluish">Contact</a></li>
              </ul>
            </div>

            <div>
              <div className="flex gap-2 items-center mb-6">
                <div className="h-3 w-3 bg-bluish rounded-full"></div>
                <h3 className="text-lg text-gray-400">Resources</h3>
              </div>
              <ul className="text-base">
                {/* <li><a href="/blog" className="hover:text-bluish">Blog</a></li> */}
                <li><a href="/Company/Events" className="hover:text-bluish">Events</a></li>
                <li><a href="/Company/Press-Release" className="hover:text-bluish">Press Release</a></li>
                <li><a href="/Work" className="hover:text-bluish">Inspire Me</a></li>
              </ul>
            </div>

            <div>
              <div className="flex gap-2 items-center mb-6">
                <div className="h-3 w-3 bg-bluish rounded-full"></div>
                <h3 className="text-lg text-gray-400">Services</h3>
              </div>
              <ul className="text-base">
                <li><a href="/Services/Mobile-Apps" className="hover:text-bluish">Mobile App Solutions</a></li>
                <li><a href="/Services/Ecommerce-Solutions" className="hover:text-bluish">Ecommerce Solutions</a></li>
                <li><a href="/Services/Web-Development" className="hover:text-bluish">Website Solutions</a></li>
                <li><a href="/Services/HR-Solution" className="hover:text-bluish">HR Solutions</a></li>
                <li><a href="/Services/Point-Of-Sale" className="hover:text-bluish">POS Solutions</a></li>
                <li><a href="/Services/UIUX-Figma" className="hover:text-bluish">UI/UX Solutions</a></li>
              </ul>
            </div>

            {/* Insights Section */}
            <div>
              <div className="flex gap-2 items-center mb-6">
                <div className="h-3 w-3 bg-bluish rounded-full"></div>
                <h3 className="text-lg text-gray-400">Insights</h3>
              </div>
              <ul className="text-base">
                <li><a href="/Company/Careers" className="hover:text-bluish">Careers</a></li>
                <li><a href="/Company/Manifesto" className="hover:text-bluish">Manifesto</a></li>
                <li><a href="/Company/Culture-Book" className="hover:text-bluish">Culture Book</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-white mt-5"></div>

          {/* Location Section */}
          <div className="mt-5">
            <div className="flex gap-2 items-center mb-6">
              <div className="h-3 w-3 bg-bluish rounded-full"></div>
              <h3 className="text-lg text-gray-400">Locations</h3>
            </div>
            <div className="grid grid-cols-1 gap-8 text-sm">

              <div>
                <p className="text-lg font-semibold mb-2">Dubai</p>
                <p>Building 11, Level 7, Bay Square,</p>
                <p>Business Bay, Dubai - 23304,</p>
                <p>United Arab Emirates</p>
              </div>
              <div>
                <p className="text-lg font-semibold mb-2">Mandi Bahauddin</p>
                <p>54C, Phalia Road, Punjab Center,</p>
                <p>Mandi Bahauddin - 75400,</p>
                <p>Pakistan</p>
              </div>
            </div>
          </div>

          <div className="w-full border-b-[1px] border-white mt-5"></div>

          <div className="flex flex-col gap-8 mt-5">
            <div className="text-base text-center">
              <a href="tel:+923403051059" className="font-semibold block">+92 340 3051059</a>
              <a href="mailto:RapidTec@gmail.com" className="block text-gray-400">info@rapidtechpro.com</a>
            </div>
            <div className="flex flex-col items-center justify-center">
              {/* Social Icons Section */}
              <div className="flex flex-wrap justify-center gap-6 text-lg mb-6"> {/* Use gap instead of space-x for better wrapping */}
                <a
                  href="https://www.linkedin.com/in/waqas-umar-5b0678196/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-bluish"
                >
                  <FaLinkedin className="text-2xl" />
                </a>

                <a
                  href="https://www.tiktok.com/search?q=rapidtechpro&t=1733306187819"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="hover:text-bluish"
                >
                  <FaTiktok className="text-2xl" />
                </a>

                <a
                  href="https://x.com/rapidtechpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="hover:text-bluish"
                >
                  <FaTwitter className="text-2xl" />
                </a>
                <a
                  href="https://www.facebook.com/RapidTechPro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-bluish"
                >
                  <FaFacebook className="text-2xl" />
                </a>
                <a
                  href="https://www.instagram.com/rapidtechpro1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-bluish"
                >
                  <FaInstagram className="text-2xl" />
                </a>
                <a
                  href="https://www.youtube.com/@rapidtechpro1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="hover:text-bluish"
                >
                  <FaYoutube className="text-2xl" />
                </a>
              </div>

              {/* Privacy Policy and Terms Section */}
              <div className="md:my-6 flex md:flex-row  justify-center items-center md:gap-4 gap-3 text-sm md:text-base">
                <a href="/Company/Privacy-Policy" className="hover:text-bluish">
                  Privacy Policy
                </a>
                <a href="/Company/Terms-Of-Service" className="hover:text-bluish">
                  Terms Of Service
                </a>
              </div>
            </div>

          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <p className="text-xl font-bold text-white mb-2 italic w-full text-center ">
              Rapid<span className="text-bluish">TechPro</span>
            </p>
            <p className="text-sm text-gray-400">© 2024 RapidTechPro All Rights Reserved</p>
          </div>
        </div>

      </footer>
    </>
  );
}
