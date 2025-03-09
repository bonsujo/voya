"use client"

import { Destinations } from "./components/Destinations";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollWrapper } from "./components/ScrollWrapper";

export default function Home() {
  return (
    <ScrollWrapper>
    <Navbar />
    <Hero />
    <Destinations />
    </ScrollWrapper>
  );
}
