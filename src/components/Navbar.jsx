import Link from "next/link";
import React from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import datac from "@/app/data.json";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Drawer } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setData(datac.countries);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
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

  console.log(data);
  return (
    <div className="">
      <div className="px-10 py-5">
        <main className="flex justify-between  px-3 shadow-md bg-black/80 py-3 rounded-xl items-center">
          <div className="flex gap-2 items-center">
            <MdOutlineTravelExplore className="text-white text-4xl" />
            <Link
              href={"/"}
              className="lg:text-2xl text-xl text-white  font-semibold"
            >
              Travello
            </Link>
          </div>
          <div className="lg:flex gap-8 text-white font-semibold hidden">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About Us</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
          <div className="lg:flex gap-2 bg-white px-2 py-2 rounded-xl hidden">
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
          <section className="lg:hidden">
          <button onClick={toggleDrawer(true)}>
            <HiMenuAlt3 className="md:text-3xl text-2xl text-white" />
          </button>
        </section>
        </main>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <section className="flex flex-col justify-between w-full min-w-[250px] min-h-[100vh] px-10">
            <div className="">
              <div className="flex justify-end pt-10">
                <IoMdClose className="text-4xl" onClick={toggleDrawer(false)} />
              </div>
              <div className="flex justify-center pt-10 font-bold text-2xl ec tracking-[5px]">
                <h1>Menu</h1>
              </div>

              <div className="flex  flex-col gap-5  pt-10 text-center">
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About Us</Link>
                <Link href={"/contact"}>Contact</Link>
              </div>
            </div>
          </section>
        </Drawer>
      </div>
      {filteredData.length > 0 ? (
        <div className="absolute w-[500px] right-10 top-32 bg-white p-5 flex flex-col gap-2 divide-y-2 overflow-y-scroll max-h-[70vh]">
          {filteredData.map((country, index) => (
            <div key={index}>
              <Image
                src="/c.jpg"
                width={300}
                height={300}
                alt=""
                className="h-[120px] w-full object-cover rounded-xl mb-5"
              />

              <h2 className="text-2xl font-semibold">{country.name}</h2>
              <p>{country.description}</p>
              {/* <img src={country.image} alt={country.name} width="100" /> */}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
