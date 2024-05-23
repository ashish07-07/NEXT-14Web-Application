"use client";
import Image from "next/image";
import bookimage from "../public/book1.png";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

export function Appbar() {
  const session = useSession();
  return (
    <div className="flex text-white  ">
      <Image src={bookimage} alt="Book Iage" width={100} height={80}></Image>
      <button
        className="text-white "
        onClick={function () {
          signIn();
        }}
      >
        {" "}
        Sign in Button
      </button>
      {JSON.stringify(session)}
      {session.data?.user?.email}
    </div>
  );
}
