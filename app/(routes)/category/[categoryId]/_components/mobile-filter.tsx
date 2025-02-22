"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import React from "react";
import Filter from "./filter";
import { Color, Size } from "@/types";

interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilter = ({ sizes, colors }: MobileFilterProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-black text-white mb-2" radius="full">
          Filter <Plus size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Filter data={sizes} valueKey="sizeId" title="Sizes" />
        <Filter data={colors} valueKey="colorId" title="Colors" />
      </SheetContent>
    </Sheet>
  );
};

export default MobileFilter;
