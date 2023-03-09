import RatingStars from "@/app/components/RatingStars";
import { calculateAverageRating } from "@/app/utils/calculation";
import { Review } from "@prisma/client";
import React, { useMemo } from "react";

interface Props {
  reviews: Review[];
}

export default function Rating({ reviews }: Props) {
  const rating = useMemo(() => calculateAverageRating(reviews), [reviews]);
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <RatingStars reviews={reviews} />
        <p className="text-reg ml-3">{rating}</p>
      </div>
      <div>
        <p className="text-reg ml-4">
          {reviews.length} Review{reviews.length > 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
}
