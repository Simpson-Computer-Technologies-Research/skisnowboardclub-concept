import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed z-50 flex w-screen flex-row items-center justify-between border-b-2 border-slate-50 bg-white px-8 py-3">
      <div className="flex flex-row items-center space-x-6">
        <Image
          src="/images/logo-temp.png"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer rounded-lg hover:brightness-[97%]"
          priority={true}
        />

        <h1 className="text-4xl font-bold text-slate-900 tracking-wider">
          Ski&nbsp;<span className="text-blue-600 font-extrabold">&</span>
          &nbsp;Board Club
        </h1>
      </div>

      <div className="flex flex-row items-center space-x-3">
        <Link
          href="/"
          className="cursor-pointer rounded-lg  px-5 py-3 text-base  hover:bg-slate-50"
        >
          Home
        </Link>
        <Link
          href="/settings"
          className="cursor-pointer rounded-lg  px-5 py-3 text-base  hover:bg-slate-50"
        >
          Trips and Tickets
        </Link>
        <Link
          href="/learn"
          className="cursor-pointer rounded-lg  px-5 py-3 text-base  hover:bg-slate-50"
        >
          About us
        </Link>
        <Link
          href="/contact"
          className="cursor-pointer rounded-lg  px-5 py-3 text-base  hover:bg-slate-50"
        >
          Contact
        </Link>
        <Link
          href="/login"
          className="text-base font-medium tracking-wide rounded-lg bg-blue-600 px-8 py-4 text-white shadow-xl hover:bg-blue-700"
        >
          Sign in
        </Link>
      </div>
    </nav>
  );
}
