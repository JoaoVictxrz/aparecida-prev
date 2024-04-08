import Container from "@/components/container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Política de valoração dos servidores",
  };
}

export default function Home() {
  return (
    <Container
      title="POLÍTICA DE VALORIZAÇÃO DOS SERVIDORES"
      className="space-y-4"
    >
      <p className="font-semibold">Benefícios concedidos aos servidores:</p>
      <Text title="No âmbito da Previdência:" className="space-y-2">
        <div className="space-y-4 font-light">
          <p>
            1 – Transformação do Aparecidaprev em autarquia, dando agilidade,
            transparência e independência aos processos e decisões
            previdenciárias.
          </p>
          <p>
            2 – Criação do Conselho Municipal de Precidência, democratizando a
            participação dos servidores no processo de gestão da previdência,
            com os representantes escolhidos através de seus sindicatos Sintego
            e Sindspag.
          </p>
          <p>
            3 – Repasses patronais, dos servidores e parcelamentos
            rigorososamente em dia.
          </p>
          <p>
            4 – Capitalização do fundo de Previdência, hoje com mais
            R$12.000.000,00 (Doze milhões) garantindo assim o cumprimento de
            todas as responsabilidades previdenciárias.
          </p>
        </div>
      </Text>
      <Text title="No âmbito administrativo:" className="space-y-2">
        <div className="space-y-4 font-light">
          <p>
            1 – Transformação do Aparecidaprev em autarquia, dando agilidade,
            transparência e independência aos processos e decisões
            previdenciárias.
          </p>
          <p>
            2 – Criação do Conselho Municipal de Precidência, democratizando a
            participação dos servidores no processo de gestão da previdência,
            com os representantes escolhidos através de seus sindicatos Sintego
            e Sindspag.
          </p>
          <p>
            3 – Repasses patronais, dos servidores e parcelamentos
            rigorososamente em dia.
          </p>
          <p>
            4 – Capitalização do fundo de Previdência, hoje com mais
            R$12.000.000,00 (Doze milhões) garantindo assim o cumprimento de
            todas as responsabilidades previdenciárias.
          </p>
        </div>
      </Text>
    </Container>
  );
}

const Text = ({
  title,
  children,
  className,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`${className}`}>
      <p className="text-lg font-semibold">{title}</p>
      <div>{children}</div>
    </div>
  );
};
