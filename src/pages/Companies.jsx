import InsurerCard from '../components/InsurerCard';
import { Link, useLoaderData } from 'react-router-dom';
import customFetch from '../utils';
import { useEffect } from 'react';
import { companies } from '../Services/companies';

export async function loader() {
  // const response = await customFetch.get('/insurer');
  // console.log('eee');
  // console.log(response);
  // const data = response.json();
  // console.log(data);
  // return data;
  return null;
}

const Companies = () => {
  // console.log('eee');
  useEffect(() => {
    fetch('https://5df1-41-111-178-9.ngrok-free.app/api/insurer')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  // const companies = useLoaderData();
  // console.log(companies);

  return (
    <>
      <div className="mb-[20px] text-center">
        <h1 className="text-4xl font-semibold uppercase">Our Companies</h1>
      </div>
      <div className="p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {companies.map((company) => (
              <Link to={`/companies/${company.id}?id=${company.id}`} key={company.id}>
                <InsurerCard company={company} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Companies;
