import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="flex items-center justify-center p-6 bg-(--secondary) border hover:border-(--orange) rounded-lg shadow-sm col-span-1">
      {children}
    </div>
  );
}
