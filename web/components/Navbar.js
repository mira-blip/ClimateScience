import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/Logo.png";

const Navbar = () => {
  return (
    <div className="mt-6 flex w-4/5 justify-between items-center">
      <Image src={Logo} />
      <div className="flex w-1/2 items-center justify-between">
        <div className="flex w-2/3 justify-around text-lg">
          <div className="font-bold">Бидний тухай</div>
          <div className="font-bold">Суралцах</div>
          <div className="font-bold">Сургуулиуд</div>
        </div>
        <Link href="/">
          <div
            className={`flex rounded-2xl bg-cyan-400 text-white font-bold h-14 w-28 items-center justify-center text-lg`}
          >
            Нэгдэх
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
