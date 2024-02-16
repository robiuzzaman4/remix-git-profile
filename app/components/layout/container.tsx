import { ReactNode } from "react";
import { cn } from "~/lib/utils";

type TContainer = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainer) => {
  return (
    <div className={cn("w-full max-w-screen-lg mx-auto px-4", className)}>
      {children}
    </div>
  );
};

export default Container;
