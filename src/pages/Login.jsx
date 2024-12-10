import { Link, Form } from 'react-router-dom';
import { Logo } from '../components';
import { SubmitButton, Input, EyeToggle } from '../ui';
import { useState } from 'react';

export const action = (store) => async () => {
  console.log(store);
  return null;
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

            <SubmitButton ClassName="hover:bg-primary-focus btn w-full bg-primary text-[#eee] hover:text-primary">
              Login
            </SubmitButton>
          </Form>

          <div className="flex items-center justify-center space-x-2 text-sm">
            <div className="h-[1px] w-[30%] bg-gray-600 md:w-[39%]"></div>
            <span>Or Login with</span>
            <div className="h-[1px] w-[30%] bg-gray-600 md:w-[39%]"></div>
          </div>

          <div className="flex flex-col space-y-4 md:space-y-5">
            <button className="btn btn-outline">
              {/* <FaGoogle /> */}
              <span>Google</span>
            </button>
            <button className="btn btn-outline">
              {/* <FaUser /> */}
              <span>Continue As Guest</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
