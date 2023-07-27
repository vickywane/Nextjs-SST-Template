import React from "react";
import Link from "next/link";

const Header = () => (
  <header className="flex h-[65px] border-b-2 items-center w-full ">
    <nav className={"flex w-full mx-4 justify-between"}>
      <div>
        <p className="text-xl font-semibold">
          <Link href={"/"}> JuiceBox </Link>
        </p>
      </div>

      <div>
        <ul className={"flex "}>
          <li className={"mx-4"}>
            <p>
              <Link href={"/"}>Payment</Link>
            </p>
          </li>

          <li className={"mx-4"}>
            <p>
              <Link href={"/"}> Services </Link>{" "}
            </p>
          </li>

          <li className={"mx-4"}>
            <p>
              <Link href={"/"}> Account </Link>
            </p>
          </li>
        </ul>
      </div>

      <div>
        <button> Coming To IOS</button>
      </div>
    </nav>
  </header>
);

export default Header;
