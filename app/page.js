import { Button } from "@/components/ui/button";
import Image from "next/image";
import CategorySearch from "./_components/CategorySearch";
import Hero from "./_components/Hero";

export default function Home() {
  return (
  <div>
   <Hero/>
   <CategorySearch/>
  </div>
  );
}
