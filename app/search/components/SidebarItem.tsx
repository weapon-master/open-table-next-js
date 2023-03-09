'use client';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

interface Props {
  queryKey: string;
  active: boolean;
  target: string;
  currentQuery: Record<string, string>;
  children: React.ReactNode;
}

export default function SidebarItem({
  queryKey,
  target,
  currentQuery,
  active,
  children,
}: Props) {
  const pathname = usePathname();
  if (active) {
    return <>{children}</>;
  }
  return (
    <Link
      className='font-dark text-reg capitalize hover:text-blue-600'
      href={{ pathname, query: { ...currentQuery, [queryKey]: target } }}
    >
      {children}
    </Link>
  );
}
