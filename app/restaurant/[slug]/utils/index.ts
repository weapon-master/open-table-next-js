import { prisma } from '@/app/utils/prisma';
import { notFound } from 'next/navigation';

export const getRestaurant = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      slug: true,
      images: true,
      description: true,
      location: true,
      reviews: true,
    },
  });

  if (!restaurant) notFound();
  return restaurant;
};
