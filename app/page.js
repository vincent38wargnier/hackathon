"use client"
import Link from "next/link";
import ButtonSignin from "@/components/ButtonSignin";
import Test from "@/components/Test";
import styled from "styled-components";


const StyledLink = styled.button`
    background-color: white;
    border: 1px solid #000;
    text-decoration: none;
    color: #000;
`;
import FlashCardContainer from "@/components/FlashCardCountainer";
import GenerateFlashCard from "@/components/GenerateFlashCard";

export default function Page() {
  return (
    <>
      <header className="p-4 flex justify-end max-w-7xl mx-auto">
        <ButtonSignin text="Home" />
      </header>
      <Link href="/settings" class="flex flex-col w-10 h-10 bg-base-300 justify-center items-center rounded-full shrink-0 px-1"> <StyledLink className="hello"> Settings </StyledLink></Link>
      <main>
        <section className="flex flex-col items-center justify-right text-center gap-12 py-24">
          <h1 className="text-3xl font-extrabold">HackYourHeatlh ⚡️</h1>
           <p> We simplify health and offer personalized healthcare learning solutions. </p>
          <Test />
          <GenerateFlashCard />
        </section>
      </main>
    </>
  );
}
