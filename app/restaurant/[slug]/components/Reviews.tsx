import { Review } from '@prisma/client';
import React from 'react';
import ReviewCard from './ReviewCard';

interface Props {
  reviews: Review[];
}

export default function Reviews({ reviews }: Props) {
  return (
    <div>
      <h1 className='font-bold text-3xl mt-10 mb-7 borber-b pb-5'>
        What {reviews.length} people are saying
      </h1>
      <div>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
