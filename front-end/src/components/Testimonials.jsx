import React from 'react';

const reviews = [
  { name: 'Amit', text: 'Amazing food and beautiful ambiance!' },
  { name: 'Sara', text: 'Loved the rooms and the swimming pool.' },
];

export default function Testimonials() {
  return (
    <section className="p-10">
      <h2 className="text-4xl font-bold mb-6 text-center">What Our Guests Say</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <p className="italic mb-2">"{r.text}"</p>
            <p className="font-bold">– {r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
