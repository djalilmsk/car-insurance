import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../utils";
import { removeItem, clearCart } from "../features/cart/cartSlice";
import { PaymentSummary } from "../components";

function Cart() {
  const { cartItems, ...cart } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const removeFromCart = (product) => {
    dispatch(removeItem({ product }));
  };

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <PagesLinks />
      <main className="grid gap-4 lg:grid-cols-3">
        <CartProductList cartItems={cartItems} onRemove={removeFromCart} />
        <PaymentSummary>
          <Link to={'/checkout'} className="btn w-full bg-primary text-white hover:text-primary">
            Checkout
          </Link>
          <button className="btn btn-outline w-full" onClick={clearCartItems}>
            Clear Cart
          </button>
        </PaymentSummary>
      </main>
    </>
  );
}

function CartProductList({ cartItems, onRemove }) {
  return (
    <div className="overflow-x-auto lg:col-span-2">
      {cartItems.length > 0 ? (
        <table className="table table-zebra w-full min-w-[512px] overflow-hidden">
          <thead className="bg-base-200">
            <tr className="text-base sm:text-lg">
              <th className="px-5 py-4">Image</th>
              <th>Title</th>
              <th>Price</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="border-b-2 border-base-200">
            {cartItems.map((item) => (
              <tr key={item.cartID} className="text-sm sm:text-base">
                <td>
                  <Link to={`/products/${item.productID}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="m-0 h-16 w-16 rounded-md object-cover sm:h-20 sm:w-20"
                    />
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/products/${item.productID}`}
                    className="text-lg hover:underline sm:text-xl"
                  >
                    {item.title}
                  </Link>
                </td>
                <td className="text-xl text-primary">
                  {formatPrice(item.price)}
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-circle btn-outline btn-sm"
                    onClick={() => onRemove(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-6 sm:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="py-8 text-center text-lg sm:text-2xl">
          Your cart is empty.
        </div>
      )}
    </div>
  );
}

function PagesLinks() {
  return (
    <div className="breadcrumbs mb-[40px] mt-[-60px] text-base">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}

export default Cart;
