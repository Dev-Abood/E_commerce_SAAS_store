"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface CurrencyProps {
  value: string | number;
  className?: string;
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const Currency = ({ value, className }: CurrencyProps) => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={cn("font-semibold", className)}>
      {formatter.format(Number(value))}
    </div>
  );
};

export default Currency;
