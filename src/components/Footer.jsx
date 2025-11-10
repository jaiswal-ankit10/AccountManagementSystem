import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-blue-600 dark:bg-blue-800 text-white text-center py-6 transition-colors duration-500"
    >
      <p>
        &copy; {new Date().getFullYear()} AccountManagement . All rights
        reserved.
      </p>
      <p>Created by Ankit Jaiswal</p>
    </footer>
  );
};

export default Footer;
