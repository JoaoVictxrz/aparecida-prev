import Link from "next/link";
interface props {
  href: string;
  text: string;
}

export default function LinkAzul({ href, text }: props) {
  return (
    <Link
      target="_blank"
      href={href}
      className="text-blue-500 hover:text-blue-700 hover:underline"
    >
      {text}
    </Link>
  );
}
