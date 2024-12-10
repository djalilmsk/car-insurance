import { Button } from '../ui';

function PricingCard({
  title,
  status,
  price,
  buttonText,
  buttonClasses,
  plans = [],
}) {
  return (
    <div className="min-w-[300px] rounded-md p-5 shadow-lg hover:-translate-y-2 transition-all duration-300">
      <div className="border-b-[1px] pb-5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-2xl text-primary">{title}</h3>
          <span className="rounded-full border-2 px-2 text-sm uppercase">
            {status}
          </span>
        </div>
        <div className="mb-4 flex items-end">
          <h1 className="text-5xl font-semibold">${price}</h1>
          <span className="text-lg text-[#787878]"> /month</span>
        </div>
        <Button className={`flex w-full justify-center ${buttonClasses}`}>
          {buttonText}
        </Button>
      </div>
      <div className="flex flex-col mt-2">
        {plans.map((text) => {
          return (
            <div key={text} className="my-1">
              o {text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PricingCard;
