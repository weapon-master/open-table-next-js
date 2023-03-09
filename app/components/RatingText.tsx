import { Review } from '@prisma/client';
import React, { useMemo } from 'react';
import { calculateAverageRating } from '../utils/calculation';

interface Props {
  reviews: Review[];
}
export default function RatingText({ reviews }: Props) {
  const rating = useMemo(() => calculateAverageRating(reviews), [reviews]);
  const text = useMemo(() => {
    if (rating < 2) {
      return 'Poor';
    }
    if (rating < 3) {
      return 'Fair';
    }
    if (rating < 4) {
      return 'Average';
    }
    if (rating < 5) {
      return 'Good';
    }
    return 'Awsome';
  }, [rating]);
  if (!rating) return null;
  return <div>{text}</div>;
}
