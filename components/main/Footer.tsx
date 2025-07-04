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

        {/* Section: Contact */}
        <div className="min-w-[200px]">
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:info@riffai.com"
                className="hover:text-white block"
              >
                info@riffai.com
              </a>
            </li>
            <li className="cursor-pointer hover:text-white">
              Schedule a Demo
            </li>
            <li className="cursor-pointer hover:text-white">
              Partnership Inquiries
            </li>
          </ul>
        </div>

        {/* Section: Solutions */}
        <div className="min-w-[200px]">
          <h2 className="text-lg font-semibold mb-4">Solutions</h2>
          <ul className="space-y-3">
            <li className="cursor-pointer hover:text-white">Environmental Monitoring</li>
            <li className="cursor-pointer hover:text-white">Disaster Management</li>
            <li className="cursor-pointer hover:text-white">Climate Analytics</li>
            <li className="cursor-pointer hover:text-white">Satellite Intelligence</li>
          </ul>
        </div>

        {/* Section: Company */}
        <div className="min-w-[200px]">
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-3">
            <li className="cursor-pointer hover:text-white">About RIFFAI</li>
            <li className="cursor-pointer hover:text-white">Our Technology</li>
            <li className="cursor-pointer hover:text-white">Careers</li>
            <li className="cursor-pointer hover:text-white">Press & Media</li>
          </ul>
        </div>

        {/* Section: Connect */}
        <div className="min-w-[200px]">
          <h2 className="text-lg font-semibold mb-4">Connect</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
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
                href="#"
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
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} RIFFAI. All rights reserved. Bringing space down to earth.
      </div>
    </footer>
  );
};

export default Footer;