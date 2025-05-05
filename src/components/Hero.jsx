import React from "react";

function Hero() {
  return (
    <div className="relative h-screen bg-[url('https://th.bing.com/th/id/R.d2b2cb4503e089484ac43ba9e779efc1?rik=6z2DmXVlwjjp7Q&pid=ImgRaw&r=0')] bg-cover bg-center flex items-center justify-start pl-16">
  {/* Left black transparent overlay */}
  <div className="absolute flex top-0 left-0 h-full w-full bg-linear-to-r from-black/100 to-black/10"></div>
      <div className=" text-left z-10 p-10 rounded shadow-lg max-w-xl">
        <h1 className="text-5xl font-bold mb-4 text-blue-50 ">Welcome to Our Store</h1>
        <p className="text-lg mb-6 text-white">Discover the Best in Quality and Value
        Welcome to our store — your one-stop destination for premium products at unbeatable prices. 
        Whether you're shopping for everyday essentials or unique finds, our curated selection offers something for everyone. 
        Enjoy a seamless shopping experience with reliable service, secure checkout, and fast delivery.
          Click below to browse our products.</p>
        <a
          href="/products"
          className="inline-block bg-red-700 text-white px-6 py-2 rounded hover:bg-green-800 transition"
        >
          Browse Products
        </a>
      </div>
    </div>
  );
}

export default Hero;