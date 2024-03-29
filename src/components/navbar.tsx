'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { useState } from 'react'

export default function Home() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header className="w-full bg-white p-2 px-5 flex items-center justify-between">
                <Image
                    src="/logo-aparecidaprev-1.png"
                    alt="logo"
                    width={200}
                    height={200}
                    className="w-44"
                />
                <ProGestao />
                <div className="lg:hidden">
                    {isOpen ? (
                        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
                            <Image
                                src="/menu-close.svg"
                                alt="logo"
                                width={200}
                                height={200}
                                className="w-6 lg:hidden"
                            />
                        </button>
                    ) : (
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <Image
                                src="/menu.svg"
                                alt="logo"
                                width={200}
                                height={200}
                                className="w-6 lg:hidden"
                            />
                        </button>
                    )}
                </div>
            </header>
            <nav className="duration-500 trabsition-all">
                {isOpen ? <MobileNavbar /> : <DesktopNavbar />}
            </nav>
        </>
    )
}

export const MobileNavbar = () => {
    return (
        <nav className="w-full bg-white text-black duration-500 trabsition-all">
            <ul className="lg:hidden text-center flex flex-col items-center justify-center pb-5">
                <Links href="/" text="HOME" />
                <Links href="/sobre" text="SOBRE" />
                <Links href="/institucional" text="INSTITUCIONAL" />
                <Links href="/beneficio" text="BENEFÍCIO" />
                <Links href="/conselho" text="CONSELHO" />
                <Links href="/financeiro" text="FINANCEIRO" />
                <Links href="/legislacao" text="LEGISLAÇÃO" />
                <Links href="/ouvidoria" text="OUVIDORIA" />
                <Links href="/" text="CONCURSOS" />
                <Links href="/" text="CONTATO" />
                {/* Pro-Gestão */}
                <div className="flex flex-col items-center justify-center">
                    <Link
                        href="/"
                        className="flex hover:bg-zinc-200 hover:rounded-md p-2"
                    >
                        <Image
                            src="/selo-pro-gestao.png"
                            alt="logo"
                            width={200}
                            height={200}
                            className="w-10"
                        />
                        <span className="text-xl text-zinc-500 font-light hover:text-zinc-700 p-2">
                            Pró-Gestão RPPS
                        </span>
                    </Link>
                    <div className="flex gap-5">
                        <Link href="/" className="hover:text-orange-600">
                            <FaInstagram size={20} />
                        </Link>
                        <Link href="/" className="hover:text-red-600">
                            <FaYoutube size={20} />
                        </Link>
                    </div>
                </div>
            </ul>
        </nav>
    )
}

export const DesktopNavbar = () => {
    return (
        <nav className="hidden w-full lg:flex lg:items-center">
            <ul className=" bg-white flex w-full justify-end px-5">
                <Links href="/" text="HOME" />
                <Links href="/sobre" text="SOBRE" />
                <Links href="/institucional" text="INSTITUCIONAL" />
                <Links href="/beneficio" text="BENEFÍCIO" />
                <Links href="/conselho" text="CONSELHO" />
                <Links href="/financeiro" text="FINANCEIRO" />
                <Links href="/legislacao" text="LEGISLAÇÃO" />
                <Links href="/ouvidoria" text="OUVIDORIA" />
                <Links href="/" text="CONCURSOS" />
                <Links href="/" text="CONTATO" />
            </ul>
        </nav>
    )
}

export const ProGestao = () => {
    return (
        <div className="hidden lg:flex flex-col items-center justify-center">
            <Link href="/" className="flex hover:bg-zinc-200 hover:rounded-md p-2">
                <Image
                    src="/selo-pro-gestao.png"
                    alt="logo"
                    width={200}
                    height={200}
                    className="w-5"
                />
                <span className="text-sm text-zinc-500 font-light hover:text-zinc-700 ">
                    Pró-Gestão RPPS
                </span>
            </Link>
            <div className="flex gap-5">
                <Link href="/" className=" text-zinc-500 hover:text-orange-600">
                    <FaInstagram size={15} />
                </Link>
                <Link href="/" className="text-zinc-500 hover:text-red-600">
                    <FaYoutube size={15} />
                </Link>
            </div>
        </div>
    )
}

export const Links = ({ href, text }: any) => {
    return (
        <Link
            href={`${href}`}
            className="text-xl md:text-sm text-zinc-500 font-light hover:text-zinc-700 p-2"
        >
            {text}
        </Link>
    )
}