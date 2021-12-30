import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      <div>Details of the product {productId}</div>
      <div>Details of the review {reviewId}</div>
    </div>
  );
};

export default Review;
