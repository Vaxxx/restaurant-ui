import React from "react";
import {TbCurrencyNaira} from "react-icons/tb";
import {useQuery} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";

const OrdersPage = () => {

  const {data:session, status} = useSession();
  const router = useRouter();

  if(status === "authenticated") router.push("/");

  const {isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
           fetch(`${process.env.NEXTAUTH_URL}/api/orders`)
               .then((response) => response.json())
  })
  if(isLoading || status === 'loading') return 'Loading...';
  return (
      <div className="p-4 lg:px-20 xl:px-40">
        <table className="w-full border-separate border-spacing-3">
          <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th className={"text-sm flex flex-row"}>Price(In <TbCurrencyNaira size={19}/>)</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>
          {data.map((item) => (
            <tr className="text-sm md:text-base bg-red-50" key={item.id}>
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default OrdersPage;
