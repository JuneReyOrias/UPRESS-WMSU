import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-fuchsia-100 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">

          {/* WMSU UPRESS Logo and Info */}
          <div>
            <a href="/" className="flex items-center mb-4">
              <img src="/images/upress-logo.png" className="h-10 me-3" alt="WMSU UPRESS Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                WMSU UPRESS
              </span>
            </a>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Western Mindanao State University University Press – Empowering knowledge through print and digital publishing.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
            <ul className="text-gray-950 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="https://wmsu.edu.ph/" className="hover:underline">WMSU Official</a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-950 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Partners</h2>
            <ul className="grid grid-cols-3 gap-4">
              <li>
                <a href="http://wmsu.edu.ph/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/OfficialWmsuLogo.png" alt="WMSU" className="h-10 object-contain" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/images/CCSLogo.png" alt="CCS" className="h-10 object-contain" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/images/CS DEPARTMENT LOGO 1.png" alt="CA" className="h-10 object-contain" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/images/upress-logo.png" alt="City Gov" className="h-10 object-contain" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        {/* Bottom footer */}
        <div className="text-center">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            © 2025 <a href="/" className="hover:underline font-semibold">WMSU UPRESS</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
