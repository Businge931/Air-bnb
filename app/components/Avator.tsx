"use client";

import Image from "next/image";
interface AvatorProps {
  src: string | null | undefined;
}

const Avator: React.FC<AvatorProps> = ({ src }) => {
  return (
    <Image
      alt="Avator"
      src={src || "/images/placeholder.jpg"}
      className="rounded-full"
      height="30"
      width="30"
    />
  );
};

export default Avator;
