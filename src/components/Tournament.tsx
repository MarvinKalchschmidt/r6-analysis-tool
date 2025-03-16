import { TournamentProps } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Tournament({ id, logo, name, date }: TournamentProps) {
  return (
    <Link href={`/${id}`} className="flex flex-col gap-3 w-full h-full">
      <div className="flex justify-center items-center w-full h-[65%] bg-(--lightGray) overflow-hidden">
        <Image
          src={logo}
          alt={name}
          width={500}
          height={300}
          className="w-full h-full object-contain p-6"
        />
      </div>
      <div className="flex flex-col justify-between px-1 grow w-full">
        <h3 className="font-(family-name:--font-goldman) text-3xl lg:text-2xl">
          {name}
        </h3>
        <span className="text-(--secondaryText) text-xl lg:text-base">
          {date}
        </span>
      </div>
    </Link>
  );
}
