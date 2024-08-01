"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { useEffect, useState } from "react";

const page = () => {
  return (
    <div>
      <div className="bg-no-repeat">
      <div
        className="min-h-[100vh]"
        style={{ background: `url(/bg.jpg) no-repeat center center/ cover` }}
      >
        <div className="">
          <Navbar />
          <main className="grid grid-cols-1 md:grid-cols-7 w-full">
            <div className="md:flex hidden flex-col justify-center gap-20 h-[80vh] ">
              <div className="flex justify-center items-center ">
                <div className="bg-white w-1 h-44"></div>
              </div>
              <div className="md:text-2xl tetx-xl text-white flex flex-col  items-center  gap-8">
                <FaTwitter />
                <FaFacebook />
                <FaInstagram />
              </div>
            </div>
            <div className="flex flex-col justify-center col-span-3 px-10 pt-10 md:pt-0">
              <h1 className="md:text-7xl text-5xl max-w-[500px] text-white font-semibold">
               Contact
              </h1>
              {/* <h5 className="text-justify text-[18px] text-white pt-8">
                Travelling is an amazing way to learn a lot of things in life. A
                lot of people around the world travel every year to many places.
                Moreover, it is important to travel to humans. Some travel to
                learn more while some travel to take a break from their life.
              </h5> */}
            </div>
            <div className="flex items-center">
                <form action="" className="grid gap-5 bg-black/50 rounded-xl p-5 min-w-[300px] md:min-w-[500px]">
                    <input type="text" name="" id="" placeholder="Name" className="py-2 px-5 w-full focus:outline-none rounded-xl" />
                    <input type="text" name="" id="" placeholder="Email" className="py-2 px-5 w-full focus:outline-none rounded-xl" />
                    <textarea name="" id="" placeholder="Tell me Something" className="py-2 px-5 w-full focus:outline-none rounded-xl" ></textarea>
                    <input type="submit" value={"Send"} className="text-white font-semibold bg-black py-2 px-5 w-full focus:outline-none rounded-xl" />

                </form>
            </div>
          </main>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page
