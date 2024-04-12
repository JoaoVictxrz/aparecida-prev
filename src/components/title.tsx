export default function Title({ title }: { title: string }) {
  return (
    <h1 className="my-8 border-b-[1px] pb-2 text-lg font-semibold uppercase dark:border-zinc-700 dark:text-zinc-100 md:text-2xl">
      {title}
    </h1>
  );
}
