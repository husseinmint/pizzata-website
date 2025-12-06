"use client";

import Image from "next/image";

export default function TextLogo() {
  return (
    <div className="relative w-full max-w-[767px] aspect-[767/303]">
      <Image
        src="/solidlogo.svg"
        alt="Pizzata Logo"
        width={767}
        height={303}
        className="w-full h-auto object-contain"
        priority
        quality={100}
      />
    </div>
  );
}

