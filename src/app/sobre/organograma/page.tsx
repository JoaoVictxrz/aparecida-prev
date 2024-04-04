import Container from "@/components/container";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Organograma",
  };
}

export default function Organograma() {
  return (
    <Container title="Organograma" className="flex justify-center">
      <Image
        src="/sobre/Organograma.jpg"
        alt="Organograma"
        width={1000}
        height={1000}
      />
    </Container>
  );
}
