"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import datac from "./data.json";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setData(datac.countries);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    const filteredCountries = data.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredCountries);
  };

  const handleClear = () => {
    setSearchTerm("");
    setFilteredData([]);
  };
  return (
    <div className="bg-no-repeat">
      <div
        className="min-h-[100vh]"
        style={{ background: `url(/bg.jpg) no-repeat center center/ cover` }}
      >
        <div className="">
          <Navbar />
          <main className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-7 w-full">
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
            <div className="flex flex-col justify-center md:col-span-5 lg:col-span-3 px-10 pt-10 md:pt-0">
              <h1 className="md:text-7xl text-5xl max-w-[500px] text-white font-semibold">
                EXPLORE DREAM DESTINATION
              </h1>
              <h5 className="text-justify text-[18px] text-white pt-8">
                Travelling is an amazing way to learn a lot of things in life. A
                lot of people around the world travel every year to many places.
                Moreover, it is important to travel to humans. Some travel to
                learn more while some travel to take a break from their life.
              </h5>

              <div className="lg:hidden">
                <div className="pt-20">
                  <div className="flex gap-2 bg-white px-2 py-2 rounded-xl ">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter Place"
                      value={searchTerm}
                      onChange={handleChange}
                      className="w-full px-5 rounded-xl bg-white text-black  focus:outline-none"
                    />

                    <button
                      onClick={handleClear}
                      className="rounded-xl bg-cyan-400 text-white px-3 py-1"
                    >
                      Clear
                    </button>
                  </div>
                </div>
                <div className="flex justify-center pt-10">
                  <div className="">
                    {filteredData.length > 0 ? (
                      <div className=" w-[300px] bg-white p-5 flex flex-col gap-2 divide-y-2 overflow-y-scroll max-h-[70vh]">
                        {filteredData.map((country, index) => (
                          <div key={index}>
                            <Image
                              src="/c.jpg"
                              width={300}
                              height={300}
                              alt=""
                              className="h-[120px] w-full object-cover rounded-xl mb-5"
                            />

                            <h2 className="text-2xl font-semibold">
                              {country.name}
                            </h2>
                            <p>{country.description}</p>
                            {/* <img src={country.image} alt={country.name} width="100" /> */}
                          </div>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 p-5 md:col-span-4 pt-10 md:pl-[100px]">
              <h1 className="text-white text-3xl font-semibold">
                Recommendations
              </h1>
              <div className=" pt-5">
                <h1 className="text-white text-2xl font-semibold">
                  Beach
                </h1>
                <div className="md:flex gap-2 w-full">
                  <Image
                    src="/b1.jpg"
                    width={300}
                    height={300}
                    alt=""
                    className="h-[120px] w-full object-cover rounded-xl mb-5"
                  />
                  <Image
                    src="/b2.jpg"
                    width={300}
                    height={300}
                    alt=""
                    className="h-[120px] w-full object-cover rounded-xl mb-5"
                  />
                </div>
              </div>
              <div className="pt-5">
                <h1 className="text-white text-2xl font-semibold">
                  Temple
                </h1>
                <div className="md:flex gap-2 w-full">
                  <Image
                    src="/t1.jpeg"
                    width={300}
                    height={300}
                    alt=""
                    className="h-[120px] w-full object-cover rounded-xl mb-5"
                  />
                  <Image
                    src="/t2.jpg"
                    width={300}
                    height={300}
                    alt=""
                    className="h-[120px] w-full object-cover rounded-xl mb-5"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
