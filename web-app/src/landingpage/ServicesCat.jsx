import { useState } from "react";

const ProductCategory = [
  { src: "/OfferServices/Layout.jpg", alt: "Layout1", category: "Layout", title: "Layout 1", price: "Php 129.99", link: "/product/cloth1", isNew: true },
  { src: "/OfferServices/Layout.jpg", alt: "Layout2", category: "Layout", title: "Layout 2", price: "Php 134.99", link: "/product/Layout2", isNew: false },
  { src: "/OfferServices/Layout.jpg", alt: "Layout2", category: "Layout", title: " Layout 3", price: "Php 134.99", link: "/product/Mug2", isNew: false },
 
  { src: "/OfferServices/Printing.jpg", alt: "Printing3", category: "Printing", title: "Printing Color", price: "Php 39.99", link: "/product/Printing3", isNew: true },
  { src: "/OfferServices/Printing.jpg", alt: "Printing4", category: "Printing", title: "Printing Black &White", price: "Php 44.99", link: "/product/cloth4", isNew: false },

 
  { src: "/OfferServices/BookBind.jpg", alt: "BookBind2", category: "BookBind", title: "BookBind 1", price: "Php 54.99", link: "/product/bottoms2", isNew: true },
  { src: "/OfferServices/BookBind.jpg", alt: "BookBind3", category: "BookBind", title: "BookBind 2", price: "Php 59.99", link: "/product/bottoms3", isNew: false },
  { src: "/OfferServices/BookBind.jpg", alt: "BookBind4", category: "BookBind", title: "BookBind 3", price: "Php 64.99", link: "/product/bottoms4", isNew: false },
 
];

function ServicesCat() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredItems = (isNew) =>
    activeFilter === "all"
      ? ProductCategory.filter((item) => item.isNew === isNew)
      : ProductCategory.filter((item) => item.category === activeFilter && item.isNew === isNew);

  const renderProducts = (items) =>
    items.map((item, index) => (
      <div key={index} className="relative category-item p-2 flex flex-col justify-center items-center text-center">
        {item.isNew && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            New
          </span>
        )}
        <a href={item.link} className="block">
          <img className="w-40 h-40 object-contain" src={item.src} alt={item.alt} />
          <h3 className="mt-2 text-lg font-medium text-gray-800">{item.title}</h3>
          {/* <p className="text-gray-600">{item.price}</p> */}
        </a>
      </div>
    ));

  return (
    <div id="Services" className="mb-1 bg-fuchsia-100 pb-8" data-animate>
      <p className="mb-4 pt-14 text-2xl tracking-tight text-center text-gray-950 opacity-90">
        These are the services available in various categories
      </p>

      {/* Filter Buttons */}
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap" id="Project" data-animate>
        {["all", "Layout", "Printing", "BookBind"].map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`filter-btn ${
              activeFilter === filter
                ? "bg-gray-400/90 text-gray-950"
                : "text-gray-950 border border-slate-400 hover:border-gray-200"
            } focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3`}
          >
            {filter === "all" ? "All Categories" : filter}
          </button>
        ))}
      </div>

      {/* Latest Products */}
      <div className="px-4 md:px-12" data-animate>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Latest Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-4">
          {renderProducts(filteredItems(true))}
        </div>
      </div>

      {/* Existing Products */}
      <div className="px-4 md:px-12 mt-10" data-animate>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Existing Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-4">
          {renderProducts(filteredItems(false))}
        </div>
      </div>
    </div>
  );
}

export default ServicesCat;


