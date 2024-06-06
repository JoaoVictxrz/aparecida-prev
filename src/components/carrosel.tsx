import Image from "next/image";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Carrosel() {
  const slides = [{}];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full bg-white dark:bg-zinc-900">
      <article className="flex w-full justify-center bg-white pb-20 dark:bg-zinc-900 dark:text-zinc-200">
        <section className="container px-2">
          <h1 className="my-8 text-lg font-bold uppercase md:text-2xl">
            Calendário de pagamentos
          </h1>
          <div className="md: group relative m-auto">
            <div className="flex items-center justify-center duration-500">
              <Image
                src="/banner-calendario.jpg"
                alt="banner"
                width={500}
                height={500}
                className="w-full max-w-7xl"
              />
            </div>
            {/* Left Arrow */}
            {/* <div className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div> */}
            {/* Right Arrow */}
            {/* <div className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div> */}
            {/* <div className="top-4 flex justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="cursor-pointer text-2xl"
            >
              <RxDotFilled />
            </div>
          ))}
        </div> */}
          </div>
        </section>
      </article>
    </div>
  );
}
