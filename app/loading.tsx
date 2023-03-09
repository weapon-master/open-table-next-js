import React from 'react';
import SearchHeader from './components/SearchHeader';

export default function loading() {
  return (
    <main>
      <SearchHeader />
      <div className='py-3 px-36 mt-10 gap-8 flex flex-wrap justify-center'>
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            className='rounded animate-pulse w-64 h-72 bg-gray-300'
            key={i}
          ></div>
        ))}
      </div>
    </main>
  );
}
