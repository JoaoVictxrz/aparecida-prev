import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import {
  MdAssignmentInd,
  MdOutlineMonetizationOn,
  MdOutlineSearch,
  MdOutlineToday,
  MdPlaylistAddCheck,
  MdWork,
} from "react-icons/md";

export const metadata: Metadata = {
  title: "Transparencia",
};
export default function Transparencia() {
  return (
    <article className="flex w-full justify-center bg-white pb-20 dark:bg-zinc-900 dark:text-zinc-200">
      <section className="container px-2">
        <h1 className="my-8 text-lg font-bold uppercase md:text-2xl">
          Transparencia
        </h1>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4">
          <LinksTransparencia
            href="http://previdenciadeaparecidadegoiania.sigepnet.com.br/transparencia/folha.php"
            text="Folha de pagamento"
            description="Aqui você consulta e indentificar os servidores públicos dos nosso Município e suas remunerações."
          >
            <MdPlaylistAddCheck size={150} className="w-full" />
          </LinksTransparencia>
          <LinksTransparencia
            href="http://gestaopublica.previdencia.aparecida.bsit-br.com.br/portal/employee-transparency.jsf?e="
            text="Consultar Matrícula"
            description="Consulte matrículas através do CPF."
          >
            <MdOutlineSearch size={150} className="w-full" />
          </LinksTransparencia>
          <LinksTransparencia
            href="http://gestaopublica.previdencia.aparecida.bsit-br.com.br/portal/employee-login.jsf?e="
            text="Contracheque"
            description="Veja os contracheques online."
          >
            <MdOutlineMonetizationOn size={150} className="w-full" />
          </LinksTransparencia>
          <LinksTransparencia
            href="http://gestaopublica.previdencia.aparecida.bsit-br.com.br/portal/employee-login.jsf?e="
            text="Cédula C "
            description="Veja os comprovantes de rendimentos."
          >
            <FaRegCopyright size={150} className="w-full" />
          </LinksTransparencia>
          <LinksTransparencia
            href="http://gestaopublica.previdencia.aparecida.bsit-br.com.br/portal/employee-register.jsf?e="
            text="Primeiro Acesso"
            description="Cadastre-se para o primeiro acesso ao portal"
          >
            <MdAssignmentInd size={150} className="w-full" />
          </LinksTransparencia>
          <LinksTransparencia
            href="https://aparecidaprev.go.gov.br/agendamento/admin/"
            text="Agendamentos"
            description="Agendamento de péricia por secretaria"
          >
            <MdOutlineToday size={150} className="w-full" />
          </LinksTransparencia>
          <LinksTransparencia
            href="https://mail.aparecida.go.gov.br"
            text="Webmail"
            description="Acesse o webmail de AparecidaPrev"
          >
            <IoMailSharp size={150} className="w-full" />
          </LinksTransparencia>
          <LinksTransparencia
            href="https://sigp.aparecida.go.gov.br/sig/"
            text="Sistema de Gestão Prodata"
            description="PRO DATA"
          >
            <MdWork size={150} className="w-full" />
          </LinksTransparencia>
        </div>
      </section>
    </article>
  );
}

interface props {
  href: string;
  text: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}
export const LinksTransparencia = ({
  href,
  text,
  children,
  description,
}: props) => {
  return (
    <Link
      target="_blank"
      href={href}
      className="group m-5 flex flex-col items-center p-5 text-center transition duration-300 ease-in-out hover:scale-110 hover:bg-zinc-100/95 hover:text-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-white"
    >
      {children}
      <p className="text-sm font-semibold uppercase text-zinc-500 group-hover:text-zinc-900 dark:text-zinc-100 group-hover:dark:text-zinc-300 sm:text-lg">
        {text}
      </p>
      <p className="line-clamp-3 text-sm text-zinc-500 dark:text-zinc-100 md:line-clamp-none">
        {description}
      </p>
    </Link>
  );
};
