import Container from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concursos",
};

export default function Concursos() {
  return (
    <Container title="Concurso público" className="font-light">
      <p>
        Nesta página é possível acompanhar os assuntos em relação à realização
        de concursos públicos promovidos pelo Instituto de Previdência de
        Aparecida de Goiânia.
      </p>{" "}
      <br />
      <li>CONCURSO APARECIDAPREV N° 001/2017</li>
    </Container>
  );
}
