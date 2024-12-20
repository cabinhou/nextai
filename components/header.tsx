"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  
  const pathname = usePathname()
    
  const linkData=[
    { name:"Performance", path:"/performance"},
    { name:"Reliability", path:"/reliability"},
    { name:"Scale", path:"/scale"}
  ];

  //如果是not found页面,则不返回导航条
  // const accessLink = ["/", "/performance", "/reliability", "/scale"]
  // if(!accessLink.includes(pathname)) return null;
   
  return (
     <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto text-white p-8">
        <Link className="text-3xl font-bold" href="/">
          Home
        </Link>
        <div className="text-xl space-x-4">
          {
            linkData.map((link) => (
              <Link key={link.path} className={pathname === link.path?"text-purple-500":""} href={link.path}> {link.name} </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}
