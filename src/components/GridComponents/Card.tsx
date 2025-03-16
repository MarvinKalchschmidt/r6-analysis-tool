import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  square?: boolean;
};

export default function Card({ children, square = false }: CardProps) {
  return (
    <div
      className={`flex items-center justify-center bg-(--secondary) p-1 border-3 border-(--secondary) rounded-lg shadow-sm hover:border-(--orange) ${
        square ? "aspect-square" : ""
      }`}
    >
      {children}
    </div>
  );
}
