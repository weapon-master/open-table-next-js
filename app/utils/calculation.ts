import { Review } from '@prisma/client';

export const calculateAverageRating = (reviews: Review[]) => {
  if (reviews.length === 0) return 0;

  const total = reviews.reduce((acc, review) => acc + review.rating, 0);

  return Math.round((total * 10) / reviews.length) / 10;
};
