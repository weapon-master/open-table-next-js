'use client';
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useCallback, useState } from "react";

export default function Searchbar() {
  const router = useRouter();
  const [kw, setKw] = useState("");
  const onKwChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setKw(e.target.value);
  }, []);
  const onSearch = useCallback(() => {
    if (!kw) {
      return;
    }
    router.push(`/search?kw=${kw}`);
  }, [kw, router]);
  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
        value={kw}
        onChange={onKwChange}
      />
      <button
        className="rounded bg-red-600 px-9 py-2 text-white"
        onClick={onSearch}
      >
        Let&apos;s go
      </button>
    </div>
  );
}
