"use client"
import Link from "next/link";
import ButtonSignin from "@/components/ButtonSignin";
import Test from "@/components/Test";
import FlashCardContainer from "@/components/FlashCardCountainer";
import GenerateFlashCard from "@/components/GenerateFlashCard";
import Header from "@/components/Header";
import useLoadAll from "./hooks/useLoadAll";
import FlashCard from "@/components/FlashCard";
import Summary from "@/components/Summary";
import RecipeCard from "@/components/RecipeCard";
import Image from "next/image";
import Book from "@/components/Book";

export default function Page() {
  const [{ outputs, loading }, { loadMore }] = useLoadAll();
  return (
    <>
      {/* <header className="p-4 flex justify-end max-w-7xl mx-auto">
        <ButtonSignin text="Home" />
      </header> */}
      <Header />
      <main>
        <section className="flex flex-col items-center justify-right text-center gap-12 py-24 min-h-screen px-8">
          <h1 className="text-3xl font-extrabold">Know More, Live Better ⚡️</h1>
          <p>Personnal learning & Healthcare Companion. </p>
          <button onClick={loadMore} className={`flex gap-2 justify-start items-center shadow hover:shadow-lg hover:scale-105  transform duration-500 bg-cyan-50 rounded-lg p-4 ${loading && " animate-pulse "}`}>
            <Image src="/images/refresh-cw-alt-3-svgrepo-com.svg" className={`w-4 h-4 ${loading && " animate-spin "}`} width={100} height={100} />
            <div>Refresh</div>
          </button>
          <button onClick={() => console.log("test")} className=" bg-white bg-opacity-20 text-blue-100" >test</button>
          {/* <Test /> */}
          <div className="flex gap-12 flex-wrap justify-around">
            {outputs?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((output, index) => (
              <>
                <div key={output._id}>
                  {
                    output?.type === 'flashcard' && (
                      <FlashCard id={output._id}  flashcard={output.value} index={index} createdAt={output.createdAt} topic={output.topic} />
                    )
                  }
                  {
                    output?.type === 'summary' && (
                      <Summary id={output._id} summary={output.value} index={index} createdAt={output.createdAt} topic={output.topic} />
                    )
                  }
                </div>
                {index === 5 && (
                  <Book />
                )}
                {index === 3 && (
                  <RecipeCard />
                )}
              </>
            ))}
          </div>
          {/* <GenerateFlashCard /> */}
        </section>
      </main>
    </>
  );
}
