import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import Layout from "@/components/Layout";
import CompanyPage from "@/components/Company";

export const metadata: Metadata = {
  title: "IATT DASHBOARD - CÔNG TY",
  description: "IATT DASHBOARD",
};

const Company = () => {
  return (
    <Layout>
      <div className="">
        <Breadcrumb pageName="Công Ty" />
        <div className="flex flex-col gap-10">
          <CompanyPage />
        </div>
      </div>
    </Layout>
  );
};

export default Company;
