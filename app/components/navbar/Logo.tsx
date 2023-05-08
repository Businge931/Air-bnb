"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      className="hidden md:block cursor-default"
      alt="logo"
      height="100"
      width="100"
      src="/images/logo.png"
    />
  );
};

export default Logo;
