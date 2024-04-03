import Title from "@/components/title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
};

export default function Contato() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-2 text-white">
      <section className="px-2 container">
        <Title title="Contato" />
        <div className="w-full flitems-center container gap-5">
          <p className="text-lg font-bold">Endereço AparecidaPrev</p>
          <p>
            Avenida Santana Quadra 1 Lotes 5 e 6, Setor Célia Maria, CEP:
            74987-828 Aparecida de Goiânia – Goiás
          </p>
          <br />
          <p className="text-lg font-bold">Telefone geral:</p>
          <p>(62) 3545-5934</p>
          <br />
          <p className="text-lg font-bold">Telefone perícia:</p>
          <p>(62) 3983-7052 (whatsapp)</p>
          <br />
          <p className="text-lg font-bold">E-mail Diretoria de benefícios:</p>
          <p>beneficios@aparecidaprev.go.gov.br</p>
        </div>
      </section>
    </article>
  );
}
