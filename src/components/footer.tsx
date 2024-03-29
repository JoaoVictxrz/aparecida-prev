import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className="w-full bg-zinc-200 flex flex-col items-center justify-center text-black text-sm ">
            <div className="px-2 container">
                <div className="border-b-[1px] border-zinc-300 w-full py-4">
                    <h1 className="text-2xl font-bold">Links</h1>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-between uppercase py-4">
                    <div className="flex flex-col py-2">
                        <LinksFooter href="/" text="aparecida prev" />
                        <LinksFooter href="/" text="agendamentos" />
                        <LinksFooter href="/" text="adesão ao ipasgo" />
                        <LinksFooter href="/" text="aposentadoria por invalidez" />
                        <LinksFooter href="/" text="atas comitê" />
                        <LinksFooter href="/" text="atas conselho fiscal" />
                        <LinksFooter href="/" text="aposentadoria por idade" />
                        <LinksFooter href="/" text="aposentadoria por contribuição" />
                        <LinksFooter href="/" text="aposentadoria compulsória" />
                        <LinksFooter href="/" text="atas conselho municipal" />
                    </div>
                    <div className="flex flex-col py-2">
                        <LinksFooter href="/" text="benefícios" />
                        <LinksFooter href="/" text="cartilha previdenciária" />
                        <LinksFooter href="/" text="certificação" />
                        <LinksFooter href="/" text="como fica minha aposentadoria" />
                        <LinksFooter
                            href="/"
                            text="código de ética / política de segurança"
                        />
                        <LinksFooter href="/" text="decreto de nomeação" />
                        <LinksFooter href="/" text="editais" />
                        <LinksFooter href="/" text="edital de credenciamento" />
                    </div>
                    <div className="flex flex-col py-2">
                        <LinksFooter href="/" text="gestão financeira e administrativa" />
                        <LinksFooter href="/" text="histórico" />
                        <LinksFooter href="/" text="legislação municipal" />
                        <LinksFooter
                            href="/"
                            text="local e data das reuniões do comitê/conselho"
                        />
                        <LinksFooter href="/" text="lei orgânica do município" />
                        <LinksFooter href="/" text="membros dos conselhos" />
                        <LinksFooter href="/" text="missão" />
                        <LinksFooter href="/" text="ouvidoria" />
                    </div>
                    <div className="flex flex-col py-2">
                        <LinksFooter href="/" text="política de segurança e informação" />
                        <LinksFooter
                            href="/"
                            text="política de valorização dos servidores"
                        />
                        <LinksFooter href="/" text="portaria mps" />
                        <LinksFooter href="/" text="presidência e diretorias executivas" />
                        <LinksFooter href="/" text="previdência no brasil" />
                        <LinksFooter href="/" text="situação financeira do aparecidaprev" />
                        <LinksFooter href="/" text="taxa de administração" />
                        <LinksFooter href="/" text="visão" />
                    </div>
                </div>
            </div>
            <div className="container grid place-items-center space-y-4 md:flex items-center justify-around border-t-[1px] border-zinc-300 py-4">
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

                    <h2 className="text-zinc-900 text-center ">
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
            <div className="w-full bg-zinc-300 flex items-center justify-center p-2 text-sm md:text-base">
                <span className="text-black">
                    © 2024 Aparecidaprev. Todos os direitos reservados.
                </span>
            </div>
        </footer>
    )
}

export const LinksFooter = ({ href, text }: any) => {
    return (
        <Link
            href={`${href}`}
            className="upercase text-zinc-900 hover:text-zinc-700 p-2"
        >
            {text}
        </Link>
    )
}