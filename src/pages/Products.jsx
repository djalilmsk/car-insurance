import { defer, Link } from "react-router-dom";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

export async function loader({ request }) {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const productsPromise = customFetch("/products", { params });

  return defer({
    products: productsPromise.then((response) => response.data.data),
    meta: productsPromise.then((response) => response.data.meta),
    params,
  });
}

function Products() {
  return (
    <>
      <PageLinks />

      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}

function PageLinks() {
  return (
    <div className="breadcrumbs mb-[40px] mt-[-60px] text-base">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </div>
  );
}

export default Products;
