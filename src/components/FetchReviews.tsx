import Image from "next/image";

import { PortableText } from "@portabletext/react";
import { getReview } from "../../sanity/sanity-utils";

export default async function FetchReviews() {
  const reviews = await getReview();
  return (
    <>
      {reviews.map((review, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-[300px] h-auto p-3 bg-secondary rounded-lg"
        >
          <div className="flex gap-2">
            <div className="overflow-hidden rounded-full h-[50px] w-[50px] relative">
              <Image
                src={review.image}
                alt={"profile picture"}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold underline">{review.name}</h1>
              <p>{review.location}</p>
            </div>
          </div>
          <div className="px-5">
            <PortableText value={review.content} />
          </div>
        </div>
      ))}
    </>
  );
}
