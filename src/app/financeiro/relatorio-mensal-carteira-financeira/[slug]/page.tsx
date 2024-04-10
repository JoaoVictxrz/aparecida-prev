import LinkAzul from "@/app/institucional/components/links";
import PaginaSlug from "../../components/pageslug";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Relatório Mensal Carteira Financeira",
  };
}

interface Props {
  params: {
    slug: string;
  };
}

export default function Page({ params }: Props) {
  return <GeneratePage params={params} />;
}

const GeneratePage = ({ params }: Props) => {
  switch (params.slug) {
    case "ano-2024":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/1.-Aparecida-de-Goiania-Janeiro-2024-VI.pdf"
            text="JANEIRO"
          />
        </PaginaSlug>
      );
    case "ano-2023":
      return (
        <PaginaSlug>
          <LinkAzul
            text="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/04/1.-Aparecida-de-Goiania-Janeiro-2023-VI.pdf"
            href="JANEIRO"
          />
          <LinkAzul
            text="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/04/2.-Aparecida-de-Goiania-Fevereiro-2023-VI.pdf"
            href="FEVEREIRO"
          />
          <LinkAzul
            text="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/03/3.-Aparecida-de-Goiania-Marco-2023-VI.pdf"
            href="MARÇO"
          />
          <LinkAzul
            text="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/03/4.-Aparecida-de-Goiania-Abril-2023-VI-1-Final.pdf"
            href="ABRIL"
          />
          <LinkAzul
            text="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/03/Relatorio-da-Carteira-05-2023.pdf"
            href="MAIO"
          />
          <LinkAzul
            text="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/03/6.-Aparecida-de-Goiania-Junho-2023-VI.pdf"
            href="JUNHO"
          />
          <LinkAzul
            text="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/03/7.-Aparecida-de-Goiania-Julho-2023-VI-1.pdf"
            href="JULHO"
          />
          <LinkAzul
            text="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/03/8.-Aparecida-de-Goiania-Agosto-2023-VI.pdf"
            href="AGOSTO"
          />
          <LinkAzul
            text="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/03/9.-Aparecida-de-Goiania-Setembro-2023-VI.pdf"
            href="SETEMBRO"
          />
          <LinkAzul
            text="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/03/10.-Aparecida-de-Goiania-Outubro-2023-VI-1.pdf"
            href="OUTUBRO"
          />
          <LinkAzul
            text="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/03/11.-Aparecida-de-Goiania-Novembro-2023-VI-2.pdf"
            href="NOVEMBRO"
          />
          <LinkAzul
            text="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/03/12.-Aparecida-de-Goiania-Dezembro-2023-VI-1.pdf"
            href="DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "ano-2022":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/1-aparecida-de-goiania-janeiro-2022-vi.pdf"
            text="JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/2-aparecida-de-goiania-fevereiro-2022-vi-2.pdf"
            text="FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/3-aparecida-de-goiania-marco-2022-vi-1.pdf"
            text="MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/4-aparecida-de-goiania-abril-2022-vi.pdf"
            text="ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/5-aparecida-de-goiania-maio-2022-vi.pdf"
            text="MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/6-aparecida-de-goiania-junho-2022-vi.pdf"
            text="JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/7-aparecida-de-goiania-julho-2022-vi.pdf"
            text="JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/8-aparecida-de-goiania-agosto-2022-vi.pdf"
            text="AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/9-aparecida-de-goiania-setembro-2022-vi-1-1.pdf"
            text="SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/10-aparecida-de-goiania-outubro-2022-vi-1.pdf"
            text="OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/11-aparecida-de-goiania-novembro-2022-vi-1.pdf"
            text="NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/12.-Aparecida-de-Goiania-Dezembro-2022-VICorreto.pdf"
            text="DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "ano-2021":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/03/1-aparecida-de-goiania-janeiro-2021-vi-1.pdf"
            text="1 Janeiro-2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/03/2-aparecida-de-goiania-vi-fevereiro-2021.pdf"
            text="2-Fevereiro-2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/03/3-aparecida-de-goiania-vi-marco-2021.pdf"
            text="3-Marco-2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/03/4-aparecida-de-goiania-vi-abril-2021.pdf"
            text="4-Abril-2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/03/5-aparecida-de-goiania-maio-2021-vi.pdf"
            text="5-Maio-2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/03/6-aparecida-de-goiania-junho-2021-vi.pdf"
            text="6-Junho-2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/03/6-aparecida-de-goiania-junho-2021-vi.pdf"
            text="7-Julho-2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/03/8-aparecida-de-goiania-agosto-2021-vi.pdf"
            text="8-Agosto-2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/03/9.-Aparecida-de-Goiania-Setembro-2021-VI.pdf"
            text="9-Setembro-2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/03/10-aparecida-de-goiania-outubro-2021-vi.pdf"
            text="10-Outubro-2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/03/11-aparecida-de-goiania-novembro-2021-vi.pdf"
            text="11-Novembro-2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/03/12-aparecida-de-goiania-dezembro-2021-vi.pdf"
            text="12-Dezembro 2021"
          />
        </PaginaSlug>
      );
    case "ano-2020":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/08/1-aparecida-de-goiania-vi-janeiro-2020.pdf"
            text="1 Janeiro-2020 "
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/08/2-aparecida-de-goiania-vi-fevereiro-2020.pdf"
            text="2 Fevereiro-2020 "
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/08/3-aparecida-de-goiania-vi-marco-2020.pdf"
            text="3 Marco-2020 "
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/08/4-aparecida-de-goiania-vi-abril-2020.pdf"
            text="4 Abril-2020 "
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/08/5-aparecida-de-goiania-vi-maio-2020.pdf"
            text="5 Maio-2020 "
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/08/6-aparecida-de-goiania-vi-junho-2020-consolidado-geral.pdf"
            text="6 Junho-2020 "
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/08/7-aparecida-de-goiania-vi-julho-2020-geral.pdf"
            text="7 Julho-2020 "
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/08/8-aparecida-de-goiania-v-i-agosto-2020.pdf"
            text="8 agosto-2020 "
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/08/9-aparecida-de-goiania-vi-setembro-2020.pdf"
            text="9 setembro-2020 "
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/08/10-aparecida-de-goiania-vi-outubro-2020.pdf"
            text="10 outubro-2020 "
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/08/11-aparecida-de-goiania-novembro-2020-vi.pdf"
            text="11novembro-2020 "
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/08/12-aparecida-de-goiania-vi-dezembro-2020.pdf"
            text="12 dezembro-2020 "
          />
        </PaginaSlug>
      );
    case "ano-2019":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/1.-Janeiro-Aparecida-de-Goiânia-V.I..pdf"
            text="Janeiro 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/2.-Fevereiro-Aparecida-de-Goiânia-V.I..pdf"
            text="Fevereiro 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/3.-Março-Aparecida-de-Goiânia-V.I..pdf"
            text="Março 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/4.-Abril-Aparecida-de-Goiânia-V.I.-1.pdf"
            text="Abril 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/5.-Maio-Aparecida-de-Goiânia-V.I..pdf"
            text="Maio 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/6.-Junho-Aparecida-de-Goiânia-V.I..pdf"
            text="Junho 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/7.-Julho-Aparecida-de-Goiânia-V.I..pdf"
            text="Julho 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/8.-Agosto-Aparecida-de-Goiânia-V.I..pdf"
            text="Agosto 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/9.-Setembro-Aparecida-de-Goiânia-V.I..pdf"
            text="Setembro 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/10.-Outubro-Aparecida-de-Goiânia-V.I..pdf"
            text="Outubro 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/11.-Novembro-Aparecida-de-Goiânia-V.I..pdf"
            text="Novembro 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/12-dezembro-aparecida-de-goiania-v-i.pdf"
            text="Dezembro 2019"
          />
        </PaginaSlug>
      );
    case "ano-2018":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2017/12/Demonstrativo-Financeiro-Janeiro-2018.pdf"
            text="Janeiro 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/Demonstrativo-Financeiro-Março-2018.pdf"
            text="Fevereiro 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/Demonstrativo-Financeiro-Jan-a-Mar-2018.pdf"
            text="Março 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/Demonstrativo-Financeiro-Jan-a-Abr-2018.pdf"
            text="Abril 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/Demonstrativo-Financeiro-Jan-a-Jun-2018.pdf"
            text="Maio e Junho 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/Demonstrativo-Financeiro-Jan-a-Jul-2018.pdf"
            text="Janeiro a Julho 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/Demonstrativo-Financeiro-AGO-2018.pdf"
            text="Agosto 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/Demonstrativo-Financeiro-SET-2018.pdf"
            text="Setembro 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/Demonstrativo-Financeiro-OUT-2018.pdf"
            text="Outubro 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/Demonstrativo-Financeiro-NOV-2018.pdf"
            text="Novembro 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/Demonstrativo-Financeiro-DEZ-2018.pdf"
            text="Dezembro 2018"
          />
        </PaginaSlug>
      );
    case "ano-2017":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/12/Janeiro-2017.pdf"
            text="Janeiro 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/12/Fevereiro-2017-Retificado.pdf"
            text="Fevereiro 2017 "
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/12/Março-2017-Retificado.pdf"
            text="Março 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/12/Abril-2017-Retificado.pdf"
            text="Abril 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/12/Maio-2017.pdf"
            text="Maio 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/12/Junho-2017.pdf"
            text="Junho 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/12/Julho-2017.pdf"
            text="Julho 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/12/Agosto-2017.pdf"
            text="Agosto 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/12/Setembro-2017.pdf"
            text="Setembro 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/12/Outubro-2017.pdf"
            text="Outubro 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2017/12/Demonstrativo-Financeiro-Novembro-2017.pdf"
            text="Novembro 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2017/12/Demonstrativo-Financeiro-Dezembro-2017.pdf"
            text="Dezembro 2017"
          />
        </PaginaSlug>
      );
    case "ano-2016":
      return (
        <PaginaSlug>
          <LinkAzul
            text="Dezembro 2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/12/Dezembro-2016.pdf"
          />
          <LinkAzul
            text="Novembro 2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/12/Novembro-2016.pdf"
          />
          <LinkAzul
            text="Outubro 2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/12/Outubro-2016.pdf"
          />
          <LinkAzul
            text="Setembro 2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Setembro-2016.pdf"
          />
          <LinkAzul
            text="Agosto 2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Agosto-2016.pdf"
          />
          <LinkAzul
            text="Julho 2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Julho-2016.pdf"
          />
          <LinkAzul
            text="Junho 2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/07/Junho-20161.pdf"
          />
          <LinkAzul
            text="Maio 2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/07/Junho-2016.pdf"
          />
          <LinkAzul
            text="Abril 2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/07/4.-Abril-Aparecida-de-Goi%C3%A2nia-V.A1.pdf"
          />
          <LinkAzul
            text="Março 2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/07/3.-Mar%C3%A7o-Aparecida-de-Goi%C3%A2nia-V.A.pdf"
          />
          <LinkAzul
            text="Fevereiro 2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/03/Fevereiro-2016.pdf"
          />
          <LinkAzul
            text="Janeiro 2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/03/Janeiro-2016.pdf"
          />
        </PaginaSlug>
      );
    case "ano-2015":
      return (
        <PaginaSlug>
          <LinkAzul
            text="Relatório Mensal – Dezembro 2015 APARECIDAPREV"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Relat%C3%B3rio-Mensal-Dezembro-2015-APARECIDAPREV.pdf"
          />
          <LinkAzul
            text="Relatório Mensal – Novembro 2015 APARECIDAPREV"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Relat%C3%B3rio-Mensal-Novembro-2015-APARECIDAPREV.pdf"
          />
          <LinkAzul
            text="Relatório Mensal – Outubro 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Relat%C3%B3rio-Mensal-Outubro-2015.pdf"
          />
          <LinkAzul
            text="Carteira Aparecida Prev – Setembro 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Relatorio-Mensal-Setembro-2015-APARECIDA-PREV.pdf"
          />
          <LinkAzul
            text="Carteira Aparecida Prev – Agosto 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Relatorio-Mensal-Agosto-2015-APARECIDA-PREV.pdf"
          />
          <LinkAzul
            text="Carteira Mensal Aparecida Prev – Julho 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Relatorio-Mensal-Julho-2015-APARECIDA-PREV1.pdf"
          />
          <LinkAzul
            text="Carteira Aparecida Prev – Junho"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Relatorio-Mensal-Junho-2015-APARECIDA-PREV.pdf"
          />
          <LinkAzul
            text="Carteira Aparecida Prev Maio 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/07/Carteira-Aparecida-Prev-Maio-2015.pdf"
          />
          <LinkAzul
            text="Carteira Aparecida Prev Abril 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/06/Carteira-Aparecida-Prev-Abril-2015.pdf"
          />
          <LinkAzul
            text="Carteira Aparecida Prev Março 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/Carteira-Aparecida-Prev-Mar%C3%A7o-2015.pdf"
          />
          <LinkAzul
            text="Carteira Aparecida Prev Fevereiro 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/Carteira-Aparecida-Prev-Fevereiro-2015.pdf"
          />
          <LinkAzul
            text="Carteira Aparecida Prev Janeiro 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/02/Carteira-Aparecida-Prev-Janeiro-2015-Conselho.pdf"
          />
        </PaginaSlug>
      );
    case "ano-2014":
      return (
        <PaginaSlug>
          <LinkAzul
            text="Relatorio Mensal – Dezembro 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/01/Relatorio-Mensal-Dezembro-2014-APARECIDA-PREV.pdf"
          />
          <LinkAzul
            text="Novembro 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/12/Relatorio-Mensal-Novembro-APARECIDA-PREV.pdf"
          />
          <LinkAzul
            text="Outubro 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Relatorio-Mensal-Outubro-APARECIDA-PREV.pdf"
          />
          <LinkAzul
            text="Setembro 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Relatorio-Mensal-Setembro-2014-APARECIDA-PREV.pdf"
          />
          <LinkAzul
            text="Agosto 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Relatorio-Mensal-Agosto-2014-APARECIDA-PREV.pdf"
          />
          <LinkAzul
            text="Julho 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/08/Relato%C2%A6rio-Mensal-Julho-APARECIDA-PREV.pdf"
          />
          <LinkAzul
            text="Junho 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/Relatorio-Mensal-Junho-2014-APARECIDA-PREV.pdf"
          />
          <LinkAzul
            text="Maio 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/Relatorio-Mensal-Maio-2014-APARECIDA-PREV.pdf"
          />
          <LinkAzul
            text="Abril 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/Relatorio-Mensal-Abril-2014-APARECIDA-PREV.pdf"
          />
          <LinkAzul
            text="Março 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/04/Mar%C3%A7o-2014.pdf"
          />
          <LinkAzul
            text="Fevereiro 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/04/Fevereiro-2014.pdf"
          />
          <LinkAzul
            text="Janeiro 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/04/Janeiro-2014.pdf"
          />
        </PaginaSlug>
      );
    case "ano-2013":
      return <PaginaSlug></PaginaSlug>;
    default:
      return (
        <PaginaSlug>
          <h2>Pagina não encontrada</h2>
        </PaginaSlug>
      );
  }
};
