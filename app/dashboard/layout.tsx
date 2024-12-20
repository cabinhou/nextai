'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0)
  const pathname = usePathname()
  //console.log(pathname)
  const linkData =[
    { name:"About",path:"/dashboard/about"},
    { name:"Setting",path:"/dashboard/setting"}
  ];

  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
        <div className="flex gap-4 font-bold text-lg mb-4">
           {
            linkData.map((link) => (
              <Link key={link.path} className={pathname === link.path?"text-purple-500":""} href={link.path}> {link.name} </Link>
            ))
          }
        </div>
        
        <h2>DashBoard Layout {count}</h2>
        <button className="bg-black text-white p-2 my-4 rounded-md" onClick={()=>setCount(count + 1)}>Increment</button>
        {children}
    </div>    
  );
}
