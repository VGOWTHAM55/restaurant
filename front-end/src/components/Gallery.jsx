import React from 'react';

const images = ['/images/food1.jpg', '/images/room1.jpg', '/images/pool.jpg'];

export default function Gallery() {
  return (
    <section className="p-10 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-6 text-center">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img key={i} src={src} alt="Gallery" className="rounded shadow-md w-full h-60 object-cover" />
        ))}
      </div>
    </section>
  );
}
