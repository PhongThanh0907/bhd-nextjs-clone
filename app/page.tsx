import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ShowMovies from "@/components/ShowMovies";
import CardMember from "@/components/CardMember";
import PromotionEvent from "@/components/PromotionEvent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Header />
      <Banner />
      <ShowMovies />
      <CardMember />
      <PromotionEvent />
      <Footer />
    </main>
  );
}
