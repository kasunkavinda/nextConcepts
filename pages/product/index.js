import Link from "next/link";

const ProductList = ({ productId = 100 }) => {
  return (
    <div>
      <Link href={`/product/${productId}`}>
        <a>Product {productId}</a>
      </Link>

      <h1>Product 2</h1>
      <Link href="/product/3" replace>
        <a>Product 3</a>
      </Link>
    </div>
  );
};

export default ProductList;
