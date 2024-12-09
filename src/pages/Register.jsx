import { Link, Form } from "react-router-dom";
import { customFetch } from "../utils";

import { Input, Logo } from "../components";
import { SubmitButton } from "../components";
import { FaGoogle, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi";
import validator from "validator";
import { useState } from "react";

function isValidEmail(val) {
  let regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(val)) {
    return "Invalid Email Address";
  }
}

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const {
      firstName,
      lastName,
      email,
      password,
      "Confirm password": confirmPassword,
    } = Object.fromEntries(formData);

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast.error("All fields are required.");
      return null;
    }

    if (!validator.isEmail(email)) {
      toast.error("Invalid Email Address");
      return null;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return null;
    }

    const username = `${firstName.toLowerCase().trim()}_${lastName.toLowerCase().trim()}`;
    const data = { username, email: email.trim(), password };

    const response = await customFetch.post("/auth/local/register", data);

    toast.success("Account created successfully!");
    return null;
  } catch (err) {
    const errMessage =
      err?.response?.data?.error?.message ||
      err.message ||
      "Unknown error, please try again.";
    toast.error(errMessage);
    return null;
  }
};

function Register() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfPassword, setVisibleConfPassword] = useState(false);

  const handleVisible = () => {
    setVisiblePassword(!visiblePassword);
  };
  const handleVisibleConf = () => {
    setVisibleConfPassword(!visibleConfPassword);
  };

  const EyeToggle = ({ handelFunc, state }) => {
    return (
      <label className="swap absolute right-5 top-1/2 -translate-y-1/2">
        <input type="checkbox" checked={state} onChange={handelFunc} />
        <div className="swap-on">
          <FiEye className="h-4 w-4" />
        </div>
        <div className="swap-off">
          <FiEyeOff className="h-4 w-4" />
        </div>
      </label>
    );
  };

  const validatePasswords = () => {
    const password = document.querySelector("input[name='password']").value;
    const confirmPassword = document.querySelector(
      "input[name='Confirm password']",
    ).value;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    return true;
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
              Already have an account?{" "}
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
            onSubmit={(e) => {
              if (!validatePasswords()) e.preventDefault();
            }}
            className="flex w-full flex-col space-y-4"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Input
                Placeholder="First name"
                ClassName="w-full"
                Name="firstName"
              />
              <Input
                Placeholder="Last name"
                ClassName="w-full"
                Name="lastName"
              />
            </div>

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
                Type={`${visiblePassword ? "text" : "password"}`}
                ClassName="w-full"
                Name="password"
              />
            </div>
            <div className="relative">
              <EyeToggle
                handelFunc={handleVisibleConf}
                state={visibleConfPassword}
              />
              <Input
                Placeholder="Confirm password"
                Type={`${visibleConfPassword ? "text" : "password"}`}
                ClassName="w-full"
                Name="Confirm password"
              />
            </div>

            <div className="flex items-start space-x-3">
              <input type="checkbox" defaultChecked className="checkbox" />
              <p className="text-sm md:text-base">
                I agree to the{" "}
                <span className="text-primary underline">
                  Terms & Conditions
                </span>
              </p>
            </div>

            <SubmitButton ClassName="hover:bg-primary-focus btn w-full bg-primary text-[#eee]  hover:text-primary">
              Create account
            </SubmitButton>
          </Form>

          <div className="flex items-center justify-center space-x-2 text-sm">
            <div className="h-[1px] w-[25%] bg-gray-600 md:w-[39%]"></div>
            <span>Or register with</span>
            <div className="h-[1px] w-[25%] bg-gray-600 md:w-[39%]"></div>
          </div>

          <div className="flex flex-col space-y-4 md:space-y-5">
            <button className="btn btn-outline">
              <FaGoogle />
              <span>Google</span>
            </button>
            <button className="btn btn-outline">
              <FaUser />
              <span>Continue As Guest</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
