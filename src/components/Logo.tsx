"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative w-full aspect-[767/303]">
      <Image
        src="/gradeintlogo.svg"
        alt="Pizzata Logo"
        width={767}
        height={303}
        className="w-full h-full object-contain"
        priority
        quality={100}
      />
    </div>
  );
}

