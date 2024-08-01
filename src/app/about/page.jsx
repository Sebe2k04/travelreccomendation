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
              <div className="flex flex-col justify-center col-span-6 px-10 pt-10 md:pt-0">
                <h1 className="md:text-7xl text-5xl max-w-[500px] text-white font-semibold">
                  About us
                </h1>
                <h5 className="text-justify text-[18px] text-white pt-8">
                  Travel is an enriching experience that broadens horizons,
                  offering a chance to explore new cultures, cuisines, and
                  landscapes. Whether its a journey to a bustling city or a
                  serene natural retreat, each destination presents unique
                  opportunities for adventure and learning. Traveling allows
                  people to step out of their comfort zones, meet new people,
                  and create lasting memories. It fosters a deeper understanding
                  of the world and can lead to personal growth and
                  transformation. From the thrill of discovering historical
                  landmarks to the joy of sampling local delicacies, travel adds
                  a vibrant chapter to the story of life.
                </h5>
              </div>
              <div className=""></div>


              {/* 
              
              
              
               */}


               
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
