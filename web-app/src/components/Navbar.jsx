import React, { useState } from 'react';
import { ShoppingCart, Search, Eye, EyeOff } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [loginPasswordVisible, setLoginPasswordVisible] = useState(false);
  const [signupPasswordVisible, setSignupPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [activeLink, setActiveLink] = useState("Home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleForm = () => setIsLogin(!isLogin);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const toggleLoginPasswordVisibility = () => setLoginPasswordVisible(!loginPasswordVisible);
  const toggleSignupPasswordVisibility = () => setSignupPasswordVisible(!signupPasswordVisible);
  const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

  return (
    <div>
      <nav className="fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/images/upress-logo.png" className="h-8 w-8 rounded-xl" alt="Logo" />
            <span className="self-center text-1xl font-semibold whitespace-nowrap dark:text-white">UPRESS</span>
          </a>

          <div className="flex items-center space-x-3 md:space-x-0 rtl:space-x-reverse md:order-2">
            <button onClick={toggleSearch} className="flex items-center gap-2 text-white bg-gray-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-300">
              <Search className="w-4 h-4" />
            </button>

            <button onClick={openModal} className="flex ml-0.5 items-center gap-2 text-white bg-gray-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-300">
              <ShoppingCart className="w-4 h-4" />
              Cart
            </button>

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>

          {isSearchOpen && (
            <div className="absolute top-16 right-16 w-64 p-2 bg-white shadow-md rounded-lg dark:bg-gray-800">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div id="navbar-sticky" className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-white/80 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800/80 md:dark:bg-transparent dark:border-gray-700">
              {[
                { name: "Home", href: "#Home" },
                { name: "Products", href: "#Products" },
                { name: "Services", href: "#Services" },
                { name: "About Us", href: "#AboutUs" },
                { name: "Contact Us", href: "#ContactUs" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className={`block py-2 px-3 rounded-sm md:p-0 ${
                      activeLink === link.name
                        ? "text-white bg-red-800 md:bg-transparent md:text-red-800 dark:text-red-800"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-800 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Your modal (Login/Signup) stays unchanged */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-[url('/images/IntroPage.jpg')]/90 bg-cover bg-center bg-opacity-40">
          <div className="bg-red-100 bg-cover bg-center bg-opacity-40 dark:bg-gray-800 rounded-lg w-96 p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
           {/* Logo Section */}
            <div className="flex justify-center mb-4">
              <img src="/images/upress-logo.png" alt="" className="h-25 w-auto" />
            </div>
            {/* Heading */}
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{isLogin ? 'Login' : 'Sign Up'}</h2>

            {/* Toggle between Login and Sign Up */}
            <div className="flex justify-between mt-4">
              <button
                onClick={toggleForm}
                className={`text-sm font-medium ${isLogin ? 'text-blue-700' : 'text-gray-500'} hover:text-blue-700`}
              >
                {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Log In'}
              </button>
            </div>

            {/* Form (Login or Signup) */}
            {isLogin ? (
              <form className="mt-4">
                <div className="mb-4">
                  <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    id="login-email"
                    className="mt-1 block w-full px-4 py-2 text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="mb-4 relative">
                  <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                  <div className="relative">
                    <input
                      type={loginPasswordVisible ? 'text' : 'password'}
                      placeholder="Enter your password"
                      id="login-password"
                      className="mt-1 block w-full px-4 py-2 text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={toggleLoginPasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300"
                    >
                      {loginPasswordVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800">Log In</button>
              </form>
            ) : (
              <form className="mt-4">
                <div className="mb-4 flex space-x-4">
                  <div className="w-1/2">
                    <label htmlFor="signup-first-name" className="block text-sm font-medium text-black dark:text-gray-950">First Name</label>
                    <input
                      type="text"
                      id="signup-first-name"
                      className="mt-1 block w-full px-4 py-2 text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="signup-last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                    <input
                      type="text"
                      id="signup-last-name"
                      className="mt-1 block w-full px-4 py-2 text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    id="signup-email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full px-4 py-2 text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="mb-4 relative">
                  <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                  <div className="relative">
                    <input
                      type={signupPasswordVisible ? 'text' : 'password'}
                      id="signup-password"
                      placeholder="Enter your password"
                      className="mt-1 block w-full px-4 py-2 text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={toggleSignupPasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300"
                    >
                      {signupPasswordVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="mb-4 relative">
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm Password</label>
                  <div className="relative">
                    <input
                      type={confirmPasswordVisible ? 'text' : 'password'}
                      id="confirm-password"
                      placeholder="Confirm your password"
                      className="mt-1 block w-full px-4 py-2 text-sm text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300"
                    >
                      {confirmPasswordVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800">Sign Up</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
