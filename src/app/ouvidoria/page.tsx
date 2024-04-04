import Container from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ouvidoria",
};

export default function Ouvidoria() {
  return (
    <Container title="Ouvidoria" className="flex justify-around">
      {/* Formulário */}
      <div>
        <h2>Formulário</h2>
      </div>
      <div>
        <p className="text-sm md:text-xl font-bold">Telefone Geral:</p> <br />
        <p className="text-sm">(62)3545-5934 </p> <br />
        <p className="text-sm md:text-xl font-bold">Celular ouvidoria:</p>{" "}
        <br />
        <p className="text-sm">(62) 99629-2211 (WhatsApp)</p> <br />
        <p className="text-sm md:text-xl font-bold">
          Telefone Fixo Ouvidoria::
        </p>{" "}
        <br />
        <p className="text-sm">(62) 3983-7080</p> <br />
        <p className="text-sm md:text-xl font-bold">Email Ouvidoria:</p> <br />
        <p className="text-sm">ouvidoria@aparecidaprev.go.gov.br</p> <br />
      </div>
    </Container>
  );
}
