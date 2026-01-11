'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from 'next/link';

// Product data - in a real app, this would come from an API or database
const products = {
  1: {
    id: 1,
    name: "CLUB SHIRT",
    brand: "PODIUM TKC",
    price: "29.99",
    rating: 4.5,
    reviews: 12,
    colors: ["Black", "White"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"]
  },
  2: {
    id: 2,
    name: "CLUB HOODIE",
    brand: "PODIUM TKC",
    price: "39.99",
    rating: 4.5,
    reviews: 12,
    colors: ["Black", "White"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"]
  },
  3: {
    id: 3,
    name: "PODIUM TKC JACKET",
    brand: "PODIUM TKC",
    price: "59.99",
    rating: 4.5,
    reviews: 12,
    colors: ["Black", "White"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"]
  },
  4: {
    id: 4,
    name: "RACING CAP",
    brand: "PODIUM TKC",
    price: "24.99",
    rating: 4.5,
    reviews: 12,
    colors: ["Black", "White"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"]
  },
  5: {
    id: 5,
    name: "TRACK PANTS",
    brand: "PODIUM TKC",
    price: "49.99",
    rating: 4.5,
    reviews: 12,
    colors: ["Black", "White"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"]
  }
};

export default function ProductDetail() {
  const params = useParams();
  const productId = parseInt(params.id);
  const product = products[productId];

  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#DEDEDE]">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-black text-xl">Product not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  const handleQuantityChange = (delta) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  return (
    <div className="min-h-screen bg-[#DEDEDE]">
      <Header />
      
      {/* Product Detail Section */}
      <div className="bg-[#DEDEDE] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:flex gap-8">
            {/* Left Side - Image Gallery (60%) */}
            <div className="w-[60%]">
              <div className="grid grid-cols-[160px_1fr] gap-4">

                {/* Thumbnail Gallery (Left) */}
                <div className="grid gap-4" style={{ gridTemplateRows: 'repeat(3, 1fr)' }}>
                  <div className="bg-white border border-gray-300"></div>
                  <div className="bg-white border border-gray-300"></div>
                  <div className="bg-white border border-gray-300"></div>
                </div>
                
                {/* Main Image (Right) */}
                <div className="aspect-square">
                  <div className="w-full h-full bg-white border border-gray-300"></div>
                </div>
              </div>
            </div>

            {/* Right Side - Product Info (40%) */}
            <div className="w-[40%] bg-[#DEDEDE] p-8">
              {/* Product Title */}
              <h1 className="text-black uppercase font-black text-4xl mb-2">
                {product.name}
              </h1>
              
              {/* Brand */}
              <p className="text-black uppercase text-base mb-4">
                {product.brand}
              </p>
              
              {/* Price */}
              <p className="text-black font-black text-5xl mb-6">
                {product.price}
              </p>
              
              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 fill-[#60A5FA]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-black text-sm">{product.reviews} Reviews</span>
              </div>
              
              {/* Divider */}
              <div className="border-t border-gray-400 mb-6"></div>
              
              {/* Color Selector */}
              <div className="mb-6">
                <p className="text-black uppercase font-bold mb-3 text-sm">Color: {selectedColor}</p>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 ${
                        selectedColor === color
                          ? 'border-black'
                          : 'border-gray-400'
                      } ${
                        color === 'Black' ? 'bg-black' : 'bg-white'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Size Selector */}
              <div className="mb-6">
                <p className="text-black uppercase font-bold mb-3 text-sm">Size: {selectedSize}</p>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border text-sm ${
                        selectedSize === size
                          ? 'bg-gray-400 border-gray-500'
                          : 'bg-white border-gray-300'
                      } text-black uppercase font-normal`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity and Checkout */}
              <div className="flex gap-4 items-center">
                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-300 bg-white">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-4 py-2 border-r border-gray-300 text-black font-bold text-lg"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 text-black font-bold text-lg">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-4 py-2 border-l border-gray-300 text-black font-bold text-lg"
                  >
                    +
                  </button>
                </div>
                
                {/* Checkout Button */}
                <button className="flex-1 bg-[#60A5FA] text-white uppercase font-black py-3 px-6">
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Main Image */}
            <div className="w-full aspect-square bg-white border border-gray-300 mb-4"></div>
            
            {/* Thumbnail Gallery */}
            <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
              {[1, 2, 3].map((index) => (
                <div key={index} className="w-20 h-20 flex-shrink-0 bg-white border border-gray-300"></div>
              ))}
            </div>
            
            {/* Product Info */}
            <div className="bg-[#D4D4D4] p-6">
              {/* Product Title */}
              <h1 className="text-black uppercase font-black text-3xl mb-2">
                {product.name}
              </h1>
              
              {/* Brand */}
              <p className="text-black uppercase text-sm mb-3">
                {product.brand}
              </p>
              
              {/* Price */}
              <p className="text-black font-black text-4xl mb-5">
                {product.price}
              </p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 fill-[#60A5FA]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-black text-xs">{product.reviews} Reviews</span>
              </div>
              
              {/* Divider */}
              <div className="border-t border-gray-400 mb-5"></div>
              
              {/* Color Selector */}
              <div className="mb-5">
                <p className="text-black uppercase font-bold mb-2 text-xs">Color: {selectedColor}</p>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color
                          ? 'border-black'
                          : 'border-gray-400'
                      } ${
                        color === 'Black' ? 'bg-black' : 'bg-white'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Size Selector */}
              <div className="mb-5">
                <p className="text-black uppercase font-bold mb-2 text-xs">Size: {selectedSize}</p>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 border text-xs ${
                        selectedSize === size
                          ? 'bg-gray-400 border-gray-500'
                          : 'bg-white border-gray-300'
                      } text-black uppercase font-normal`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity and Checkout */}
              <div className="flex gap-3 items-center">
                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-300 bg-white">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-3 py-2 border-r border-gray-300 text-black font-bold text-sm"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-black font-bold text-sm">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-3 py-2 border-l border-gray-300 text-black font-bold text-sm"
                  >
                    +
                  </button>
                </div>
                
                {/* Checkout Button */}
                <button className="flex-1 bg-[#60A5FA] text-white uppercase font-black py-2.5 px-4 text-sm">
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}