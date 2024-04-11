import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-zinc-200 dark:bg-zinc-950 flex flex-col items-center justify-center text-black dark:text-white text-sm ">
      <div className="px-2 container">
        <div className="border-b-[1px] border-zinc-300 dark:border-zinc-800 w-full py-4">
          <h1 className="text-2xl font-bold">Links</h1>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between uppercase py-4">
          <div className="flex flex-col py-2">
            <LinksFooter href="/" text="aparecida prev" />
            <LinksFooter
              href="https://www.aparecidaprev.com.br/portal/agendamento/admin/index.php"
              text="agendamentos"
            />
            <LinksFooter href="/" text="adesão ao ipasgo" />
            <LinksFooter
              href="/beneficio/aposentadoria-por-invalidez"
              text="aposentadoria por invalidez"
            />
            <LinksFooter href="/conselho/atas-comite" text="atas comitê" />
            <LinksFooter
              href="/conselho/atas-conselho-fiscal"
              text="atas conselho fiscal"
            />
            <LinksFooter
              href="/beneficio/aposentadoria-por-idade"
              text="aposentadoria por idade"
            />
            <LinksFooter href="/" text="aposentadoria por contribuição" />
            <LinksFooter
              href="/beneficio/aposentadoria-compulsoria"
              text="aposentadoria compulsória"
            />
            <LinksFooter
              href="/conselho/atas-do-conselho"
              text="atas conselho municipal"
            />
          </div>
          <div className="flex flex-col py-2">
            <LinksFooter href="/beneficio" text="benefícios" />
            <LinksFooter
              href="/institucional/cartilha-previdenciaria"
              text="cartilha previdenciária"
            />
            <LinksFooter
              href="/institucional/certificacao"
              text="certificação"
            />
            <LinksFooter
              href="/acesso-rapido/como-fica-minha-aposentadoria"
              text="como fica minha aposentadoria"
            />
            <LinksFooter
              href="/institucional/codigo-de-etica-e-politica-de-seguranca-da-informacao"
              text="código de ética / política de segurança"
            />
            <LinksFooter
              href="/conselho/decreto-de-nomeacao"
              text="decreto de nomeação"
            />
            <LinksFooter href="/editais" text="editais" />
            <LinksFooter
              href="/institucional/edital-de-credenciamento"
              text="edital de credenciamento"
            />
          </div>
          <div className="flex flex-col py-2">
            <LinksFooter
              href="/institucional/gestao-financeira-e-administrativa"
              text="gestão financeira e administrativa"
            />
            <LinksFooter href="/sobre/historico" text="histórico" />
            <LinksFooter
              href="/legislacao/leis-municipais"
              text="legislação municipal"
            />
            <LinksFooter
              href="/conselho/reunioes-do-comite-conselho"
              text="local e data das reuniões do comitê/conselho"
            />
            <LinksFooter
              href="/legislacao/lei-organica-do-municipio"
              text="lei orgânica do município"
            />
            <LinksFooter
              href="/conselho/membros-do-conselho"
              text="membros dos conselhos"
            />
            <LinksFooter href="/missao" text="missão" />
            <LinksFooter href="/ouvidoria" text="ouvidoria" />
          </div>
          <div className="flex flex-col py-2">
            <LinksFooter href="/" text="política de segurança e informação" />
            <LinksFooter
              href="/politica-de-valorizacao-dos-servidores"
              text="política de valorização dos servidores"
            />
            <LinksFooter href="/legislacao/portaria-mps" text="portaria mps" />
            <LinksFooter
              href="/sobre/presidencia-e-diretoria"
              text="presidência e diretorias executivas"
            />
            <LinksFooter href="/" text="previdência no brasil" />
            <LinksFooter
              href="/acesso-rapido/situacao-financeira-aparecida-prev"
              text="situação financeira do aparecidaprev"
            />
            <LinksFooter
              href="/institucional/taxa-de-administracao"
              text="taxa de administração"
            />
            <LinksFooter href="/sobre/visao" text="visão" />
          </div>
        </div>
      </div>
      <div className="container grid place-items-center space-y-4 md:flex items-center justify-around border-t-[1px] border-zinc-300 dark:border-zinc-800 py-4">
        <Image
          src="/logo-aparecidaprev.png"
          alt="logo"
          width={500}
          height={500}
          className="w-60 h-50 lg:w-96 "
        />
        <div className="flex flex-col md:flex-row items-center space-y-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d954.7527800923991!2d-49.27290833037008!3d-16.825804415306827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935efbfe58f7619b%3A0xb8ebd3f220e15f46!2sINSS%20Aparecida%20de%20Goi%C3%A2nia!5e0!3m2!1spt-BR!2sbr!4v1711390343206!5m2!1spt-BR!2sbr"
            width="200"
            height="200"
            loading="lazy"
          />

          <h2 className="text-zinc-900 dark:text-white text-center ">
            <span className="font-bold">Aparecidaprev</span>
            <br />
            Edifício Sebastião Ramoncito Nunes Av. Santana Quadra 1, Lotes 4 e
            5,
            <br />
            Setor Célia Maria, CEP. 74.987-828 Aparecida de Goiânia – GO
            <br />
            Horário de Atendimento das 7h30 às 17h30 de Segunda a Sexta-Feira.
            <br />
            Tel: (62) 3545-5934
            <br />
          </h2>
        </div>
      </div>
      <div className="w-full bg-zinc-300 dark:bg-zinc-950  flex items-center justify-center p-2 text-sm md:text-base">
        <span className="text-black dark:text-white">
          © 2024 Aparecidaprev. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}

export const LinksFooter = ({ href, text }: any) => {
  return (
    <Link
      href={`${href}`}
      className="upercase text-zinc-900 dark:text-white hover:text-zinc-700 hover:dark:text-zinc-500 p-2"
    >
      {text}
    </Link>
  );
};
