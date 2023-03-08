import React from "react";

interface Props {
  name: string;
  location: string;
}

export default function Header({ name, location }: Props) {
  return (
    <div className="h-96 overflow-hidden">
      <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
        <h1 className="text-7xl text-white captitalize text-shadow text-center">
          {name} ({location})
        </h1>
      </div>
    </div>
  );
}
