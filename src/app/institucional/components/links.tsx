import Link from "next/link";
interface props {
  href: string;
  text: string;
  className?: string;
}

export default function LinkAzul({ href, text, className }: props) {
  return (
    <Link
      target="_blank"
      href={href}
      className={`text-blue-500 hover:text-blue-700 hover:underline ${className}`}
    >
      {text}
    </Link>
  );
}
