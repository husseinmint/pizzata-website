"use client";

import Image from "next/image";

export default function LetterLogo() {
  return (
    <div className="relative w-[17px] h-[28px]">
      <Image
        src="/letterlogo.svg"
        alt="Pizzata Logo"
        width={17}
        height={28}
        className="object-contain"
        priority
      />
    </div>
  );
}

