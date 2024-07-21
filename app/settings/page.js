"use client"
import Link from "next/link";
import ButtonSignin from "@/components/ButtonSignin";
import Test from "@/components/Test";
import styled from "styled-components";

const StyledLink = styled.button`
    background-color: white;
    display: inline-flex;
    padding: 8px 12px;
    border: 1px solid #000;
    text-decoration: none;
    color: #000;
`;


export default function Page() {
  return (
    <>
      <header className="p-4 flex justify-end max-w-7xl mx-auto">
        <ButtonSignin text="Home" />
      </header>
      <Link href="/" onclick="Page()"> <StyledLink className="hello"> Home </StyledLink> </Link>
      <main>
        <section className="flex flex-col items-center justify-center text-center gap-12 px-8 py-24">

        </section>
      </main>
    </>
  );
}

