import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "./index";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = React.useState("");
  const { register, handleSubmit } = useForm();

  const login = (data) => {
    try {
      const account = JSON.parse(localStorage.getItem("account"));
      if (account.email !== data.email || account.password !== data.password) {
        throw new Error("Invalid credentials");
      }
      toast.success("Login Successfully!");
      navigate("/account-detail");
    } catch (error) {
      toast.error("Login Failed!");
    }
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
            Manage your accounts effortlessly and securely
          </p>
        </div>

        {error && (
          <p className="text-red-600 mb-4 text-center text-sm font-medium">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit(login)} className="space-y-5">
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
            Login
          </Button>
        </form>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
