import Title from "./title";
interface props {
  children: React.ReactNode;
  title: string;
  className?: string;
}
export default function Container({ children, title, className }: props) {
  return (
    <article className="flex w-full justify-center bg-white pb-2 dark:bg-zinc-900 dark:text-white">
      <section className="container px-2">
        <Title title={title} />
        <div className={`${className} container w-full gap-5 p-2 pb-20`}>
          {children}
        </div>
      </section>
    </article>
  );
}
