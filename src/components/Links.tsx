import Link from "next/link";

interface props {
  href: string;
  text: string;
  target?: string;
}

export const LinksPage = ({ href, text, target }: props) => {
  return (
    <Link
      target={target}
      href={href}
      className="flex items-center justify-center text-center shadow-md p-5 bg-zinc-100 dark:bg-zinc-800 hover:dark:bg-zinc-700 group hover:bg-zinc-200 hover:scale-105 transition-transform ease-in-out duration-300"
    >
      <p
        className={`text-xl md:text-2xl font-light text-zinc-500 dark:text-white group-hover:text-zinc-700 group-hover:dark:text-white`}
      >
        {text}
      </p>
    </Link>
  );
};
