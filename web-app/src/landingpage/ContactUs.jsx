function ContactUs() {
    return (
      <>
        <section
          id="ContactUs"
          className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] relative"
        >
          <div className="py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-20 z-10 relative">
            <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-red-800 md:text-5xl lg:text-6xl dark:text-white">
              Contact WMSU UPRESS
            </h1>
            <p className="mb-8 text-lg font-medium text-gray-600 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-300">
              Have questions about our publishing services, book availability, or product customization? Reach out to us — we’re here to help!
            </p>
  
            <div className="max-w-2xl mx-auto text-left text-gray-700 dark:text-gray-300">
              <p className="mb-4">
                📍 <strong>Location:</strong> WMSU University Press, Normal Road, Baliwasan, Zamboanga City, Philippines
              </p>
              <p className="mb-4">
                ✉️ <strong>Email:</strong>{" "}
                <a
                  href="mailto:upress@wmsu.edu.ph"
                  className="text-blue-700 hover:underline dark:text-blue-400"
                >
                  upress@wmsu.edu.ph
                </a>
              </p>
              <p className="mb-4">
                📞 <strong>Phone:</strong>{" "}
                <a
                  href="tel:+639XXXXXXXXX"
                  className="text-blue-700 hover:underline dark:text-blue-400"
                >
                  +63 9XX XXX XXXX
                </a>
              </p>
            </div>
  
            <form className="w-full max-w-md mx-auto mt-8">
              <label htmlFor="contact-email" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="contact-email"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-red-600 focus:border-red-600 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600"
                  placeholder="Enter your email here..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="bg-gradient-to-b from-red-100 to-transparent dark:from-gray-800 w-full h-full absolute top-0 left-0 z-0"></div>
        </section>
      </>
    );
  }
  
  export default ContactUs;
  