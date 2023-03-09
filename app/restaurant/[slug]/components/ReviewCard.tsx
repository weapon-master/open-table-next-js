import RatingStars from "@/app/components/RatingStars";
import { Review } from "@prisma/client";
import React from "react";

interface Props {
  review: Review;
}

export default function ReviewCard({ review }: Props) {
  return (
    <div className="border-b pb-7 mb-7">
      <div className="flex">
        <div className="w-1/6 flex flex-col items-center">
          <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
            <h2 className="text-white text-2xl uppercase">
              {review.firstName.charAt(0)}
              {review.lastName.charAt(0)}
            </h2>
          </div>
          <p className="text-center">
            {review.firstName} {review.lastName}
          </p>
        </div>
        <div className="ml-10 w-5/6">
          <RatingStars reviews={[review]} />
          <div className="mt-5">
            <p className="text-lg font-light">{review.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
