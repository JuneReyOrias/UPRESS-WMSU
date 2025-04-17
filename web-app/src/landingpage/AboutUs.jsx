function AboutUs() {
    return (
      <>
        {/* Hero Section */}
        <section id="AboutUs" className="bg-center bg-no-repeat bg-[url('/images/wmsu.jpg')] bg-gray-600 bg-blend-multiply">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              WMSU UPRESS
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              The WMSU University Press is dedicated to producing high-quality academic and creative publications that reflect the culture, values, and intellectual spirit of the university. We offer a range of products and services that promote learning, creativity, and institutional identity.
            </p>
          </div>
        </section>
  
        {/* Content Section */}
        <section className="bg-red-100 dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            {/* Main card */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
              <div className="bg-red-100 text-red-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-red-400 mb-2">
                About Us
              </div>
              <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
                Empowering Ideas through Print
              </h1>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                WMSU UPRESS serves as the official publishing arm of Western Mindanao State University. We publish books, journals, and academic resources, and provide specialized services such as layout, printing, bookbinding, and promotional items. Our mission is to support the academic community through high-standard publishing and accessible creative services.
              </p>
            </div>
  
            {/* Grid Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <div className="bg-green-100 text-green-800 text-2xl font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                  Mission
                </div>
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                  Cultivating a Culture of Learning and Innovation
                </h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                  WMSU commits to creating a vibrant atmosphere of learning where science, technology, innovation, research, the arts and humanities, and community engagement flourish. We aim to produce world-class professionals committed to sustainable development and peace.
                </p>
              </div>
  
              {/* Vision Card */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                <div className="bg-purple-100 text-purple-800 text-2xl font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                  Vision
                </div>
                <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                  Toward 2040: A Smart Research University
                </h2>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                  By 2040, WMSU envisions itself as a Smart Research University generating competent professionals and global citizens. Through knowledge grounded in science and liberal education, we strive to empower communities, promote peace, harmony, and cultural diversity.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default AboutUs;
  