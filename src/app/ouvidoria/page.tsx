import Container from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ouvidoria",
};

export default function Ouvidoria() {
  return (
    <Container
      title="Ouvidoria"
      className="flex flex-col md:flex-row justify-around  items-center space-x-10"
    >
      {/* Formulário */}
      <div className="md:w-1/2 space-y-4">
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
            className="border-b-[1px] border-r-[1px] dark:border-zinc-800 bg-transparent outline-none shadow-sm"
          />
          <label htmlFor="email">
            Email: <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="border-b-[1px] border-r-[1px] dark:border-zinc-800 bg-transparent outline-none shadow-sm"
          />
          <label htmlFor="assunto">
            Assunto <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="assunto"
            name="assunto"
            className="border-b-[1px] border-r-[1px] dark:border-zinc-800 bg-transparent outline-none shadow-sm "
          />
          <label htmlFor="message">
            Mensagem: <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="border-b-[1px] border-r-[1px] dark:border-zinc-800 bg-transparent outline-none shadow-sm"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className=" bg-zinc-300 rounded shadow-lg p-2 w-1/4 text-white dark:text-black"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <div className="md:w-1/2">
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
