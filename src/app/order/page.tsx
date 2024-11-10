import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import OrderPage from "@/components/Order";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "IATT DASHBOARD - ĐƠN HÀNG",
  description: "IATT DASHBOARD",
};

const Order = () => {
  return (
    <Layout>
      <Breadcrumb pageName="Đơn Hàng" />
      <div className="flex flex-col gap-10">
        <OrderPage />
      </div>
    </Layout>
  );
};

export default Order;
