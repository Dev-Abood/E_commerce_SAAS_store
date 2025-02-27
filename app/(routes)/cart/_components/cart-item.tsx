import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  data: Product;
}

const CartItem = ({ data }: CartItemProps) => {
  const cart = useCart();
  return (
    <li className="flex py-6 border-b">
      <div className="relative bg-gray-100 h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.image[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0 ">
          <IconButton
            onClick={() => cart.removeItem(data.id)}
            icon={<X size={15} />}
          />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-md sm:text-lg font-semibold text-black">
              {data.name}
            </p>
          </div>

          <div className="flex text-xs sm:text-sm justify-start items-center">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 mx-2 text-lg font-thin">|</p>
            <p className="text-gray-500">{data.size.name}</p>
          </div>
          <Currency
            className="text-sm text-zinc-700 sm:text-lg"
            value={data.price}
          />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
