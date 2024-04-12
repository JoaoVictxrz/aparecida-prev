import { Metadata } from "next";
import LinkAzul from "../components/links";
import Container from "@/components/container";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Certificação",
  };
}

export default function Home() {
  return (
    <Container title="Certificação">
      <div>
        <h1 className="upercase font-bold">
          CONSELHO MUNICIPAL DE PREVIDÊNCIA
        </h1>
        <div className="w-3/ flex flex-col pb-4 pl-5 pt-2 md:w-1/4">
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/Certificado-CGRPPS-Delson.pdf"
            text="Certificado CGRPPS Delson"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/Certificado-CGRPPS-Ereni.pdf"
            text="Certificado CGRPPS Ereni"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/Certificado-CGRRPS-Joelaine.pdf"
            text="Certificado CGRRPS Joelaine"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/Certificado-CGRPPS-Renato.pdf"
            text="Certificado CGRPPS Renato"
          />
        </div>
      </div>
      <div>
        <h1 className="upercase font-bold">DIRETORIA ADMINISTRATIVA</h1>
        <div className="w-3/ flex flex-col pb-4 pl-5 pt-2 md:w-1/4">
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/Certificado-CGRRPS-Cristiano.pdf"
            text="Certificado CGRRPS Cristiano"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/Certificado-CGRPPS-Hellen.pdf"
            text="Certificado CGRPPS Hellen"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/Certificado-CGRPPS-Marcela.pdf"
            text="Certificado CGRPPS Thiago"
          />
        </div>
      </div>
      <div>
        <h1 className="upercase font-bold">DIRETORIA DE BENEFÍCIOS</h1>
        <div className="w-3/ flex flex-col pb-4 pl-5 pt-2 md:w-1/4">
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/Certificado-CGRPPS-Anderson.pdf"
            text="Certificado CGRPPS Anderson"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/Certificado-CGRPPS-Epitacio.pdf"
            text="Certificado CGRPPS Epitacio"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/Certificado-CGRPPS-Marcela.pdf"
            text="Certificado CGRPPS Marcela"
          />
        </div>
      </div>
      <div>
        <h1 className="upercase font-bold">DIRETORIA FINANCEIRA</h1>
        <div className="w-3/ flex flex-col pb-4 pl-5 pt-2 md:w-1/4">
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/Certificado-CGRPPS-Gesinopolis.pdf"
            text="Certificado CGRPPS Gesinopolis"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/Certificado-CGRPPS-Keithy-Carmen-Silva.pdf"
            text="Certificado CGRPPS  Keithy "
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/Certificado-Apimec-Khayo.pdf"
            text="Certificado CGRPPS Khayo"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/CPA-10-KHAYO-06082024.pdf"
            text="CPA-10 Khayo 06 08 2024"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/03/Certificado-Apimec-Khayo.pdf"
            text="Certificado Apimec Khayo 29 03 2026"
          />
        </div>
      </div>
      <div>
        <h1 className="upercase font-bold">DIRETORIA JURÍDICA</h1>
        <div className="w-3/ flex flex-col pb-4 pl-5 pt-2 md:w-1/4">
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/CPA-10-VAL-27-07-2023.pdf"
            text="CPA 10 Amanda 27 07 2023"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/Certificado-CGRPPS-Clayton.pdf"
            text="Certificado CGRPPS Clayton"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/Certificado-CGRPPS-Keila.pdf"
            text="Certificado CGRPPS Keila"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/Certificado-CGRPPS-SAULO-TEIXEIRA.pdf"
            text="Certificado CGRPPS Saulo"
          />
        </div>
      </div>
      <div>
        <h1 className="upercase font-bold">GABINETE DA PRESIDÊNCIA</h1>
        <div className="w-3/ flex flex-col pb-4 pl-5 pt-2 md:w-1/4">
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/Certificado-CGRPPS-Einstein.pdf"
            text="Certificado CGRPPS Einstein"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/Certificado-CGRPPS-Herllen.pdf"
            text="Certificado CGRPPS Herllen"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/Certificado-CGRPPS-Jovita.pdf"
            text="Certificado CGRPPS Jovita"
          />
        </div>
      </div>
    </Container>
  );
}
