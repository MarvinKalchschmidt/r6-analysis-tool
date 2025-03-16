import { Children, ReactNode } from "react";
import Card from "@/components/GridComponents/Card";

interface GridProps {
  children: ReactNode;
  cols?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: number;
}

export default function Grid({
  children,
  cols = { sm: 2, md: 6, lg: 3, xl: 3 },
  gap = 6,
}: GridProps) {
  const colClasses = `
    grid-cols-1  // xs: Always 1 column
    ${cols.sm ? `sm:grid-cols-${cols.sm}` : ""}
    ${cols.md ? `md:grid-cols-${cols.md}` : ""}
    ${cols.lg ? `lg:grid-cols-${cols.lg}` : ""}
    ${cols.xl ? `xl:grid-cols-${cols.xl}` : ""}
  `.trim();

  return (
    <div className={`grid xl:grid-cols-3 gap-${gap}`}>
      {Children.map(children, (child, index) => (
        <Card key={index}>{child}</Card>
      ))}
    </div>
  );
}
