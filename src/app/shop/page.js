import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Shop() {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "CLUB SHIRT",
      brand: "PODIUM TKC",
      price: "29.99"
    },
    {
      id: 2,
      name: "CLUB HOODIE",
      brand: "PODIUM TKC",
      price: "39.99"
    },
    {
      id: 3,
      name: "PODIUM TKC JACKET",
      brand: "PODIUM TKC",
      price: "59.99"
    },
    {
      id: 4,
      name: "RACING CAP",
      brand: "PODIUM TKC",
      price: "24.99"
    },
    {
      id: 5,
      name: "TRACK PANTS",
      brand: "PODIUM TKC",
      price: "49.99"
    }
  ];

  return (
    <div className="min-h-screen bg-[#DEDEDE]">
      <Header />
      
      {/* Shop Section */}
      <div className="bg-[#DEDEDE] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Title - Left Aligned */}
          <h1 className="text-black uppercase font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-left mb-12">
            SHOP PODIUM TKC
          </h1>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <Link key={product.id} href={`/shop/${product.id}`} className="bg-gray-100 cursor-pointer">
                {/* Image Placeholder */}
                <div className="w-full aspect-square bg-white"></div>
                
                {/* Product Details */}
                <div className="p-4 space-y-1">
                  <h3 className="text-black uppercase font-black text-lg">
                    {product.name}
                  </h3>
                  <p className="text-black text-sm uppercase font-normal">
                    {product.brand}
                  </p>
                  <p className="text-black font-black text-xl mt-2">
                    {product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
