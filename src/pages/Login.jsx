import { Link, Form } from 'react-router-dom';
import { Logo } from '../components';
import { SubmitButton, Input, EyeToggle } from '../ui';
import { useState } from 'react';
import { customFetch } from '../utils';
import { useDispatch } from 'react-redux';

export const action = (store) => {
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);

    try {
      const response = await customFetch.post('/users/login', data);
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'Please double-check your credentials';
      return { error: errorMessage };
    }
  };
};

function Login() {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleVisible = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <div className="relative">
      <div className="bg-non flex min-h-screen flex-col items-center justify-center px-3 py-12">
        <div className="w-full max-w-[90vw] space-y-6 rounded-lg bg-base-200 p-6 shadow-lg md:max-w-[60vw] md:p-8 lg:max-w-[60vw] xl:max-w-[40vw] xl:p-10 min-[2000px]:max-w-[25vw]">
          <div>
            <h1 className="text-center">
              {/* Login to your account */}
              <Logo>login to</Logo>
            </h1>
            <p className="mb-8 mt-4 text-left text-sm md:mb-10 md:mt-5 md:text-base">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-primary underline hover:cursor-pointer"
              >
                Register
              </Link> 
            </p>
          </div>
          {/* {actionData?.error && (
            <div
              className="mb-4 flex items-center rounded border border-red-300 bg-red-100 p-3 text-sm text-red-800"
              role="alert"
            >
              <svg
                className="mr-2 h-5 w-5 flex-shrink-0 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728"
                />
              </svg>
              {actionData.error}
            </div>
          )} */}
          <Form method="POST" className="flex w-full flex-col space-y-4">
            <Input
              Placeholder="Email"
              Type="email"
              ClassName="w-full"
              Name="email"
            />

            <div className="relative">
              <EyeToggle handelFunc={handleVisible} state={visiblePassword} />
              <Input
                Placeholder="Enter your password"
                Type={`${visiblePassword ? 'text' : 'password'}`}
                ClassName="w-full"
                Name="password"
              />
            </div>

            <div className="flex items-start space-x-3 pb-4">
              <input type="checkbox" defaultChecked className="checkbox" />
              <p className="text-sm md:text-base">Remember me</p>
            </div>

            <SubmitButton ClassName="flex justify-center">Login</SubmitButton>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
