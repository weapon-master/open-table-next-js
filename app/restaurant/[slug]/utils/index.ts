import { prisma } from "@/app/utils/prisma";

export const getRestaurant = async (slug: string) =>
  prisma.restaurant.findUnique({
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
    },
  });
