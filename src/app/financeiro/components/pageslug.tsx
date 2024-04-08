"use client";
import Container from "@/components/container";
import { useSearchParams } from "next/navigation";

interface Props {
  className?: string;
  children?: React.ReactNode;
}
export default function PaginaSlug({ children, className }: Props) {
  const searchParams = useSearchParams();
  const title = searchParams.get("title")?.replace(/"/g, "");
  const postadoEm = searchParams.get("postadoEm")?.replace(/"/g, "");
  return (
    <Container title="Comparativo da Despesa" className="">
      <p className="text-xl md:text-2xl uppercase pt-10 font-semibold">
        {title}
      </p>
      <p className="text-lg md:text-base font-extralight">
        Postado em: {postadoEm}
      </p>
      <div className={`pt-4 p-2 flex flex-col gap-1 w-3/4 ${className}`}>
        {children}
      </div>
    </Container>
  );
}
