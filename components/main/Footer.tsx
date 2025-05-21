
import React from "react";
import {
  RxGithubLogo,
  RxLinkedinLogo,
  RxInstagramLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0e0e0e] text-gray-300 p-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">


        

        {/* Section: Socials */}
        <div className="min-w-[200px]">
          
          <h2 className="text-lg font-semibold mb-4">Socials</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.instagram.com/_adi._78/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <RxInstagramLogo size={20} />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aadityasahani78/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <RxLinkedinLogo size={20} />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aaditya7788/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <RxGithubLogo size={20} />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Section: About */}
        <div className="min-w-[200px]">
          <h2 className="text-lg font-semibold mb-4">About</h2>
          <ul className="space-y-3">
            <li className="cursor-pointer hover:text-white">Learn More About Me</li>
            <li>
              <a
                href="mailto:aadityasahani78@gmail.com"
                className="hover:text-white block"
              >
                aadityasahani78@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Aaditya Sahani / Upcoming Dev. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
