import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "./index";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = React.useState("");
  const { register, handleSubmit } = useForm();

  const registerAccount = (data) => {
    localStorage.setItem("account", JSON.stringify(data));
    setError("");
    toast.success("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-100 font-sans px-4">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-10 border border-blue-100">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-2">
            AccountManagement
          </h1>
          <p className="text-gray-500 text-sm">
            Create your secure account in seconds
          </p>
        </div>

        {error && (
          <p className="text-red-600 mb-4 text-center text-sm font-medium">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit(registerAccount)} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <Input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 transition"
              {...register("name", { required: true })}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <Input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 transition"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 transition"
              {...register("password", { required: true })}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg shadow-md transition-all duration-200"
          >
            Create Account
          </Button>
        </form>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
