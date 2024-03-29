'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AcessoRapido from '@/components/acesso-rapido'
import Noticias from '@/components/noticias'
import Transparencia from '@/components/transparencia'
import Carrosel from '@/components/carrosel'

export default function Home() {
  return (
    <main className="w-full text-black min-h-screen flex flex-col items-center">
      <div className="w-full bg-image-pref bg-cover bg-center bg-no-repeat fixed h-screen -z-50"></div>
      <div className="w-full bg-black/35 fixed h-screen -z-40"></div>
      <div className="w-full h-screen flex items-center justify-center container">
        <h1>Bem vindo</h1> <br />
        <h2>
          Bem-vindo! O Fundo de Previdência dos Servidores do Município de
          Aparecida de Goiânia – APARECIDAPREV, autarquia municipal, com
          personalidade jurídica de direito público interno, criada em 20 de
          junho de 2005, pela Lei Complementar nº 010, tem como função à gestão
          administrativa, jurídica e financeira do Regime Próprio de Previdência
          Social de Aparecida de Goiânia, cujo objetivo é assegurar aos
          servidores titulares de cargos efetivos, meios de subsistência nos
          eventos de invalidez, doença, acidente em serviço, idade avançada,
          reclusão e morte; e proteção à maternidade e à família.
        </h2>
      </div>
      <Carrosel />
      <Noticias />
      <AcessoRapido />
      <Transparencia />
    </main>
  )
}