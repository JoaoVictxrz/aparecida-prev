import Container from "@/components/container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Pensão por morte",
  };
}

export default function Home() {
  return (
    <Container title="Pensão por morte" className="space-y-4">
      <p className="font-bold">Da Pensão por Morte</p>
      <p>
        <span className="font-bold">Art.48 –</span> A pensão por morte
        consistirá numa importância mensal conferida ao conjunto dos dependentes
        do segurado, quando do seu falecimento.
      </p>

      <p>
        <span className="font-bold">1º</span> – Será concedida pensão provisória
        por morte presumida do segurado, nos seguintes casos:
      </p>

      <p>
        <span className="font-bold">I</span> – sentença declaratória de
        ausência, expedida por autoridade judiciária competente; e
      </p>

      <p>
        <span className="font-bold">II</span> – desaparecimento em acidente,
        desastre ou catástrofe.
      </p>

      <p>
        <span className="font-bold">2º</span> – A pensão provisória será
        transformada em definitiva com o óbito do segurado ausente ou deve ser
        cancelada com reaparecimento do mesmo, ficando os dependentes
        desobrigados da reposição dos valores recebidos, salvo má-fé.
      </p>

      <p>
        <span className="font-bold">Art.49 –</span> A pensão por morte será
        devida aos dependentes a contar:
      </p>

      <p>
        <span className="font-bold">I</span> – do dia do óbito;
      </p>

      <p>
        <span className="font-bold">II</span> – da data da decisão judicial, no
        caso de declaração de ausência; ou
      </p>

      <p>
        <span className="font-bold">III</span> – da data da ocorrência do
        desaparecimento do segurado por motivo de acidente, desastre ou
        catástrofe, mediante prova idônea;
      </p>

      <p>
        <span className="font-bold">IV</span> – da data do requerimento de
        dependente devidamente inscrito, no caso deste ser protocolado com
        precedência de mais de 30 (trinta) dias.
      </p>

      <p>
        <span className="font-bold">Art.50 –</span> O valor da pensão por morte
        será igual:
      </p>

      <p>
        <span className="font-bold">I</span> – à totalidade dos proventos
        percebidos pelo aposentado na data anterior à do óbito, até o limite
        máximo estabelecido para os benefícios do regime geral de previdência
        social, acrescido de setenta por cento da parcela excedente a este
        limite; ou
      </p>

      <p>
        <span className="font-bold">II</span> – à totalidade da remuneração de
        contribuição percebida pelo servidor no cargo efetivo na data anterior à
        do óbito, até o limite máximo estabelecido para os benefícios do regime
        geral de previdência social, acrescido de setenta por cento da parcela
        excedente a este limite.
      </p>

      <p>
        <span className="font-bold">Art.51 –</span> A pensão será rateada entre
        todos os dependentes em partes iguais e não será protelada pela falta de
        habilitação de outro possível dependente.
      </p>

      <p>
        <span className="font-bold">1º</span> – O cônjuge ausente não exclui do
        direito à pensão por morte o companheiro ou a companheira.
      </p>

      <p>
        <span className="font-bold">2º</span> – A habilitação posterior que
        importe inclusão ou exclusão de dependente só produzirá efeitos a contar
        da data da inscrição ou habilitação.
      </p>

      <p>
        <span className="font-bold">3º</span> – Serão revertidos em favor dos
        dependentes e rateados entre eles a parte do benefício daqueles cujo
        direito à pensão se extinguir.
      </p>

      <p>
        <span className="font-bold">4º</span> – O pensionista de que trata o §1º
        do art. 48 deverá anualmente declarar que o segurado permanece
        desaparecido, ficando obrigado a comunicar imediatamente ao órgão gestor
        do Regime Próprio de Previdência Social de Aparecida de Goiânia o
        reaparecimento deste, sob pena de ser responsabilizado civil e
        penalmente pelo ilícito.
      </p>

      <p>
        <span className="font-bold">Art.52 –</span> A cota da pensão será
        extinta:
      </p>

      <p>
        <span className="font-bold">I</span> – pela morte;
      </p>

      <p>
        <span className="font-bold">II</span> – para o pensionista menor de
        idade, ao completar 18 (dezoito) anos, salvo, se inválido, ou pela
        emancipação, ainda que inválido, exceto, neste caso, se a emancipação
        for decorrente de colação de grau científico em curso de ensino
        superior.
      </p>

      <p>
        <span className="font-bold">III</span> – pela cessação da invalidez
        comprovada pela Perícia do RPPS.
      </p>

      <p>
        <span className="font-bold">Parágrafo único</span> – Com a extinção do
        direito do último pensionista extinguir-se-á a pensão.
      </p>

      <p>
        <span className="font-bold">Art. 53 –</span> A pensão poderá ser
        requerida a qualquer tempo, observado o artigo 58.
      </p>

      <p>
        <span className="font-bold">Art.54 –</span> Não faz jus à pensão o
        dependente condenado pela prática de crime doloso de que tenha resultado
        a morte do segurado.
      </p>

      <p>
        <span className="font-bold">Art.55 –</span> Será admitido o recebimento,
        pelo dependente, de até duas pensões no âmbito do Regime Próprio de
        Previdência Social de Aparecida de Goiânia, exceto a pensão deixada por
        cônjuge, companheiro ou companheira que só será permitida a percepção de
        uma, ressalvado o direito de opção pela mais vantajosa.
      </p>

      <p>
        <span className="font-bold">Art.56 –</span> A condição legal de
        dependente, para fins desta lei, é aquela verificada na data do óbito do
        segurado, observados os critérios de comprovação de dependência.
      </p>

      <p>
        <span className="font-bold">Parágrafo único</span> – A invalidez ou a
        alteração de condições quanto ao dependente, supervenientes à morte do
        segurado, não darão origem a qualquer direito à pensão.
      </p>
    </Container>
  );
}
