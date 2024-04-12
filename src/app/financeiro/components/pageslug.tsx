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
    <Container title={`${title}`} className="">
      <p className="pt-10 text-xl font-semibold uppercase md:text-2xl">
        {title}
      </p>
      <p className="text-lg font-extralight md:text-base">
        Postado em: {postadoEm}
      </p>
      <div className={`flex w-3/4 flex-col gap-1 p-2 pt-4 ${className}`}>
        {children}
      </div>
    </Container>
  );
}
