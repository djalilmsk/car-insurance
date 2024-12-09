import { Form, Link } from "react-router-dom";
import { FormSelect, Input, PaymentSummary, SectionTitle } from "../components";

function Checkout() {
  return (
    <div>
      <PagesLinks />
      <main className="grid gap-4 lg:grid-cols-3">
        <Form className="flex flex-col gap-5 bg-base-200 p-5 lg:col-span-2">
          <SectionTitle>Your Information</SectionTitle>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              Placeholder="First name"
              ClassName="w-full"
              Name="firstName"
            />
            <Input Placeholder="Last name" ClassName="w-full" Name="lastName" />
          </div>
          <Input Placeholder="Address" Name="address" />
          <Input Placeholder='Phone Number' />
          <FormSelect list={[]} />
        </Form>

        <PaymentSummary>
          <button className="btn w-full bg-primary text-white hover:text-primary">
            Checkout
          </button>
          <Link to="/cart" className="btn btn-outline w-full">
            Go Back To Cart
          </Link>
        </PaymentSummary>
      </main>
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

export default Checkout;
