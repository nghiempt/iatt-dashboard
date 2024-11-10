"use client"

import Image from "next/image";
import { getAll } from "@/utils/apis";
import { useEffect, useState } from "react";

interface User{
    id: number;
    name: string;
    email: string;
    phone: string;
    number_of_orders: number;
}

const UserPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDelete, setIsDelete] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null as any);

  const apiUrl = "https://n8n.khiemfle.com/webhook/5c404ea1-4a57-4c0a-8628-3088d00abe64";

  const userList: User[] = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "nguyenvana@example.com",
      phone: "0123-456-789",
      number_of_orders: 5
    },
    {
      id: 2,
      name: "Trần Thị B",
      email: "tranthib@example.com",
      phone: "0987-654-321",
      number_of_orders: 3
    },
    {
      id: 3,
      name: "Lê Văn C",
      email: "levanc@example.com",
      phone: "0912-345-678",
      number_of_orders: 10
    },
    {
      id: 4,
      name: "Phạm Thị D",
      email: "phamthid@example.com",
      phone: "0934-567-890",
      number_of_orders: 7
    },
    {
      id: 5,
      name: "Vũ Quang E",
      email: "vuquange@example.com",
      phone: "0921-234-567",
      number_of_orders: 2
    }
  ];  
  
  const handleOpenDetailModal = (user: any) => {
    setSelectedUser(user);
    setIsDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedUser(null);
  };

  useEffect(() => {
    setUsers(userList);
  }, []);

  const newLocal = "col-span-1 flex items-center";
  return (
    <div className="rounded-md border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5 flex justify-between items-center w-full">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          DANH SÁCH KHÁCH HÀNG
        </h4>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Tên</p>
        </div>
        <div className="col-span-3 hidden items-center sm:flex">
          <p className="font-medium">Email</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Số Điện Thoại</p>
        </div>
        <div className={newLocal}>
          <p className="font-medium">Mô tả</p>
        </div>
      </div>
      {/* {isLoading ? (
        Array.from({ length: 6 }).map((_, index) => (
          <SkeletonUser key={index} />
        ))
      ) : (
        products.map((product: User) => ( */}
        {users.map((user: User) => (
          <div
            className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5 cursor-pointer hover:bg-gray-50"
            key={user.id}
            onClick={() => setSelectedUser(user)}>
            <div className="col-span-2 hidden items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {user.name}
              </p>
            </div>
            <div className="col-span-3 flex items-center">
              <p className="text-sm text-black dark:text-white">
                {user.email}
              </p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="text-sm text-black dark:text-white">
                {user.phone}
              </p>
            </div>
            <div className="col-span-1 flex items-center" onClick={() => handleOpenDetailModal(user)}>
              <p className="text-sm text-[#eee] px-4 py-1 rounded-md truncate bg-[rgb(29,36,51)]">
                Chi tiết
              </p>
            </div>
          </div>
        ))}
        {/* ))
      )} */}
      
      {isDetailModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center mt-15">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-semibold mb-6">Chi Tiết Khách Hàng</h2>
            <textarea defaultValue={selectedUser?.name} className="w-full mb-2 px-3 py-2 border rounded-lg text-sm h-[80px]" />
            <input type="text" readOnly value={selectedUser?.email} className="w-full mb-4 px-3 py-2 border rounded-lg text-sm" />
            <input type="text" readOnly value={selectedUser?.phone} className="w-full mb-4 px-3 py-2 border rounded-lg text-sm" />
            <input type="text" readOnly value={selectedUser?.number_of_orders + ' đơn hàng'} className="w-full mb-4 px-3 py-2 border rounded-lg text-sm" />
            <div className="flex justify-between gap-4.5">
              <div className="flex gap-4">
                <button className="flex justify-center rounded border border-stroke px-6 py-2 bg-primary text-white hover:bg-opacity-80" onClick={handleCloseDetailModal}>
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;

