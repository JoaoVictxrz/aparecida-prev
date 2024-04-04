import Title from "./title";
interface props {
  children: React.ReactNode;
  title: string;
  className?: string;
}
export default function Container({ children, title, className }: props) {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 dark:text-white pb-2">
      <section className="px-2 container">
        <Title title={title} />
        <div className={`${className} w-full container gap-5 pb-20`}>
          {children}
        </div>
      </section>
    </article>
  );
}
