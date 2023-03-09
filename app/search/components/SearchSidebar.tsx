'use client';
import { Cusine, Location } from '@prisma/client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import SidebarItem from './SidebarItem';

interface Props {
  locations: Pick<Location, 'name' | 'id'>[];
  cuisines: Pick<Cusine, 'name' | 'id'>[];
}

export default function SearchSidebar({ locations, cuisines }: Props) {
  const searchParams = useSearchParams();
  const currentCity = searchParams.get('city') || '';
  const currentCuisine = searchParams.get('cuisine') || '';
  const currentPrice = searchParams.get('price') || '';
  const currentQuery = useMemo(() => {
    let q = {};
    if (currentCity) {
      q = { ...q, city: currentCity };
    }
    if (currentCuisine) {
      q = { ...q, cuisine: currentCuisine };
    }
    if (currentPrice) {
      q = { ...q, price: currentPrice };
    }
    return q;
  }, [currentCity, currentCuisine, currentPrice]);

  return (
    <div className='w-1/5'>
      <div className='border-b pb-4'>
        <h1 className='mb-2'>Region</h1>
        {locations.map((location) => (
          <SidebarItem
            key={location.id}
            queryKey='city'
            currentQuery={currentQuery}
            target={location.name}
            active={location.name === currentCity}
          >
            <p key={location.id} className='font-light text-reg capitalize'>
              {location.name}
            </p>
          </SidebarItem>
        ))}
      </div>
      <div className='border-b pb-4 mt-3'>
        <h1 className='mb-2'>Cuisine</h1>
        {cuisines.map((cusine) => (
          <SidebarItem
            key={cusine.id}
            queryKey='cuisine'
            currentQuery={currentQuery}
            target={cusine.name}
            active={cusine.name === currentCuisine}
          >
            <p key={cusine.id} className='font-light text-reg capitalize'>
              {cusine.name}
            </p>
          </SidebarItem>
        ))}
      </div>
      <div className='mt-3 pb-4'>
        <h1 className='mb-2'>Price</h1>
        <div className='flex p-4'>
          <SidebarItem
            queryKey='price'
            target='CHEAP'
            currentQuery={currentQuery}
            active={currentPrice === 'CHEAP'}
          >
            <button className='border-l border-r border-t border-b w-full text-reg font-light p-2 rounded-l'>
              $
            </button>
          </SidebarItem>
          <SidebarItem
            queryKey='price'
            target='MEDIUM'
            currentQuery={currentQuery}
            active={currentPrice === 'MEDIUM'}
          >
            <button className='border-r border-t border-b w-full text-reg font-light p-2'>
              $$
            </button>
          </SidebarItem>
          <SidebarItem
            queryKey='price'
            target='EXPENSIVE'
            currentQuery={currentQuery}
            active={currentPrice === 'EXPENSIVE'}
          >
            <button className='border-t border-r border-b w-full text-reg font-light p-2 rounded-r'>
              $$$
            </button>
          </SidebarItem>
        </div>
      </div>
    </div>
  );
}
