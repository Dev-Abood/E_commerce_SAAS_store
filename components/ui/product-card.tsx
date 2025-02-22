"use client";

import { Product } from "@/types";
import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import { usePreviewModal } from "@/hooks/use-preview-modal";
import { MouseEventHandler } from "react";
import { useCart } from "@/hooks/use-cart";

interface ProductCartList {
  product: Product;
}

const ProductCard = ({ product }: ProductCartList) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();
  const handleOnClick = () => {
    router.push(`/product/${product.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(product);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(product);
  };

  return (
    <div
      onClick={handleOnClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 z-10"
    >
      <div className="aspect-square bg-gray-100 rounded-xl relative">
        <Image
          className="aspect-square object-cover rounded-md"
          alt="Product image"
          fill
          src={product?.image?.[0]?.url}
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition w-full flex items-center justify-center gap-x-6 bottom-5">
          <IconButton
            icon={<Expand size={20} className="text-gray-600 z-50" />}
            onClick={onPreview}
          />
          <IconButton
            icon={<ShoppingCart size={20} className="text-gray-600 z-50" />}
            onClick={onAddToCart}
          />
        </div>
      </div>
      {/* Descrption */}
      <div>
        <p className="font-semibold text-lg">{product?.name}</p>
        <p className="text-sm text-gray-500">{product?.category?.name}</p>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={product.price} />
      </div>
    </div>
  );
};

export default ProductCard;
