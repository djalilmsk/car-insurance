import React, { useState } from 'react';
import { Logo } from '../components';
import { Form, Link } from 'react-router-dom';
import { EyeToggle, SubmitButton, Input, Button, ButtonOutline } from '../ui';

const INPUTS = [
  { page: 1, name: 'fullName', Placeholder: 'Full name', type: 'text' },
  { page: 1, name: 'address', Placeholder: 'Physical address', type: 'text' },
  { page: 1, name: 'email', Placeholder: 'Email', type: 'email' },
  { page: 1, name: 'phone', Placeholder: 'Phone', type: 'tel' },
  { page: 2, name: 'phone', Placeholder: 'Phone', type: 'tel' },
  { page: 2, name: 'phone', Placeholder: 'Phone', type: 'tel' },
  {
    page: 3,
    name: 'postalAddress',
    Placeholder: 'Postal Address',
    type: 'number',
  },
  { page: 3, name: 'phone', Placeholder: 'Phone', type: 'tel' },
  { page: 4, name: 'RIB', Placeholder: 'RIB', type: 'number' },
  { page: 4, name: 'password', Placeholder: 'Password', type: 'password' },
  {
    page: 4,
    name: 'confirmPassword',
    Placeholder: 'Confirm Password',
    type: 'password',
  },
];

const Register = () => {
  const [pageCounter, setPageCounter] = useState(1);

  const [formData, setFormData] = useState({});

  const handleNextPage = () => {
    if (pageCounter < 4) setPageCounter(pageCounter + 1);
  };

  const handlePrevPage = () => {
    if (pageCounter > 1) setPageCounter(pageCounter - 1);
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
            onSubmit={() => ''}
            className="flex w-full flex-col space-y-4"
          >
            {INPUTS.map(({ page, name, Placeholder, type }, i) => {
              return (
                <Input
                  key={i}
                  Placeholder={Placeholder}
                  Type={type}
                  ClassName={`w-full ${page !== pageCounter ? 'hidden' : ''}`}
                  Name={name}
                />
              );
            })}

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox h-4 w-4"
              />
              <p className="text-sm md:text-base">
                I agree to the{' '}
                <span className="text-primary underline">
                  Terms & Conditions
                </span>
              </p>
            </div>

            {pageCounter === 4 && (
              <SubmitButton ClassName="flex justify-center w-full">
                Create account
              </SubmitButton>
            )}
          </Form>
          {pageCounter !== 4 && (
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
