import Carousel from "./Carousel";
import FetchReviews from "./FetchReviews";

const Reviews = () => {
  return (
    <div className="bg-primary w-full py-16">
      <Carousel speed={100}>
          <FetchReviews/>
      </Carousel>
    </div>
  );
};

export default Reviews;
