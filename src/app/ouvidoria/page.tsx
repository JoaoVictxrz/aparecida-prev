import Container from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ouvidoria",
};

export default function Ouvidoria() {
  return (
    <Container title="Ouvidoria" className="flex flex-col space-y-2">
      {/* Formulário */}
      <div className="flex flex-col items-center justify-around space-x-10 border-b-[1px] pb-2 dark:border-zinc-700 md:flex-row ">
        <div className=" space-y-4 border-zinc-800 md:w-1/2">
          <p>
            Sua mensagem é de extrema importância para nós. Conte-nos suas
            sugestões, críticas ou tire suas dúvidas. Estamos de prontidão para
            responde-las.
          </p>
          <form className="flex flex-col space-y-4">
            <label htmlFor="name">
              Nome: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-b-[1px] border-r-[1px] bg-transparent shadow-sm outline-none dark:border-zinc-800"
            />
            <label htmlFor="email">
              Email: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="border-b-[1px] border-r-[1px] bg-transparent shadow-sm outline-none dark:border-zinc-800"
            />
            <label htmlFor="assunto">
              Assunto <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              className="border-b-[1px] border-r-[1px] bg-transparent shadow-sm outline-none dark:border-zinc-800 "
            />
            <label htmlFor="message">
              Mensagem: <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="border-b-[1px] border-r-[1px] bg-transparent shadow-sm outline-none dark:border-zinc-800"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className=" w-1/4 rounded bg-zinc-300 p-2 text-white shadow-lg dark:text-black"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-1/2">
          <p className="text-sm font-bold md:text-xl">Telefone Geral:</p> <br />
          <p className="text-sm">(62)3545-5934 </p> <br />
          <p className="text-sm font-bold md:text-xl">Celular ouvidoria:</p>
          <br />
          <p className="text-sm">(62) 99629-2211 (WhatsApp)</p> <br />
          <p className="text-sm font-bold md:text-xl">
            Telefone Fixo Ouvidoria::
          </p>
          <br />
          <p className="text-sm">(62) 3983-7080</p> <br />
          <p className="text-sm font-bold md:text-xl">Email Ouvidoria:</p>
          <br />
          <p className="text-sm">ouvidoria@aparecidaprev.go.gov.br</p> <br />
        </div>
      </div>
      <div className="max-w-4xl space-y-2">
        <p className="text-lg font-bold">Endereço AparecidaPrev</p>
        <p>Edifício Sebastião Ramoncito Nunes</p>
        <p>
          Avenida Santana Quadra 1 Lotes 5 e 6, Setor Célia Maria, CEP:
          74987-828
        </p>
        <p>Aparecida de Goiânia – Goiás</p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1135.3943840048998!2d-49.2336813175024!3d-16.82654115702215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935efc9b513606d9%3A0xc56d5bf410cdada4!2sAparecidaPrev!5e0!3m2!1spt-BR!2sbr!4v1717441022716!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          loading="lazy"
          className="w-full"
        ></iframe>
      </div>
    </Container>
  );
}
