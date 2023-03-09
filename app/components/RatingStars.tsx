import Image from 'next/image';
import { Review } from '@prisma/client';
import React, { useMemo } from 'react';
import emptyStar from '../../public/icons/empty-star.png';
import fullStar from '../../public/icons/full-star.png';
import halfStar from '../../public/icons/half-star.png';
import { calculateAverageRating } from '../utils/calculation';

interface Props {
  reviews: Review[];
}

export default function RatingStars({ reviews }: Props) {
  const rating = useMemo(() => calculateAverageRating(reviews), [reviews]);
  const fullStarsCount = Math.floor(rating);
  const halfStarsCount = Math.floor(rating) !== rating ? 1 : 0;
  const emptyStarsCount = 5 - fullStarsCount - halfStarsCount;
  if (reviews.length === 0) return null;
  return (
    <div className='flex items-center justify-between w-16'>
      {[...Array(fullStarsCount)].map((_, i) => (
        <Image width={12} height={12} key={i} src={fullStar} alt='full star' />
      ))}
      {[...Array(halfStarsCount)].map((_, i) => (
        <Image width={12} height={12} key={i} src={halfStar} alt='half star' />
      ))}
      {[...Array(emptyStarsCount)].map((_, i) => (
        <Image
          width={12}
          height={12}
          key={i}
          src={emptyStar}
          alt='empty star'
        />
      ))}
    </div>
  );
}
