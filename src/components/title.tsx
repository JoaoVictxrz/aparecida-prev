export default function Title({
  title,
  postadoEm,
}: {
  title: string;
  postadoEm?: string;
}) {
  return (
    <div className="my-8 border-b-[1px] pb-2 dark:border-zinc-700 dark:text-zinc-100">
      <h1 className="text-lg font-semibold uppercase  md:text-2xl">{title}</h1>
      {postadoEm && (
        <p className="text-base font-extralight">Postado em: {postadoEm}</p>
      )}
    </div>
  );
}
