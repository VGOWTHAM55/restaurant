import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen bg-[url('/images/hero.jpg')] bg-cover bg-center flex items-center justify-center">
      <div className="bg-black bg-opacity-60 p-10 rounded-xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Welcome to Paradise Dine & Stay</h1>
        <p className="text-lg md:text-2xl text-gray-200">Delicious Food, Cozy Rooms, and Memorable Experiences</p>
      </div>
    </section>
  );
}