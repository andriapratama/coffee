"use client";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./_components/hero"));
const Navbar = dynamic(() => import("./_components/navbar"));
const Products = dynamic(() => import("./_components/products"));
const Quotes = dynamic(() => import("./_components/quotes"));
const Roasting = dynamic(() => import("./_components/roasting"));
const Footer = dynamic(() => import("./_components/footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Quotes />
      <Roasting />
      <Footer />
    </>
  );
}
