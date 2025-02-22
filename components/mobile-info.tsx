"use client";
import { Product } from "@/types";
import Currency from "./ui/currency";
import { ShoppingCart } from "lucide-react";
import { Button } from "@nextui-org/react";
import { useCart } from "@/hooks/use-cart";

interface InfoProps {
  product: Product;
}

const MobileInfo = ({ product }: InfoProps) => {
  const cart = useCart();
  return (
    <div className="flex flex-col sm:hidden justify-start gap-y-2 mt-3 md:mt-32">
      <h1 className="font-bold text-xl">{product.name}</h1>
      <Currency className="text-md" value={product.price} />
      <div className="flex justify-start items-center gap-x-4">
        <p className="font-semibold">Size:</p>
        <p>{product.size.name}</p>
      </div>

      <div className="flex justify-start items-center gap-x-4">
        <p className="font-semibold">Color:</p>
        <div
          style={{ backgroundColor: product.color.value }}
          className="rounded-full border h-6 w-6"
        ></div>
      </div>
      <Button
        onClick={() => cart.addItem(product)}
        className="w-36 mt-8 mx-auto"
        color="primary"
        radius="full"
      >
        Add To Cart
        <ShoppingCart size={20} className="" />
      </Button>
    </div>
  );
};

export default MobileInfo;
