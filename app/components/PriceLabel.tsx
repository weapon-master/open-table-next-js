import { Price } from '@prisma/client';
import React, { useMemo } from 'react';

export default function PriceLabel({ price }: { price: Price }) {
  const priceContent = useMemo(() => {
    if (price === Price.CHEAP) {
      return (
        <>
          <span>$$</span>
          <span className='text-gray-400'>$$</span>
        </>
      );
    }
    if (price === Price.MEDIUM) {
      return (
        <>
          <span>$$$</span>
          <span className='text-gray-400'>$</span>
        </>
      );
    }
    if (price === Price.EXPENSIVE) {
      return (
        <>
          <span>$$$$</span>
        </>
      );
    }
    return null;
  }, [price]);
  return <div className='mr-3'>{priceContent}</div>;
}
