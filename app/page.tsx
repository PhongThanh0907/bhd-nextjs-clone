import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <Banner />
    </main>
  );
}
