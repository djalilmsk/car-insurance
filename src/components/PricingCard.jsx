import { useState } from 'react';
import { Button, DeleteButton } from '../ui';
import { useSelector, useDispatch } from 'react-redux';
import { updatePlans } from '../features/user/UserSlice';

function PricingCard({
  title,
  status,
  price,
  buttonText,
  buttonClasses,
  plans = [],
  deductible,
  description,
  Active = true,
}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const { role } = user?.data || { role: 'user' };

  const [isActive, setIsActive] = useState(true);

  const handleActivation = () => {
    setIsActive(!isActive);
  };

  const handleDelete = () => {};

  const manageBuyPlan = () => {
    const planDetails = {
      title,
      price,
      deductible,
      description,
      plans,
    };

    dispatch(updatePlans(planDetails));
    // console.log('Plan purchased:', planDetails);
    // alert('Plan purchased successfully!');
  };

  return (
    <div className="flex min-w-[300px] flex-col justify-between rounded-md p-5 shadow-lg transition-all duration-300 hover:-translate-y-2">
      <div>
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
          {role !== 'insurer' ? (
            <Button
              clickHandle={manageBuyPlan}
              className={`flex w-full justify-center ${buttonClasses}`}
            >
              {buttonText}
            </Button>
          ) : null}
        </div>
        <div className="flex flex-col border-b-[1px] py-2 text-[#787878]">
          <span>- deductible : {deductible}$</span>
          <div>
            <span className="text-nowrap">- description : </span>
            <span>{description}</span>
          </div>
        </div>
        <div className="mt-2 flex flex-col">
          {plans.length > 0 ? (
            plans.map((text, i) => (
              <div key={i} className="my-1">
                o {text}
              </div>
            ))
          ) : (
            <div className="text-[#787878]">No plans available</div>
          )}
        </div>
      </div>
      {role === 'insurer' ? (
        <div className="mt-5 flex gap-3">
          <Button
            clickHandle={handleActivation}
            className="flex w-full justify-center"
          >
            {isActive ? 'Deactivate' : 'Activate'}
          </Button>
          <DeleteButton
            clickHandle={handleDelete}
            className="flex w-full justify-center"
          >
            Delete
          </DeleteButton>
        </div>
      ) : null}
    </div>
  );
}

export default PricingCard;
