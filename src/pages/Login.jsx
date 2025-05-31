import { Link, Form } from 'react-router-dom';
import { Logo } from '../components';
import { SubmitButton, Input, EyeToggle } from '../ui';
import { useState } from 'react';
import { customFetch } from '../utils';
import { loginUser } from '../features/user/UserSlice';

export const action =
  (insurance) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    return {
      email: 'johndoe@example.com',
      fullName: 'John Doe',
      image: 'https://example.com/images/john.jpg',
      _id: 'dddd'
    };
  };

export async function loader() {
  return;
}

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="bg-non relative flex min-h-screen items-center justify-center px-3 py-12">
      <div className="w-full max-w-[90vw] space-y-6 rounded-lg bg-base-200 p-6 shadow-lg md:max-w-[60vw] xl:max-w-[40vw] min-[2000px]:max-w-[25vw]">
        <div>
          <h1 className="text-center">
            <Logo>Login to</Logo>
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

        <Form method="POST" className="flex flex-col space-y-4">
          <Input
            Placeholder="Email"
            Type="email"
            ClassName="w-full"
            Name="email"
          />

          <div className="relative">
            <EyeToggle
              handelFunc={togglePasswordVisibility}
              state={isPasswordVisible}
            />
            <Input
              Placeholder="Enter your password"
              Type={isPasswordVisible ? 'text' : 'password'}
              ClassName="w-full"
              Name="password"
            />
          </div>

          <div className="flex items-start space-x-3 pb-4">
            <input type="checkbox" defaultChecked className="checkbox" />
            <p className="text-sm md:text-base">Remember me</p>
          </div>

          <SubmitButton ClassName="flex justify-center" navigating={true}>
            Login
          </SubmitButton>
        </Form>
      </div>
    </div>
  );
};

export default Login;
