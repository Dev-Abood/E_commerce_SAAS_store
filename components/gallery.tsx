"use client";
import { Product } from "@/types";
import { Tabs, Tab } from "@nextui-org/react";
import Image from "next/image";
import { Separator } from "./ui/separator";

interface GalleryProps {
  product: Product;
}

const Gallery = ({ product }: GalleryProps) => {
  return (
    <div className="flex w-full flex-col">
      <Tabs
        classNames={{
          tab: "h-20 mt-5",
        }}
        disableAnimation={true}
        size="lg"
        color="primary"
        aria-label="Options"
        variant="underlined"
      >
        {product.image.map((image) => (
          <Tab
            key={image.id}
            title={
              <div className="relative h-16 w-16">
                <Image src={image.url} fill alt="Product image" />
              </div>
            }
          >
            <Separator />
            <div className="border mt-5 opacity-1 rounded-xl bg-white">
              <div className="relative aspect-square rounded-xl bg-gray-100">
                <Image
                  className="aspect-square rounded-xl"
                  src={image.url}
                  fill
                  alt="Product image"
                />
              </div>
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default Gallery;
