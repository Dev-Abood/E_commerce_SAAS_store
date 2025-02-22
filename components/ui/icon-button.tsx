import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon?: React.ReactElement;
  className?: string;
}

const IconButton = ({ onClick, icon, className }: IconButtonProps) => {
  return (
    <button
      className={cn(
        "bg-white p-2 flex items-center justify-center border shadow-md hover:scale-110 transition rounded-full",
        className
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
