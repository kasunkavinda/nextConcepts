import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log("order placed successfully");
    router.push("/product");
  };
  return (
    <div>
      <p>Home page</p>
      <Link href="/product">
        <a>product</a>
      </Link>

      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}
