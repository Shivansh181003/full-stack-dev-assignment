import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function SignUp() {
  return (
    <main className="flex min-h-screen w-full flex-col lg:flex-row items-center justify-between">
      <div className=" h-screen w-full lg:w-1/2  relative">
        <Image
          src="/images/painting-person-standing-cliff-with-blue-lake-background.jpg"
          alt="Your Name"
          objectFit="cover"
          objectPosition="left top"
          fill
          className="w-full h-full top-0 left-0 object-cover rounded-2xl"
        />
      </div>
      <div className=" flex flex-col h-screen absolute lg:static w-full lg:w-1/2 lg:px-20 py-12 gap-20 justify-center  items-center">
        <div className=" top-10 h-auto gap-1 flex flex-col justify-between items-center">
          <img
            className="w-20 h-10"
            src="LoGo.svg"
            loading="lazy"
            alt="google logo"
          />
          <span className="font-poppins-200">Journey to a trillion miles starts from here!!</span>
        </div>

        <div className=" top-10 lg:w-96 rounded-3xl bg-fill p-10">
          <div className=" h-full w-full flex flex-col justify-between gap-10 items-center">
            <div className="flex flex-col gap-2 justify-center items-center">
              <h1 className="font-bold text-2xl font-poppins-400">Sign Up</h1>
              <h3 className="font-thin font-poppins-200 text-xs">
                Choose a Sign up Method
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center dark:bg-gray-800">
                <button className="px-4 py-2 border flex gap-2  w-64 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                  <img
                    className="w-6 h-6"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    loading="lazy"
                    alt="google logo"
                  />
                  <span>Sign Up with Google</span>
                </button>
              </div>

              <div className="flex items-center justify-center dark:bg-gray-800">
                <button className="px-4 py-2 border flex gap-2 w-64 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                  <img
                    className="w-6 h-6"
                    src="message.svg"
                    loading="lazy"
                    alt="google logo"
                  />
                  <span>Sign Up with Google</span>
                </button>
              </div>
            </div>
            <div className="gap-2">
              <span>Already a User? </span>
              <span className=" text-blue-600">Log in</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
