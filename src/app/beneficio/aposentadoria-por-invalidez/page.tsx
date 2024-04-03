import Title from "@/components/title";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Aposentadoria por invalidez",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 dark:text-white pb-2">
      <section className="px-2 container">
        <Title title="Aposentadoria por invalidez" />
        <div className="w-full container space-y-4 pb-20">
          <p>
            <span className="font-bold">Art. 15 – </span>A aposentadoria por
            invalidez será devida ao segurado que for considerado incapaz,
            insusceptível de reabilitação para o exercício de atividade pública
            municipal ou de readaptação de função, enquanto permanecer nessa
            condição.
          </p>
          <p>
            <span className="font-bold">§1º – </span>A aposentadoria por
            invalidez será precedida de auxílio-doença.
          </p>
          <p>
            <span className="font-bold">§2º – </span>A aposentadoria por
            invalidez terá proventos proporcionais ao tempo de contribuição,
            calculados conforme o disposto no art. 25 da presente Lei, exceto se
            decorrente de acidente em serviço, moléstia profissional ou doença
            grave, contagiosa ou incurável, sendo estas definidas no §6º, deste
            artigo, que será calculado de acordo com o disposto no art. 24 da
            presente Lei.
          </p>
          <p>
            <span className="font-bold">§3º – </span>Considera-se acidente em
            serviço, para efeitos do parágrafo anterior, aquele ocorrido no
            exercício do cargo, que se relacione, direta ou indiretamente, com
            as atribuições deste, provocando lesão corporal ou perturbação
            funcional que cause a perda permanente ou temporária da capacidade
            para o trabalho.
          </p>
          <p>
            <span className="font-bold">§4º – </span>Equiparam-se ao acidente em
            serviço, para os efeitos desta lei:
          </p>
          <p>
            <span className="font-bold">I – </span>o acidente ligado ao serviço
            que, embora não tenha sido a causa única, haja contribuído
            diretamente para a redução ou perda da sua capacidade para o
            trabalho, ou produzido lesão que exija atenção médica para a sua
            recuperação;
          </p>
          <div>
            <span className="font-bold">
              II – o acidente sofrido pelo segurado no local e no horário do
              trabalho, em conseqüência de:
            </span>
            <p>
              a) ato de agressão, sabotagem ou terrorismo praticado por terceiro
              ou companheiro de serviço;
            </p>
            <p>
              b) ofensa física intencional, inclusive de terceiro, por motivo de
              disputa relacionada ao serviço;
            </p>
            <p>
              c) ato de imprudência, de negligência ou de imperícia de terceiro
              ou de companheiro de serviço;
            </p>
            <p>d) ato de pessoa privada do uso da razão; e</p>
            <p>
              e) desabamento, inundação, incêndio e outros casos fortuitos ou
              decorrentes de força maior.
            </p>
          </div>
          <p>
            <span className="font-bold">III – </span>a doença proveniente de
            contaminação acidental do segurado no exercício do cargo;
          </p>
          <div>
            <span className="font-bold">IV – </span>o acidente sofrido pelo
            segurado ainda que fora do local e horário de serviço
            <p>
              a) na execução de ordem ou na realização de serviço relacionado ao
              cargo;
            </p>
            <p>
              b) na prestação espontânea de qualquer serviço ao Município para
              lhe evitar prejuízo ou proporcionar proveito;
            </p>
            <p>
              c) em viagem a serviço, inclusive para estudo quando financiada
              pelo Município dentro de seus planos para melhor capacitação da
              mão-de-obra, independentemente do meio de locomoção utilizado,
              inclusive veículo de propriedade do segurado; e
            </p>
            <p>
              d) no percurso da residência para o local de trabalho ou deste
              para aquela, qualquer que seja o meio de locomoção, inclusive
              veículo de propriedade do segurado.
            </p>
          </div>
          <p>
            <span className="font-bold">§5º – </span>Nos períodos destinados à
            refeição ou descanso, ou por ocasião da satisfação de outras
            necessidades fisiológicas, no local do trabalho ou durante este, o
            servidor é considerado no exercício do cargo.
          </p>
          <p>
            <span className="font-bold">§6º – </span>onsideram-se doenças
            graves, contagiosas ou incuráveis, a que se refere o §2º, deste
            artigo, tuberculose ativa; hanseníase; alienação mental; neoplasia
            maligna; cegueira; paralisia irreversível e incapacitante;
            cardiopatia grave; doença de Parkinson; espondiloartrose
            anquilosante; nefropatia grave; estado avançado da doença de Paget
            (osteíte deformante); síndrome da deficiência imunológica adquirida
            – AIDS; e contaminação por radiação, com base em conclusão da
            medicina especializada.
          </p>
          <p>
            <span className="font-bold">§7º – </span>A concessão de
            aposentadoria por invalidez dependerá da verificação da condição de
            incapacidade, mediante exame médico-pericial do órgão competente.
          </p>
          <p>
            <span className="font-bold">§8º – </span>Em caso de doença que
            impuser afastamento compulsório, com base em laudo conclusivo da
            medicina especializada, ratificado pela Perícia Médica do RPPS, a
            aposentadoria por invalidez independerá de auxílio-doença e será
            devida a partir da publicação do ato de sua concessão.
          </p>
          <p>
            <span className="font-bold">§9º – </span>É vedada a concessão da
            aposentadoria por invalidez, quando a incapacidade permanente for
            causada por doença pré-existente ao ingresso do segurado no serviço
            público efetivo.
          </p>
          <p>
            <span className="font-bold">§10º – </span>O segurado é obrigado a se
            submeter anualmente ao exame da Perícia do RPPS, sob pena de
            suspensão do pagamento do seu benefício, caso seja verificada a
            cessação da incapacidade o benefício será extinto ex-oficio.
          </p>
        </div>
      </section>
    </article>
  );
}
