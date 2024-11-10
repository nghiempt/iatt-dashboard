import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import ProductPage from "@/components/Product";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "IATT DASHBOARD - SẢN PHẨM",
  description: "IATT DASHBOARD",
};

const Product = () => {
  return (
    <Layout>
      <Breadcrumb pageName="Sản Phẩm" />
      <div className="flex flex-col gap-10">
        <ProductPage />
      </div>
    </Layout>
  );
};

export default Product;
