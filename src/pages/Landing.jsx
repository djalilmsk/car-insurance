import { Await, defer, useLoaderData } from "react-router-dom";
import { Hero, FeaturedProducts } from "../components";
import { customFetch } from "../utils";

export async function loader() {
  const response = customFetch("/products?featured=true");

  return defer({
    featuredProducts: response,
  });
}

export default function Landing() {

  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}
