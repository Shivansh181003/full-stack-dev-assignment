import Image from "next/image";
import React from "react";

export default function SignUp() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between">
      <div className=" h-screen w-1/2 border-2 relative">
        <Image
          src="/images/painting-person-standing-cliff-with-blue-lake-background.jpg"
          alt="Your Name"
          objectFit="cover"
          objectPosition="left top"
          fill
          className="w-full h-full top-0 left-0 object-cover rounded-2xl"
        />
      </div>
      <div className=" h-screen w-1/2 border-2">Right</div>
    </main>
  );
}
