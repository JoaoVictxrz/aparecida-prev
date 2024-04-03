import { Metadata } from "next";
import LinkAzul from "../components/links";
import Title from "@/components/title";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Cartilha Previdênciária",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-2 dark:text-white">
      <section className="px-2 container">
        <Title title="Cartilha Previdênciária" />
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
