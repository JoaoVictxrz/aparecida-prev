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
      className="group flex items-center justify-center bg-zinc-100 p-5 text-center shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-zinc-200 dark:bg-zinc-800 hover:dark:bg-zinc-700"
    >
      <p
        className={`text-xl font-light text-zinc-500 group-hover:text-zinc-700 dark:text-white group-hover:dark:text-white md:text-2xl`}
      >
        {text}
      </p>
    </Link>
  );
};
