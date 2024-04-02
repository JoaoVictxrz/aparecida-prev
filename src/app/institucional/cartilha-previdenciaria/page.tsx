import { Metadata } from "next";
import LinkAzul from "../components/links";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Cartilha Previdênciária",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-2 dark:text-white">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] pb-2 dark:text-zinc-100 dark:border-zinc-700">
          Cartilha Previdênciária
        </h1>
        <div className="w-full container gap-5 pb-20">
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/CARTILHA-PREVIDENCIARIA-2023.pdf"
            text="CARTILHA PREVIDENCIARIA 2023"
          />
        </div>
      </section>
    </article>
  );
}
