import { useState } from "react";

const ProductCategory = [
  { src: "/Products/Mug.jpg", alt: "Mug1", category: "Mug", title: "Personalize Name Mug", price: "Php 29.99", link: "/product/cloth1", isNew: true },
  { src: "/Products/Mug.jpg", alt: "Mug2", category: "Mug", title: "Faculty/Departmental Mug", price: "Php 34.99", link: "/product/Mug2", isNew: false },
  { src: "/Products/Mug.jpg", alt: "Mug3", category: "Mug", title: "Event/Commemorative Mug", price: "Php 39.99", link: "/product/Mug3", isNew: false },
  { src: "/Products/Mug.jpg", alt: "Mug4", category: "Mug", title: "Souvenir Mug", price: "Php 44.99", link: "/product/cloth4", isNew: false },
  { src: "/Products/Customize Tubler.jpg", alt: "Tumbler1", category: "Tubler", title: "University-Themed Stickers", price: "Php 49.99", link: "/product/bottoms1", isNew: true },
  { src: "/Products/Customize Tubler.jpg", alt: "Tumbler2", category: "Tubler", title: "Customized Name Stickers", price: "Php 54.99", link: "/product/bottoms2", isNew: false },
  { src: "/Products/Customize Tubler.jpg", alt: "Tumbler3", category: "Tubler", title: "Event & Organization Stickers", price: "Php 59.99", link: "/product/bottoms3", isNew: false },
  { src: "/Products/Customize Tubler.jpg", alt: "Tumbler4", category: "Tubler", title: "Inspirational Quotes", price: "Php 64.99", link: "/product/bottoms4", isNew: false },
  { src: "/Products/Lanyard.jpg", alt: "Lanyard2", category: "Lanyard", title: "Official WMSU Logo Lanyards", price: "Php 50.99", link: "/product/bottoms2", isNew: true },
  { src: "/Products/Lanyard.jpg", alt: "Lanyard3", category: "Lanyard", title: "Custom Department Lanyards", price: "Php 53.99", link: "/product/bottoms3", isNew: false },
  { src: "/Products/Lanyard.jpg", alt: "Lanyard4", category: "Lanyard", title: "Event/Conference Lanyards", price: "Php 64.00", link: "/product/bottoms4", isNew: false },
  { src: "/Products/IdHolder.jpg", alt: "IdHolder1", category: "ID Holder", title: "Standard PVC ID Holders", price: "Php 50.99", link: "/product/bottoms2", isNew: true },
  { src: "/Products/IdHolder.jpg", alt: "IdHolder2", category: "ID Holder", title: "Vertical Hard Plastic Holders", price: "Php 53.99", link: "/product/bottoms3", isNew: false },
  { src: "/Products/IdHolder.jpg", alt: "IdHolder3", category: "ID Holder", title: "Retractable ID Badge Holders", price: "Php 64.00", link: "/product/bottoms4", isNew: false },
];

function CategoryProd() {
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
      <div
        key={index}
        className="relative category-item p-2 flex flex-col justify-center items-center text-center animate-fadeIn"
      >
        {item.isNew && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            New
          </span>
        )}
        <a href={item.link} className="block">
          <img className="w-40 h-40 object-contain" src={item.src} alt={item.alt} />
          <h3 className="mt-2 text-lg font-medium text-gray-800">{item.title}</h3>
          <p className="text-gray-600">{item.price}</p>
        </a>
      </div>
    ));

  return (
    <div id="Products" className="mb-1 bg-fuchsia-100 pb-8" data-animate>
      <p className="mb-4 pt-14 text-2xl tracking-tight text-center text-gray-950 opacity-90 animate-fadeIn">
        These are the products available in various categories
      </p>

      {/* Filter Buttons */}
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap" id="Project" data-animate>
        {["all", "Mug", "Tubler", "Lanyard", "ID Holder"].map((filter) => (
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
        <h2 className="text-xl font-semibold text-gray-800 mb-3 animate-fadeIn">Latest Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-4">
          {renderProducts(filteredItems(true))}
        </div>
      </div>

      {/* Existing Products */}
      <div className="px-4 md:px-12 mt-10" data-animate>
        <h2 className="text-xl font-semibold text-gray-800 mb-3 animate-fadeIn">Existing Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-4">
          {renderProducts(filteredItems(false))}
        </div>
      </div>
    </div>
  );
}

export default CategoryProd;
