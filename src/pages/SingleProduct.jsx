import { Link, useLoaderData, Await, defer } from "react-router-dom";
import { customFetch, formatPrice, parsePrice } from "../utils";
import { FaPlus } from "react-icons/fa6";
import { Suspense } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

export async function loader({ params }) {
  const productPromise = customFetch(`/products/${params.id}`).then(
    (response) => response.data?.data,
  );
  return defer({
    product: productPromise,
  });
}

function SingleProduct() {
  const { product } = useLoaderData();

  return (
    <main>
      <PagesLinks title="Product Details" />
      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        }
      >
        <Await
          resolve={product}
          errorElement={<p>Error loading the product!</p>}
        >
          {(resolvedProduct) => <ProductDetails product={resolvedProduct} />}
        </Await>
      </Suspense>
    </main>
  );
}

function PagesLinks({ title }) {
  return (
    <div className="breadcrumbs mb-[40px] mt-[-60px] text-base">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li className="cursor-pointer hover:underline">{title}</li>
      </ul>
    </div>
  );
}

function ProductDetails({ product }) {
  const { title, image, price: cost, description, category } = product.attributes;
  const price = formatPrice(cost);

  const cartProduct = {
    cartID: product.id,
    productID: product.id,
    image,
    title,
    price: parsePrice(price),
    category,
  };
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({product: cartProduct}));
  }

  return (
    <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
      <img
        src={image}
        alt={title}
        className="h-96 w-96 rounded-lg object-cover lg:w-full"
      />
      <div className="flex flex-col items-start justify-between px-0 py-2">
        <h2 className="card-title mb-1 text-3xl">{title}</h2>
        <p className="text-lg text-primary">{price}</p>
        <p className="my-6 leading-8">{description}</p>
        <div className="flex gap-5">
          <button className="hover:bg-primary-focus btn bg-primary text-white hover:text-primary">
            Buy Now
          </button>
          <button className="btn btn-outline flex items-center gap-2"
            onClick={addToCart}
          >
            Add to Cart
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
