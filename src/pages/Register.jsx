import React, { useState } from 'react';
import { Logo } from '../components';
import { Form, Link, useSearchParams } from 'react-router-dom';
import { EyeToggle, SubmitButton, Input, Button, ButtonOutline } from '../ui';
import { loginUser } from '../features/user/UserSlice';
import customFetch from '../utils';

const [searchParams] = useSearchParams();
const role = searchParams.get('role') || 'users';
const URL = `/${role}/signup`;

const INPUTS = [
  { page: 1, name: 'fullName', Placeholder: 'Full name', type: 'text' },
  { page: 1, name: 'address', Placeholder: 'Physical address', type: 'text' },
  { page: 1, name: 'email', Placeholder: 'Email', type: 'email' },
  { page: 1, name: 'phone', Placeholder: 'Phone', type: 'tel' },
  { page: 2, name: 'meterReading', Placeholder: 'Meter reading', type: 'number' },
  { page: 2, name: 'PDL_PCE', Placeholder: 'PCE / PDL', type: 'number' },
  { page: 2, name: 'type', Placeholder: 'Housing Type (e.g., apartment)', type: 'text' },
  { page: 2, name: 'area', Placeholder: 'Housing Area', type: 'number' },
  { page: 3, name: 'postalAddress', Placeholder: 'Postal Address', type: 'text' },
  { page: 3, name: 'RIB', Placeholder: 'RIB', type: 'text' },
  { page: 3, name: 'password', Placeholder: 'Password', type: 'password' },
  { page: 3, name: 'comfirmPassword', Placeholder: 'Confirm Password', type: 'password' },
];

export const action =
  (insurance) =>
  async ({ request }) => {
    try {
      const formData = await request.formData();
      const data = Object.fromEntries(formData);

      console.log(data, 'the url is:' + URL);

      const response = await customFetch.post(URL, data);
      insurance.dispatch(
        loginUser({
          token: response.data.token,
          data: response.data.data,
        }),
      );
      return '/';
    } catch (err) {
      console.error(
        err?.response?.data?.error?.message ||
          err.message ||
          'Unknown error, please try again.',
      );
      return null;
    }
  };

const Register = () => {
  const [pageCounter, setPageCounter] = useState(1);
  const [formData, setFormData] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextPage = () => {
    if (pageCounter < 3) setPageCounter(pageCounter + 1);
  };

  const handlePrevPage = () => {
    if (pageCounter > 1) setPageCounter(pageCounter - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      console.error('Please accept the terms and conditions.');
      return;
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative">
      <div className="bg-non flex min-h-screen flex-col items-center justify-center px-3 py-12">
        <div className="w-full max-w-[90vw] space-y-6 rounded-lg bg-base-200 p-6 shadow-lg md:max-w-[60vw] md:p-8 lg:max-w-[60vw] xl:max-w-[40vw] xl:p-10 min-[2000px]:max-w-[25vw]">
          <div>
            <h1 className="text-center">
              <Logo>Register to</Logo>
            </h1>
            <p className="mb-8 mt-4 text-left text-sm md:mb-10 md:mt-5 md:text-base">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-primary underline hover:cursor-pointer"
              >
                Log in
              </Link>
            </p>
          </div>

          <Form
            method="POST"
            noValidate
            className="flex w-full flex-col space-y-4"
          >
            <progress
              className="progress progress-primary h-4 w-full bg-[#e8e8e8]"
              value={(pageCounter - 1) * 33.33}
              max="100"
            ></progress>
            {INPUTS.map(({ page, name, Placeholder, type }, i) => (
              <Input
                key={i}
                Placeholder={Placeholder}
                Type={type}
                ClassName={`w-full ${page !== pageCounter ? 'hidden' : ''}`}
                Name={name}
                value={formData[name] || ''}
                onChange={handleInputChange}
              />
            ))}

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="checkbox h-4 w-4"
              />
              <p className="text-sm md:text-base">
                I agree to the{' '}
                <span className="text-primary underline">
                  Terms & Conditions
                </span>
              </p>
            </div>

            {pageCounter === 3 && (
              <SubmitButton
                navigating={true}
                ClassName="flex justify-center w-full"
              >
                Create account
              </SubmitButton>
            )}
          </Form>

          {pageCounter !== 3 && (
            <div className="flex gap-2">
              <ButtonOutline
                className={`flex w-full justify-center ${pageCounter === 1 && 'btn-disabled text-[#e8e8e8]'}`}
                clickHandle={handlePrevPage}
              >
                Previous
              </ButtonOutline>
              <Button
                className="flex w-full justify-center"
                clickHandle={handleNextPage}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
