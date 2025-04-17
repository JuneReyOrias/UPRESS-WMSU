import { useState, useEffect } from "react";
import TopProduct from "./Products";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const images = [
    {
      src: "/Products/Mug.jpg",
      title: "Products",
      description: "Discover customized merchandise like mugs, shirts, and tote bags perfect for gifts, events, or institutional branding.",
    },
    {
      src: "/OfferServices/BookBind.jpg",
      title: "Services",
      description: "Offering expert printing, layout, and bookbinding solutions tailored for academic and creative publishing—available by appointment.",
    },
  ];

  const homeslider = [
    {
      src: "/Products/Mug.jpg",
      title: "Events",
      description: "Discover customized merchandise like mugs, shirts, and tote bags perfect for gifts, events, or institutional branding.",
    },
    {
      src: "/OfferServices/BookBind.jpg",
      title: "UPRESS WMSU Celebration",
      description: "Offering expert printing, layout, and bookbinding solutions tailored for academic and creative publishing—available by appointment.",
    },
  ];

  const products = [
    { category: "products", name: "UPRESS Mug", description: "A unique design of mug", image: "/Products/Mug.jpg", price: 80 },
    { category: "products", name: "ID Holder", description: "Adorable and flexible id holder", image: "/Products/IdHolder.jpg", price: 70 },
    { category: "products", name: "Lanyard", description: "Soft cotton t-shirt", image: "/Products/Lanyard.jpg", price: 90 },
    { category: "products", name: "UPRESS Tumbler", description: "Customizable tumbler", image: "/Products/Customize Tubler.jpg", price: 60 },
    { category: "services", name: "Printing", description: "High-quality printing for flyers, brochures, and posters. *Appointment only.*", image: "/OfferServices/Printing.jpg" },
    { category: "services", name: "Layout", description: "Professional layout for academic and promotional materials. *Appointment only.*", image: "/OfferServices/Layout.jpg" },
    { category: "services", name: "BookBind", description: "Elegant bookbinding for theses and journals. *Appointment only.*", image: "/OfferServices/BookBind.jpg" },
  ];

  useEffect(() => {
    const autoplay = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 5000);
    return () => clearInterval(autoplay);
  }, [isHovered, images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      {/* HERO BANNER */}
      <section id="Home" className="relative w-full h-[500px] bg-black">
        <div className="relative w-full h-full transition-all duration-500 ease-in-out">
          {homeslider.map((homeslide, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out absolute w-full h-full ${
                index === currentIndex ? "block opacity-100" : "hidden opacity-0"
              } transition-opacity`}
            >
              <img
                src={homeslide.src}
                className="absolute top-0 left-1/2 w-full h-full object-cover transform -translate-x-1/2 transition-transform duration-700 hover:scale-110"
                alt={`Carousel homeslide ${index + 1}`}
              />
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-6 bg-black/50 text-white rounded-lg shadow-xl max-w-xs">
                <h2 className="text-2xl font-bold mb-4">{homeslide.title}</h2>
                <span
                  className="text-lg font-semibold text-sky-400 cursor-pointer"
                  onClick={() => {
                    setSelectedCategory(homeslide.title.toLowerCase());
                    setShowModal(true);
                  }}
                >
                  View Details
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-center bg-cover bg-[url('/images/wmsu.jpg')] bg-gray-600 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            WMSU UPRESS
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            WMSU UPRESS is the official publishing and creative services hub of Western Mindanao State University, delivering high-quality printing, layout, and bookbinding. From academic publications to personalized merchandise, we bring your ideas to life.
          </p>
        </div>
      </section>

      {/* CAROUSEL */}
      <div className="min-h-screen bg-fuchsia-100 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 gap-10">
        <div className="w-full md:w-1/2 text-left">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Publication
            </span>{" "}
            Solutions
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl max-w-xl">
            {images[currentIndex].description}
          </p>
        </div>

        <div
          className="relative w-full md:w-1/2 h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-xl overflow-hidden shadow-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full h-full transition-all duration-500 ease-in-out">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full ${index === currentIndex ? "block opacity-100" : "hidden opacity-0"} transition-opacity duration-700`}
              >
                <img
                  src={image.src}
                  className="absolute top-0 left-1/2 w-full h-full object-cover rounded-xl transform -translate-x-1/2 hover:scale-110 transition-transform duration-700"
                  alt={`Carousel Image ${index + 1}`}
                />
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-6 bg-black/50 text-white rounded-lg shadow-xl max-w-xs">
                  <h2 className="text-2xl font-bold mb-4">{image.title}</h2>
                  <span
                    className="text-lg font-semibold text-sky-400 cursor-pointer"
                    onClick={() => {
                      setSelectedCategory(image.title.toLowerCase());
                      setShowModal(true);
                    }}
                  >
                    View Details
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="absolute z-30 flex -translate-x-1/2 space-x-3 bottom-5 left-1/2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-4 h-4 rounded-full ${index === currentIndex ? "bg-sky-500 scale-125" : "bg-gray-300 hover:bg-sky-400"}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>

          <button onClick={handlePrev} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 group hover:bg-black/30">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white group-hover:bg-black/70">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 6 10">
                <path d="M5 1L1 5l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>

          <button onClick={handleNext} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 group hover:bg-black/30">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white group-hover:bg-black/70">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 6 10">
                <path d="m1 9 4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* TOP PRODUCT SECTION */}
      <div className="bg-fuchsia-100 py-12 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Top Picks Just for You</h2>
        <TopProduct />
      </div>

      {/* CATEGORY MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full relative overflow-hidden">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 capitalize text-gray-800">
              {selectedCategory} UPRESS
            </h2>
            <div className="overflow-y-auto max-h-[70vh]">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products
                  .filter((product) => product.category === selectedCategory)
                  .map((product, idx) => (
                    <div
                      key={idx}
                      className="bg-white border rounded-xl p-4 shadow hover:shadow-lg flex flex-col justify-between h-full"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-50 h-48 object-contain rounded mb-3"
                      />
                      <div className="flex flex-col gap-3 flex-grow">
                        <h3 className="font-semibold text-lg text-gray-700">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.description}</p>

                        {product.category === "products" ? (
                          <>
                            <p className="text-sky-500 font-bold">PHP {product.price.toFixed(2)}</p>
                            <button className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 rounded-lg transition-all w-full">
                              Add to Cart
                            </button>
                          </>
                        ) : (
                          <button className="mt-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded-lg transition-all w-full">
                            Appointment
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
