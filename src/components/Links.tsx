import Link from "next/link"

interface props {
  href: string
  text: string
}

export const LinksPage = ({ href, text }: props) => {
  return (
    <Link href={href} className='flex items-center justify-center shadow-md p-5 group hover:bg-zinc-200 hover:scale-105 transition-transform ease-in-out duration-300'><p className={`text-3xl font-light text-zinc-500 group-hover:text-zinc-700`}>{text}</p></Link>
  )
}