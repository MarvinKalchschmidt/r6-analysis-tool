import Image, { StaticImageData } from "next/image";

interface TournamentProps {
  id: number;
  logo: StaticImageData;
  name: string;
  date: string;
}

export default function Tournament({ id, logo, name, date }: TournamentProps) {
  return (
    <div className="flex flex-col gap-1">
      <Image src={logo} alt={name} objectFit="cover" />
      <h3>{name}</h3>
      <span>{date}</span>
    </div>
  );
}
