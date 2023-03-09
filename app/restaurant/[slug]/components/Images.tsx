import React from 'react';

interface Props {
  imageUrls: string[];
}

export default function Images({ imageUrls }: Props) {
  return (
    <div>
      <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>
        {imageUrls.length} photo{imageUrls.length > 1 ? 's' : ''}
      </h1>
      <div className='flex flex-wrap'>
        {imageUrls.map((url) => (
          <img key={url} className='w-56 h-44 mr-1 mb-1' src={url} alt='' />
        ))}
      </div>
    </div>
  );
}
