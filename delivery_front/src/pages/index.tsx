import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Delivery } from "@/components/Delivery";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";

const inter = Inter({ subsets: ["latin"] });

const deliveryData = [
  {
    url: "./book.png",
    service: "Хүргэлтийн төлөв хянах",
    description: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    svg: "./time.png",
    service: "Шуурхай хүргэлт",
    description: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    url: "./cook.png",
    service: "Эрүүл, баталгаат орц",
    description: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    url: "./book.png",
    service: "Хоолны өргөн сонголт",
    description: "Захиалга бэлтгэлийн явцыг хянах",
  },
];

const name = ["Хямдралтай", "Үндсэн хоол", "Салад ба зууш", "Амттан"];

export default function Home() {
  return (
    <>
      <Header loggedIn={null} />
      <img src="/FoodDelivery.png" alt="" className=" w-full" />
      <main>
        <div className="flex gap-[47px] py-[90px] px-[120px] justify-center">
          {deliveryData.map((delivery) => (
            <Delivery
              url={delivery.url}
              service={delivery.service}
              description={delivery.description}
            />
          ))}
        </div>
        <a href="/Profile">Pro</a>
        <div className="flex flex-col gap-6">
          {name.map((name) => (
            <CategoryCard name={name} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
