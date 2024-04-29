export const extractTextFromHtml = (html: string) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  const ReadMore = html.replace(/<a[^>]*>Read more &raquo;<\/a>/g, "");
  return div.innerText || div.textContent || ReadMore || "";
};

export function formatarData(dataString: any) {
  const data = new Date(dataString);
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  const dia = data.getDate();
  const mes = meses[data.getMonth()];
  const ano = data.getFullYear();

  return `${dia} de ${mes} de ${ano}`;
}
