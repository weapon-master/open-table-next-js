import Menu from '../components/Menu';
import RestaurantNavbar from '../components/RestaurantNavbar';
import { prisma } from '@/app/utils/prisma';

const getRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });
  if (!restaurant) {
    throw new Error('Restaurant not found');
  }
  return restaurant.items;
};

export default async function RestaurantMenu({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const menu = await getRestaurantMenu(slug);
  return (
    <div className='bg-white w-[100%] rounded p-3 shadow'>
      <RestaurantNavbar slug={slug} />
      <Menu menu={menu} />
    </div>
  );
}
