import Layout from "@/components/Layout";
import { Metadata } from "next";
import LoginPage from "@/components/Login";

export const metadata: Metadata = {
  title: "IATT DASHBOARD - TRANG CHỦ",
  description: "IATT DASHBOARD",
};

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <LoginPage />
    </div>
  );
}
