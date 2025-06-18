import React from 'react';

const rooms = [
  { name: 'Deluxe Room', desc: 'King size bed, AC, Wi-Fi', price: '$75/night' },
  { name: 'Family Suite', desc: '2 Bedrooms, Kitchenette', price: '$120/night' },
];

export default function Rooms() {
  return (
    <section className="p-10 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-6 text-center">Our Rooms</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {rooms.map((room, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">{room.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{room.desc}</p>
            <p className="text-lg font-bold mt-2">{room.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
