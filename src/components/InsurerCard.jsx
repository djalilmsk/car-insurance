import { Button } from '../ui';
import { useSearchParams } from 'react-router-dom';

function InsurerCard({ company }) {

  return (
    <div className="flex h-full min-w-[300px] flex-col justify-between rounded-md bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-2">
      <div>
        <div className="border-b-[1px] pb-5">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-2xl text-primary">{company.name}</h3>
          </div>
          <div className="my-4 flex items-center justify-center">
            <img
              src={company.image}
              alt={company.name}
              className="-mb-5 h-24 w-24 rounded border"
            />
          </div>
        </div>
        <div className="flex flex-col border-b-[1px] py-2 text-[#787878]">
          <p>
            <strong>Email:</strong> {company.email}
          </p>
          <p>
            <strong>Address:</strong> {company.address}
          </p>
          <p>
            <strong>Phone:</strong> {company.phone}
          </p>
        </div>
      </div>
      <div className="mt-5 flex gap-3">
        <Button className="flex w-full justify-center">Learn More</Button>
      </div>
    </div>
  );
}

export default InsurerCard;
