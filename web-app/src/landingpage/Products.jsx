import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Mug",
    price: "Php 49.99",
    image: "/Products/Mug.jpg",
  },
  {
    id: 2,
    title: "ID Holder",
    price: "Php 19.99",
    image: "/Products/IdHolder.jpg",
  },
  {
    id: 3,
    title: "Lanyard",
    price: "Php 59.99",
    image: "/Products/Lanyard.jpg",
  },
  {
    id: 4,
    title: "Tubler",
    price: "Php 29.99",
    image: "/Products/Customize Tubler.jpg",
  },
  {
    id: 5,
    title: "New Tote Bag",
    price: "Php 29.99",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  },
  {
    id: 7,
    title: "Retro Watch",
    price: "Php 89.99",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  },
];

function TopProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasEntered, setHasEntered] = useState(false); // State for animation trigger

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasEntered(true); // Trigger animation after 300ms
    }, 300); // Delay for a smoother transition

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div
      className={`relative w-full max-w-screen-xl mx-auto mt-12 bg-gradient-to-r from-pink-500 via-red-500 to-red-500 py-12 rounded-xl shadow-xl ${
        hasEntered ? "enter-animation" : "" // Add animation class conditionally
      }`}
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Top Products
      </h2>

      {/* Carousel Wrapper */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute top-1/2 left-1/2 w-[280px] sm:w-[320px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-in-out transform ${
              index === activeIndex
                ? "opacity-100 z-20 scale-105"
                : "opacity-0 z-10 scale-95"
            }`}
            data-carousel-item={index === activeIndex ? "active" : ""}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-52 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
              <p className="text-lg font-bold text-pink-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        type="button"
        className="absolute top-1/2 left-4 -translate-y-1/2 z-30 flex items-center justify-center h-12 w-12 rounded-full bg-white/50 hover:bg-white/80 shadow-lg transition-all"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        type="button"
        className="absolute top-1/2 right-4 -translate-y-1/2 z-30 flex items-center justify-center h-12 w-12 rounded-full bg-white/50 hover:bg-white/80 shadow-lg transition-all"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === activeIndex ? "bg-white scale-150" : "bg-gray-400"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default TopProductCarousel;
