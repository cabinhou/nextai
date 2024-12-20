import { Metadata } from "next";
import Image  from "next/image";
import homeSrc from "@/public/home.jpg";
import Hero from "@/components/hero";

export const metadata: Metadata = {
  title: 'AI - Home',
}

export default function Home() {
  return (
     <Hero imgUrl={homeSrc} altTxt="home" content="Profession Cloud Hosting" />
  );
}
