"use client";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";
import { Button } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface FilterProps {
  data: (Size | Color)[];
  title: string;
  valueKey: string;
}

const Filter = ({ data, title, valueKey }: FilterProps) => {
  const searchParams = useSearchParams();
  const selectedValue = searchParams.get(valueKey);
  const router = useRouter();

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query: query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <>
      <h3 className="text-lg font-semibold">{title}</h3>
      <Separator className="my-3" />
      <div className="flex justify-start flex-wrap gap-2 mb-8">
        {data.map((item) => (
          <Button
            onClick={() => onClick(item.id)}
            className={cn(
              "border",
              selectedValue === item.id ? "bg-black text-white" : "bg-white"
            )}
            variant="solid"
            size="sm"
            key={item.id}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </>
  );
};

export default Filter;
