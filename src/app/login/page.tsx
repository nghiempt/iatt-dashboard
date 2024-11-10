import React from "react";
import { Metadata } from "next";
import LoginPage from "@/components/Login";

export const metadata: Metadata = {
  title: "IATT DASHBOARD - ĐĂNG NHẬP",
  description: "IATT DASHBOARD",
};

const Login: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <LoginPage />
    </div>
  );
};

export default Login;
