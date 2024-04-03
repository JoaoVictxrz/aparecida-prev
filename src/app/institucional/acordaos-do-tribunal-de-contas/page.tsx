import { Metadata } from "next";
import Link from "next/link";
import LinkAzul from "../components/links";
import Title from "@/components/title";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Acórdãos do tribunal de contas",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-2 dark:text-white">
      <section className="px-2 container">
        <Title title="ACÓRDÃO DO TRIBUNAL DE CONTAS – TCM" />
        <div className="w-full container flex flex-col gap-5 pb-20">
          <p className="font-semibold text-xl text-center">
            Aparecida Prev - Acórdãos do tribunal de contas
          </p>
          <LinkAzul
            text="ACORDÃO Nº 07973 – 2023-2022"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/11/PROCESSO-2023-2022-2.pdf"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/ACORDAO-No-00007-2022-2021.pdf"
            text="ACORDÃO Nº 00007 – 2022-2021"
          />
          <LinkAzul
            text="ACORDÃO Nº 03568 – 2021-2020"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/ACORDAO-No-03568-2021-2020.pdf"
          />
        </div>
      </section>
    </article>
  );
}
