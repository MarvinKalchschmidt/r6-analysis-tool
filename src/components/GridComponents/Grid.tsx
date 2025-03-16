import { Children, ReactNode } from "react";
import Card from "@/components/GridComponents/Card";

interface GridProps {
  children: ReactNode;
  gap?: number;
}

export default function Grid({ children, gap = 6 }: GridProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-${gap}`}
    >
      {Children.map(children, (child, index) => (
        <Card key={index} square={true}>
          {child}
        </Card>
      ))}
    </div>
  );
}
