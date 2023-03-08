"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  queryKey: string;
  active: boolean;
  target: string;
  children: React.ReactNode;
}

export default function SidebarItem({
  queryKey,
  target,
  active,
  children,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  if (active) {
    return <>{children}</>;
  }
  return (
    <div
      className="cursor-pointer font-dark text-reg capitalize hover:text-blue-600"
      onClick={(event) => {
        event.preventDefault();
        const params = new URLSearchParams(searchParams);
        params.set(queryKey, target.toLowerCase());
        router.push(`${pathname}?${params.toString()}`);
      }}
    >
      {children}
    </div>
  );
}
