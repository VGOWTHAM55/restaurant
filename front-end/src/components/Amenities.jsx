import React from 'react';

const amenities = ['Swimming Pool', 'Children`s Park', 'Playground', 'Live Music', 'Open Air Seating'];

export default function Amenities() {
  return (
    <section className="p-10">
      <h2 className="text-4xl font-bold mb-6 text-center">Amenities</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {amenities.map((item, i) => (
          <li key={i} className="bg-white dark:bg-gray-800 p-4 rounded shadow text-center">{item}</li>
        ))}
      </ul>
    </section>
  );
}
