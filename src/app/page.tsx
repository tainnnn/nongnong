"use client"

import Navbar from "./components/Navbar";
import Backboard from "./backboard/page"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-neutral-400">
      <Navbar/> 
      <Backboard/>
    </main>
  );
}
