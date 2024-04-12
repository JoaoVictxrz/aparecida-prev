import LinkAzul from "@/app/institucional/components/links";
import Container from "@/components/container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Lei orgânica do município",
  };
}

export default function Home() {
  return (
    <Container title="Lei orgânica do município">
      <div className="flex flex-col">
        <p className="pb-2 font-bold uppercase">Legislação Municipal</p>
        <div className="flex w-3/4 flex-col pb-3 pl-5 md:w-1/4">
          <LinkAzul text="Emendas à Lei Orgânica" href="" />
        </div>
      </div>
      <div className="= flex flex-col pb-3">
        <p className="pb-2 font-bold uppercase">Emendas à Lei Orgânica</p>
        <div className="flex flex-col gap-1 pl-5 md:w-2/4">
          <LinkAzul
            text="Emenda à Lei Orgânica N°006/2019 – Revoga o artigo 13 da Lei Orgânica do município"
            href=""
          />
          <LinkAzul
            text="Emenda à Lei Orgânica N°004/2014 – Altera o artigo 25 da Lei Orgânica do município"
            href=""
          />
          <LinkAzul
            text="Emenda à Lei Orgânica N°003/2012 – Altera o inciso V do artigo 31 da Lei Orgânica do município"
            href=""
          />
          <LinkAzul
            text="Emenda à Lei Orgânica N°002/2012 – Altera o § 1° do artigo 62 da Lei Orgânica do município"
            href=""
          />
          <LinkAzul
            text="Emenda à Lei Orgânica n° 001-2009 – Suprime o artigo 19 da Lei Orgânica do município"
            href=""
          />
        </div>
      </div>
    </Container>
  );
}
