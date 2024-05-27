"use client";
import { useEffect, useRef, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import { IoMdClose } from "react-icons/io";
import cheerio, { CheerioAPI } from "cheerio";

export default function Modal() {
  const [data, setData] = useState<PostsProps | null>(null);
  const [close, setClose] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get("/popupbuilder");
      setData(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setData(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target as Node)
      ) {
        setClose(true);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!data || !data.content || !data.content.rendered) {
    return null;
  }
  const $: CheerioAPI = cheerio.load(data?.content.rendered!);
  $("a").attr("target", "_blank");
  const updatedHTML = $.html()!;

  return (
    <div
      className={`fixed z-50 flex h-screen w-full items-center justify-center bg-zinc-900/50 ${close ? "hidden" : ""}`}
    >
      <div className="absolute right-0 top-0 m-4">
        <button onClick={() => setClose(true)} className="text-white">
          <IoMdClose size={50} />
        </button>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: updatedHTML }}
        className=" flex w-3/4 flex-col items-center px-2.5 text-white lg:w-auto"
        ref={modalContentRef}
      />
    </div>
  );
}
