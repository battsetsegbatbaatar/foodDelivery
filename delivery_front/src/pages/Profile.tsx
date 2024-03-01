import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Delivery } from "@/components/Delivery";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";

const inter = Inter({ subsets: ["latin"] });

const name = ["Хямдралтай", "Үндсэн хоол", "Салад ба зууш", "Амттан"];

export default function Home() {
  return (
    <>
      <Header />

      <Footer />
    </>
  );
}
