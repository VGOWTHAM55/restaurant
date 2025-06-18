import React from 'react';

const foodItems = [
  { name: 'Grilled Salmon', desc: 'Freshly grilled with herbs.', price: '$18' },
  { name: 'Organic Veg Platter', desc: 'Locally sourced veggies.', price: '$12' },
  { name: 'Chocolate Lava Cake', desc: 'Warm and gooey dessert.', price: '$8' },
];

export default function Menu() {
  return (
    <section className="p-10">
      <h2 className="text-4xl font-bold mb-6 text-center">Our Food</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {foodItems.map((item, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            <p className="text-lg font-bold mt-2">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
