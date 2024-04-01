import { Metadata } from "next";
import LinkAzul from "../components/links";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Certidões",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] pb-2 ">
          Certidões
        </h1>
        <div className="w-2/4 container flex flex-col gap-3 pb-20">
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/12/Certidao-Negativa-de-Debitos_APARECIDAPREV-SEFAZ.pdf"
            text="CERTIDÃO NEGATIVA DE DÉBITOS – ESTADO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/12/Consulta-Regularidade-do-Empregador_ATUALIZADA.pdf"
            text="CERTIDÃO NEGATIVA DE DÉBITOS – FGTS"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/12/certidao-receita-federal-1.pdf"
            text="CERTIDÃO NEGATIVA DE DÉBITOS – UNIÃO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/Trabalhista.pdf"
            text="CERTIDÃO NEGATIVA DE DÉBITOS – TRABALHISTA"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/12/Certidao-Negativa-Municipal_ATUALIZADA.pdf"
            text="CERTIDÃO NEGATIVA DE DÉBITOS – MUNICIPIO"
          />
        </div>
      </section>
    </article>
  );
}
