import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Title from "@/components/title";
import Allproducts from "@/components/allproducts";
// import Home from "@/components/home";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Title></Title>
      <Allproducts></Allproducts>
    </div>
  );
}
