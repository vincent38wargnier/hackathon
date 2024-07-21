"use client"
import Link from "next/link";
import ButtonSignin from "@/components/ButtonSignin";
import Test from "@/components/Test";
import styled from "styled-components";

export default function Page() {
  return (
    <>
      <header className="p-4 flex justify-end max-w-7xl mx-auto">
        <ButtonSignin text="Home" />
      </header>
      <main>
        <section className="flex flex-col items-center justify-center text-center gap-12 px-8 py-24">

        </section>
      </main>
    </>
  );
}

