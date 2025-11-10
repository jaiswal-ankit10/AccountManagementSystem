import React, { useEffect, useState } from "react";
import { Button, Input } from "../components";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const AccountDetail = () => {
  const [account, setAccount] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedAccount = JSON.parse(localStorage.getItem("account"));
    if (savedAccount) {
      setAccount(savedAccount);
    }
  }, []);

  const handleChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("account", JSON.stringify(account));
    setIsEditing(false);
    toast.success("Account details updated!");
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmDelete) {
      localStorage.removeItem("account");
      toast.success("Account deleted successfully!");
      setTimeout(() => navigate("/signup"), 1000);
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedAccount = { ...account, avatar: reader.result };
        setAccount(updatedAccount);
        localStorage.setItem("account", JSON.stringify(updatedAccount));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (newPassword.trim().length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }

    const updatedAccount = { ...account, password: newPassword };
    setAccount(updatedAccount);
    localStorage.setItem("account", JSON.stringify(updatedAccount));
    setShowPasswordModal(false);
    setNewPassword("");
    setConfirmPassword("");
    toast.success("Password updated successfully!");
  };

  return (
    <div className="relative min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 font-sans text-white">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-gray-900/80 backdrop-blur-md border-b border-gray-700 z-50">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            alt="AccountPro Logo"
            className="w-8 h-8"
          />
          <h1 className="text-xl font-bold text-blue-400">
            <Link to={"/"}>AccountManagement</Link>
          </h1>
        </div>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition-all hover:shadow-blue-500/50"
        >
          🏠 Home
        </button>
      </header>

      {/* Content Section */}
      <div className="flex items-center justify-center pt-70 pb-10 px-4">
        <div className="w-full max-w-lg bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-gray-700 relative">
          {/* Avatar Section */}
          <div className="flex flex-col items-center mb-6">
            <label htmlFor="avatar-upload" className="cursor-pointer">
              <img
                src={
                  account.avatar ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="Avatar"
                className="w-24 h-24 rounded-full object-cover border-2 border-blue-500 shadow-md hover:opacity-90 transition"
              />
            </label>
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />
            <h1 className="mt-3 text-2xl font-semibold text-blue-400">
              {account.name || "User"}
            </h1>
            <p className="text-gray-400 text-sm">{account.email}</p>
          </div>

          {/* User Info */}
          <div className="space-y-5">
            <div>
              <label className="block text-gray-300 font-medium mb-1">
                Full Name
              </label>
              <Input
                name="name"
                type="text"
                value={account.name}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full rounded-lg border-gray-600 bg-gray-700 text-black focus:border-blue-500 focus:ring focus:ring-blue-300 transition ${
                  !isEditing && "opacity-70 cursor-not-allowed"
                }`}
              />
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-1">
                Email
              </label>
              <Input
                name="email"
                type="email"
                value={account.email}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full rounded-lg border-gray-600 bg-gray-700 text-black focus:border-blue-500 focus:ring focus:ring-blue-300 transition ${
                  !isEditing && "opacity-70 cursor-not-allowed"
                }`}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-between gap-4">
            {!isEditing ? (
              <Button
                onClick={() => setIsEditing(true)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-all"
              >
                Edit Details
              </Button>
            ) : (
              <Button
                onClick={handleSave}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-lg transition-all"
              >
                Save Changes
              </Button>
            )}

            <Button
              onClick={() => setShowPasswordModal(true)}
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2.5 rounded-lg transition-all"
            >
              Change Password
            </Button>

            <Button
              onClick={handleDelete}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition-all"
            >
              Delete Account
            </Button>
          </div>
        </div>
      </div>

      {/* Password Change Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gray-800 text-white rounded-xl shadow-xl p-8 w-full max-w-sm border border-gray-700">
            <h2 className="text-xl font-semibold text-blue-400 mb-4 text-center">
              Change Password
            </h2>
            <Input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full mb-4 rounded-lg border-gray-600 bg-gray-700 text-white focus:border-blue-500 focus:ring focus:ring-blue-300"
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mb-6 rounded-lg border-gray-600 bg-gray-700 text-white focus:border-blue-500 focus:ring focus:ring-blue-300"
            />
            <div className="flex justify-between gap-3">
              <Button
                onClick={() => setShowPasswordModal(false)}
                className="flex-1 bg-gray-600 hover:bg-gray-500 text-white font-medium rounded-lg py-2 transition-all"
              >
                Cancel
              </Button>
              <Button
                onClick={handlePasswordChange}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg py-2 transition-all"
              >
                Update
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountDetail;
