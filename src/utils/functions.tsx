export const extractTextFromHtml = (html: string) => {
  // Verificar se document está definido (para garantir que estamos em um ambiente de navegador)
  if (typeof document === "undefined") {
    return html; // Retornar o HTML sem processamento se não estivermos em um navegador
  }
  // Processar HTML válido
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  // Verificar se o elemento foi criado com sucesso e se possui pelo menos um filho
  if (tempDiv.childNodes.length === 0 || tempDiv.innerHTML.trim() === "") {
    return html; // Se o HTML não for válido, retornar o próprio texto
  }
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
