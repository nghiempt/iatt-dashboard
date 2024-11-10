import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import Layout from "@/components/Layout";
import UserPage from "@/components/User";

export const metadata: Metadata = {
  title: "IATT DASHBOARD - KHÁCH HÀNG",
  description: "IATT DASHBOARD",
};

const User = () => {
  return (
    <Layout>
      <div className="">
        <Breadcrumb pageName="Khách Hàng" />
        <div className="flex flex-col gap-10">
          <UserPage />
        </div>
      </div>
    </Layout>
  );
};

export default User;
