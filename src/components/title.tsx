export default function Title({ title }: { title: string }) {
  return (
    <h1 className="font-semibold uppercase text-lg md:text-2xl my-8 border-b-[1px] pb-2 dark:text-zinc-100 dark:border-zinc-700">
      {title}
    </h1>
  );
}
