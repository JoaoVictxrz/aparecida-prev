"use client";
import Container from "@/components/container";
import Image from "next/image";

export default function Home() {
  return (
    <Container title="COMO FICA MINHA APOSENTADORIA">
      <Card title="Como fica a minha aposentadoria?">
        <h2 className="font-bold">3. Saiba Mais</h2>
        <p>Para ver como será a sua aposentadoria você precisa saber:</p>

        <p>
          . Quando ingressou e quanto tempo tem de efetivo exercício no serviço
          público, em qualquer órgão público, mesmo descontinuo.
        </p>

        <p>
          . Quanto tempo tem na carreira e no cargo efetivo no mesmo órgão
          público.
        </p>

        <p>
          . Quanto tempo tem de contribuição, contando o tempo de contribuição
          extra municipal, devidamente averbado.
        </p>

        <p>
          . Combinando esses fatores com a sua idade você encontrará, nos
          quadros a seguir, as regras que se aplicam ao seu caso.
        </p>
      </Card>
      <Card title="SE VOCÊ INGRESSOU NO SERVIÇO PÚBLICO ATÉ 16/12/1998">
        <p>(antes da Emenda Constitucional nº 20/1998)</p>
        <p>.Regra de Transição (art.2º da Emenda Constitucional nº 41).</p>
        <Image
          src="https://aparecidaprev.go.gov.br//wp-content/uploads/2013/10/aposentadoria.jpg"
          alt="Aposentadoria"
          width={500}
          height={500}
        />
      </Card>
      <Card importante>
        <p>
          .O acréscimo para o professor é de 17% e para professora é de 20% do
          tempo exercido até 16/12/98, desde que se aposente exclusivamente com
          tempo de magistério.
        </p>
        <p>
          . Para os Magistrados e membros do TCU acréscimo de 17% até 16/12/98.
        </p>
      </Card>

      <Card title="SE VOCÊ PREENCHEU AS REGRAS PARA A APOSENTADORIA PREVISTAS ATÉ A DATA">
        <p>DE 31/12/2003 VOCÊ TEM DIREITO ADQUIRIDO</p>
        <p>(Artigo 30 Emenda Constitucional nº 41)</p>
      </Card>
      <Card title="NESTE CASO EXISTEM QUATRO HIPÓTESES:">
        <p>Hipótese 1 – (art. 40, §1º,III, “a” da Constituição Federal)</p>
        <Image
          src="https://aparecidaprev.go.gov.br//wp-content/uploads/2013/10/aposentadoria3.jpg"
          alt="Aposentadoria"
          width={500}
          height={500}
        />
      </Card>

      <Card importante>
        <p>
          . Os professores continuam tendo 5 anos de diminuição na idade de 5
          anos na contribuição deste que comprovem tempo exclusivo de efetivo no
          exercício das funcões de magistério, na Educação Infantil e no Ensino
          Fundamental e Médio.
        </p>
        <p>Hipótese 2 – (art.40, §1º, “b” da Constituição Federal)</p>
        <Image
          src="https://aparecidaprev.go.gov.br//wp-content/uploads/2013/10/aposentadoria3.jpg"
          alt="Aposentadoria"
          width={500}
          height={500}
        />
      </Card>
      <Card importante>
        <p>-Não há diferença para o professor.</p>
        <p>
          Hipótese 3 – Regra de Transição (art.8o §1º da Emenda Constitucional
          nº 20)
        </p>
        <Image
          src="https://aparecidaprev.go.gov.br//wp-content/uploads/2013/10/aposentadoria5.jpg"
          alt="Aposentadoria"
          width={500}
          height={500}
        />
      </Card>
      <Card importante>
        <p>-Não há diferença para o professor.</p>
        <p>
          Hipótese 4 – Regra de Transição (art. 8o caput da Emenda
          Constitucional nº 20)
        </p>
        <Image
          src="https://aparecidaprev.go.gov.br//wp-content/uploads/2013/10/aposentadoria6.jpg"
          alt="Aposentadoria"
          width={500}
          height={500}
        />
      </Card>
      <Card importante>
        <p>
          – O Professor tem acréscimo de 17% e a professora 20% no tempo
          exercido até 16/12/98, desde que se aposente, exclusivamente, com
          tempo efetivo nas funções de magistério. – Membros do Ministério
          público e do TCU têm acréscimo de 17% no tempo exercido até 16/12/98.
        </p>
      </Card>
      <Card title="SE VOCÊ INGRESSOU NO SERVIÇO PÚBLICO A PARTIR DE 31/12/2003 OU SE NÃO OPTOU PELAS REGRAS DOS ARTS. 2º DA EMENDA Nº 41/03, VOCÊ TEM MAIS DUAS OPÇÕES (REGRA PERMANENTE):">
        <p>Opção 1 – art. 40 §1º III “a” da Constituição Federal</p>
        <Image
          src="https://aparecidaprev.go.gov.br//wp-content/uploads/2013/10/aposentadoria7.jpg"
          alt="Aposentadoria"
          width={500}
          height={500}
        />
      </Card>
      <Card importante>
        <p>
          – Os professores continuam tendo 5 anos de diminuição na idade e 5
          anos na contribuição, desde que comprovem tempo exclusivo no efetivo
          exercício das funções de magistério, na Educação Infantil, no Ensino
          Fundamental e Médio.
        </p>
        <p>Opção 2 – art. 40 §1º III “b” da Constituição Federal</p>
        <Image
          src="https://aparecidaprev.go.gov.br//wp-content/uploads/2013/10/aposentadoria8.jpg"
          alt="Aposentadoria"
          width={500}
          height={500}
        />
      </Card>
      <Card importante>
        <p>– Não há diferença para o professor.</p>
      </Card>
    </Container>
  );
}

interface Card {
  title?: string;
  children: React.ReactNode;
  importante?: boolean;
  className?: string;
}

const Card = ({ title, children, className, importante }: Card) => {
  return (
    <div className={`${className} py-3 `}>
      <h2 className="text-lg font-bold">
        {title}
        {importante && <span className="text-red-500">IMPORTANTE</span>}
      </h2>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
};
