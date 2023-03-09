'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';

export default function Searchbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [city, setCity] = useState(searchParams.get('city') || '');
  const [cuisine, setCuisine] = useState(searchParams.get('cuisine') || '');
  const [price, setPrice] = useState(searchParams.get('price') || '');
  const onKwChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  }, []);
  const onSearch = useCallback(() => {
    if (!city) {
      return;
    }
    router.push(`/search?city=${city}`);
  }, [city, router]);
  useEffect(() => {
    setCity(searchParams.get('city') || '');
    setCuisine(searchParams.get('cuisine') || '');
    setPrice(searchParams.get('price') || '');
  }, [searchParams]);
  return (
    <div className='text-left text-lg py-3 m-auto flex justify-center'>
      <input
        className='rounded  mr-3 p-2 w-[450px]'
        type='text'
        placeholder='State, city or town'
        value={city}
        onChange={onKwChange}
      />
      <button
        className='rounded bg-red-600 px-9 py-2 text-white'
        onClick={onSearch}
      >
        Let&apos;s go
      </button>
    </div>
  );
}
