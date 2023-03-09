'use client';
import React from 'react';
import errorMascot from '@/public/icons/error.png';
import Image from 'next/image';
export default function Error({ error }: { error: Error }) {
  return (
    <div className='h-screen bg-gray-200 flex flex-col justify-center items-center'>
      <Image src={errorMascot} width={256} alt='error mascot' />
      <div className='bg-white px-9 py-14 shadow rounded'>
        <h3 className='text-2xl font-bold'>Well, this is embarrassing</h3>
        <p className='text-reg font-bold'>{'Not Found'}</p>
        <p className='mt-6 text-sm font-light'>Error Code: {404}</p>
      </div>
    </div>
  );
}
