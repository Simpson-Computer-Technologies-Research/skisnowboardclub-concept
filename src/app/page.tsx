"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { NextUIProvider } from "@nextui-org/system";

export default function Home() {
  return (
    <NextUIProvider>
      <Navbar />

      <main className="flex min-h-screen w-screen flex-col pt-30">
        <Hero />
      </main>
    </NextUIProvider>
  );
}
