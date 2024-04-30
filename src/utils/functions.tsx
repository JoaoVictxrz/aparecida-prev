export const extractTextFromHtml = (html: string) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  div.querySelectorAll("a").forEach((link) => {
    if (link.textContent === "Read more »") {
      link.remove();
    }
  });
  return div.innerText || div.textContent || "";
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

export const extrairLinksDoHtml = (html: string) => {
  const regex = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"[^>]*>(.*?)<\/a>/g;
  const links = [];
  let match;

  while ((match = regex.exec(html)) !== null) {
    const url = match[1];
    const text = match[2];
    links.push({ url, text });
  }

  return links;
};
