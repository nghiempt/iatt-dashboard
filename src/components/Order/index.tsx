"use client"

import Image from "next/image";
import { getAll } from "@/utils/apis";
import { useEffect, useState } from "react";

interface Order {
  id: number;
  product_id: number;
  product_name: string;
  image: string;
  order_date: string;
  price: number;
  status: string;
  user_name: string;
  user_phone: string;
  user_address: string;
}

const OrderPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDelete, setIsDelete] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null as any);

  const status = ['Đã tạo', 'Đã xác nhận', 'Đang giao', 'Đã giao', 'Đã hủy'];

  const orderList: Order[] = [
    {
      id: 1,
      product_id: 101,
      product_name: "Ảnh Ép Plastic",
      image: "https://res.cloudinary.com/farmcode/image/upload/v1728991261/iatt/IMG_7646_eojjmi.jpg",
      order_date: "2024-11-01",
      price: 129000,
      status: "Đã tạo",
      user_name: "Nguyễn Văn A",
      user_phone: "0901234567",
      user_address: "123 Đường ABC, Quận 1, TP.HCM"
    },
    {
      id: 2,
      product_id: 102,
      product_name: "3D 4K",
      image: "https://res.cloudinary.com/farmcode/image/upload/v1728994314/iatt/IMG_7583_rlk2is.jpg",
      order_date: "2024-11-02",
      price: 129000,
      status: "Đã xác nhận",
      user_name: "Trần Thị B",
      user_phone: "0902345678",
      user_address: "456 Đường XYZ, Quận 2, TP.HCM"
    },
    {
      id: 3,
      product_id: 103,
      product_name: "Đĩa Xoay",
      image: "https://res.cloudinary.com/farmcode/image/upload/v1728994420/iatt/IMG_7599_sgiwq0.jpg",
      order_date: "2024-11-03",
      price: 129000,
      status: "Đang giao",
      user_name: "Lê Văn C",
      user_phone: "0903456789",
      user_address: "789 Đường DEF, Quận 3, TP.HCM"
    },
    {
      id: 4,
      product_id: 104,
      product_name: "HD 4K",
      image: "https://res.cloudinary.com/farmcode/image/upload/v1728994618/iatt/IMG_7608_vxzprx.jpg",
      order_date: "2024-11-04",
      price: 129000,
      status: "Đã giao",
      user_name: "Phạm Thị D",
      user_phone: "0904567890",
      user_address: "321 Đường GHI, Quận 4, TP.HCM"
    },
    {
      id: 5,
      product_id: 105,
      product_name: "Khung Để Bàn",
      image: "https://res.cloudinary.com/farmcode/image/upload/v1728994834/iatt/IMG_7630_nqibet.jpg",
      order_date: "2024-11-05",
      price: 129000,
      status: "Đã hủy",
      user_name: "Nguyễn Thị E",
      user_phone: "0905678901",
      user_address: "654 Đường JKL, Quận 5, TP.HCM"
    }
  ];

  const handleOpenDetailModal = (order: any) => {
    setSelectedOrder(order);
    setIsDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedOrder(null);
  };

  useEffect(() => {
    setOrders(orderList);
  }, []);

  const newLocal = "col-span-1 flex items-center";
  return (
    <div className="rounded-md border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5 flex justify-between items-center w-full">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          DANH SÁCH ĐƠN HÀNG
        </h4>
      </div>
      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Tên Sản Phấm</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Ngày Tạo Đơn</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Giá Tiền</p>
        </div>
        <div className={newLocal}>
          <p className="font-medium">Chi Tiết</p>
        </div>
      </div>
      {orders.map((order: Order) => (
        <div
          className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5 cursor-pointer hover:bg-gray-50"
          key={order.id}
          onClick={() => setSelectedOrder(order)}>
          <div className="col-span-3 hidden items-center sm:flex">
            <div className="grid grid-cols-4 gap-4 items-center">
              <div className="w-16 h-16 col-span-1 relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={order.image}
                  alt="img"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="col-span-3 text-sm text-black dark:text-white">
                {order.product_name}
              </p>
            </div>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {order.order_date}
            </p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {Intl.NumberFormat('de-DE').format(order.price)} VND
            </p>
          </div>
          <div className="col-span-1 flex items-center" onClick={() => handleOpenDetailModal(order)}>
            <p className="text-sm text-[#eee] px-4 py-1 rounded-md truncate bg-[rgb(29,36,51)]">
              Chi tiết
            </p>
          </div>
        </div>
      ))}

      {isDetailModalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center mt-15">
          <div className="bg-white p-6 rounded-lg w-2/3 flex lg:ml-60 md:ml-60">
            <div className="w-1/2 pr-4">
              <h2 className="text-xl font-semibold mb-6">Chi Tiết Đơn Hàng</h2>
              <div className="mb-4 flex justify-center items-center gap-5">
                <img
                  src={selectedOrder?.image}
                  alt="Product Image"
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <button className="px-4 py-2 border border-gray-600 text-gray-600 rounded-lg font-medium transition-all duration-500 hover:scale-110 h-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-image-down"><path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" /><path d="m14 19 3 3v-5.5" /><path d="m17 22 3-3" /><circle cx="9" cy="9" r="2" /></svg>
                </button>
              </div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tên Sản Phẩm</label>
              <input
                type="text"
                value={selectedOrder?.product_name}
                className="w-full mb-4 px-3 py-2 border rounded-lg text-sm"
                readOnly
              />
              <label className="block text-sm font-medium text-gray-700 mb-1">Ngày Đặt Hàng</label>
              <input
                type="text"
                value={selectedOrder?.order_date}
                className="w-full mb-4 px-3 py-2 border rounded-lg text-sm"
                readOnly
              />
              <label className="block text-sm font-medium text-gray-700 mb-1">Giá</label>
              <input
                type="text"
                value={Intl.NumberFormat('de-DE').format(selectedOrder?.price) + ' VND'}
                className="w-full mb-4 px-3 py-2 border rounded-lg text-sm"
                readOnly
              />
              <label className="block text-sm font-medium text-gray-700 mb-1">Trạng Thái Đơn Hàng</label>
              <select
                value={selectedOrder?.status}
                onChange={(e) => setSelectedOrder({ ...selectedOrder, status: e.target.value })}
                className="w-full mb-4 px-3 py-2 border rounded-lg text-sm"
              >
                {status.map((statusOption, index) => (
                  <option key={index} value={statusOption}>
                    {statusOption}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/2 pl-4 border-l border-gray-300">
              <h2 className="text-xl font-semibold mb-6">Thông Tin Người Mua</h2>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tên Người Dùng</label>
              <input
                type="text"
                value={selectedOrder?.user_name}
                className="w-full mb-4 px-3 py-2 border rounded-lg text-sm"
                readOnly
              />
              <label className="block text-sm font-medium text-gray-700 mb-1">Số Điện Thoại</label>
              <input
                type="text"
                value={selectedOrder?.user_phone}
                className="w-full mb-4 px-3 py-2 border rounded-lg text-sm"
                readOnly
              />
              <label className="block text-sm font-medium text-gray-700 mb-1">Địa Chỉ</label>
              <textarea
                value={selectedOrder?.user_address}
                className="w-full mb-4 px-3 py-2 border rounded-lg text-sm"
                readOnly
                rows={4}
              />
              <div className="flex justify-end gap-4.5 mt-4">
                <button
                  className="flex justify-center rounded border border-stroke px-6 py-2 hover:bg-opacity-80"
                  onClick={handleCloseDetailModal}
                >
                  Đóng
                </button>
                <button
                  className="flex justify-center rounded border border-stroke px-6 py-2 bg-primary text-white hover:bg-opacity-80"
                  onClick={handleCloseDetailModal}
                >
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPage;

