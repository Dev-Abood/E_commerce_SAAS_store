"use client";

import { useCart } from "@/hooks/use-cart";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface CartButtonProps {
  className: string;
}

const CartButton = ({ className }: CartButtonProps) => {
  const cart = useCart();
  const router = useRouter();
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={cn("", className)}>
      <Button
        onClick={() => router.push("/cart")}
        radius="full"
        size="sm"
        className="bg-black"
      >
        <ShoppingBag size={17} className="text-white" />
        <p className="text-white text-sm">{cart.items.length}</p>
      </Button>
    </div>
  );
};

export default CartButton;
