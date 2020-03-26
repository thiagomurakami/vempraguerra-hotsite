import React from "react"

import CollapsibleQuestion from "./CollapsibleQuestion"

const faq = [
  {
    question: "Por que o Hospital das Clínicas precisa de recursos?",
    answer:
      "Os EPI (Equipamentos de Proteção Individual), como por exemplo máscaras cirúrgicas e máscaras N95, fundamentais para a proteção dos profissionais de saúde tiveram aumento exponencial de demanda. Além disso, com bloqueio de fronteiras entre países, fechamento de comércio e fábricas, formou-se uma atmosfera desfavorável para o abastecimento destes produtos, resultando numa escalada de preços. Máscaras N95, que custavam cerca de R$ 1,35 por unidade passaram a custar cerca de R$27,90, máscaras cirúrgicas passaram de R$ 0,10 por unidade para R$ 3,90 (dados fornecidos pela Diretoria de Gestão de Suprimentos). Diante de tal situação, acreditamos que independentemente do aumento de recursos governamentais destinados ao Hospital das Clínicas e a todos os demais hospitais do Estado, precisamos nos organizar como sociedade para ajudar nessa causa.",
  },
  {
    question:
    "Como funciona a compra de suprimentos?",
    answer:
      "A verba hospitalar se dá por meio de duas formas: Governo Estadual e Fundação Faculdade de Medicina, que é uma entidade privada, sem fins lucrativos criada pelo antigos alunos da Faculdade de Medicina da USP para apoiar a Faculdade e o Hospital das Clínicas. A compra de materiais para os hospitais do complexo se dá por meio da Direção do Núcleo de Infraestrutura e Logística do Hospital das Clínicas, que em uma situação de emergência e crise, está autorizada a comprar insumos por cotações no mercado, acelerando a chegada de novos recursos."
    ,
  },
  {
    question:
    "O governo não está ajudando nos gastos?",
    answer:
    "O hospital acaba de receber um aporte financeiro do Governo Estadual para controle da epidemia vigente e para se transformar num centro de tratamento de coronavírus. No entanto, analisando o cenário atual, encontramo-nos em estado emergencial de demanda de equipamentos, o que requer medidas rápidas de auxílio financeiro.",
  },
  {
    question: "Para onde vai o dinheiro das doações?",
    answer:
    "O dinheiro das doações irá diretamente para uma conta designada especificamente para a Fundação Faculdade de Medicina, uma das entidades responsáveis pelo financiamento do complexo do Hospital das Clínicas. O responsável pelo gerenciamento da conta será o Coordenador do Núcleo Econômico Financeiro do HC - Adilson Bretherick, que repassará a verba para a compra dos materiais abaixo listados. A Fundação Faculdade de Medicina (FFM) é uma entidade privada, sem fins lucrativos, reconhecida por seu caráter filantrópico, criada em 1986 pelos antigos alunos da Faculdade de Medicina da USP (FMUSP) para atuar na promoção do ensino, pesquisa e assistência em saúde e apoiar as atividades da Faculdade e do Hospital.",
  },
  {

    question:
      "Por que 10 milhões de reais?",
      answer:
    "Segundo as estimativas da Direção do Núcleo de Infraestrutura e Logística do HC-FMUSP, em um mês normal são necessários, em média, 5.700 máscaras N95, 135.000 máscaras cirúrgicas, 1.330 litros de álcool em gel, 15.000 aventais e 105.000 toucas. Com a epidemia do novo Coronavírus prevê-se que mensalmente serão necessários 40.000 máscaras N95, 670.000 máscaras cirúrgicas, 6.700 litros de álcool gel, 45.000 aventais e 211.000 toucas. No entanto, esse não é o único desafio. Por conta da alta demanda nacional, os preços desses insumos aumentaram desproporcionalmente. As máscaras N95, que previamente à crise custavam cerca R$ 1,35 a unidade, atualmente estão custando R$ 27,90, enquanto as máscaras cirúrgicas aumentaram de R$ 0,10 por unidade, custando agora R$ 3,90. Além disso, o hospital precisa emergencialmente de três máquinas de Raio-X portáteis, no valor unitário de aproximadamente R$ 770.000,00. Considerando-se os recursos para aproximadamente 2 meses, buscamos o objetivo de R$ 10.000.000,00.",
  },
  {
    question: "Por que o nome #VemPraGuerra?",
    answer: "O #VEMPRAGUERRA objetiva a mobilização da sociedade em prol do combate a um inimigo em comum nessa guerra: o COVID-19. Analisando de forma cética o atual cenário nacional, podemos perceber certa semelhança a uma situação de guerra: ambas são situações de emergência que necessitam de grande esforço coletivo. Atualmente, a população se encontra reclusa a suas casas, aguardando notícias, números. Estamos todos aflitos, com medo das incertezas, receosos pelas perspectivas socio-político-econômicas. É uma situação emergencial e que necessita de medidas rápidas e imediatas, como a preconizada pelo projeto.",
  },
]

// const relevantData = [
//   {question: 'Dados sobre o coronavírus', answer: }
// ]

const Faq = () => (
  <section id="faq" style={{marginTop: '1rem'}}>
    <h2>FAQ #VemPraGuerra</h2>
    <ul style={{listStyleType: 'none', marginLeft: 0 }}>
      {faq.map(({ answer, question }, id) => {
        return (
          <CollapsibleQuestion
            key={id}
            answer={answer}
            question={question}
            name={id}
          />
        )
      })}
    </ul>
    <section id="relevant-data">
        <h2>Dados Relevantes</h2>
        <h3>Dados sobre o coronavírus</h3>
        <p>
          O SARS-Cov-2 é um vírus que se aloja nas vias aéreas, podendo causar
          sintomas respiratórios. Sua transmissão se dá por meio de gotículas e
          acredita-se que cada pessoa possa contaminar de 2 a 3 outras. Há cerca
          de 3 semanas, tivemos o primeiro caso confirmado e no dia 23/03 já são
          mais de 1500 casos e 25 mortes. Considerando a evolução da doença em
          outros países, estimamos um aumento exponencial do número de casos nas
          próximas semanas.
        </p>
        <h3>Dados sobre o Hospital das Clínicas da USP</h3>
        <p>
          O Hospital das Clínicas da Faculdade de Medicina da Universidade de
          São Paulo é o maior complexo hospitalar da América Latina. Com 75 anos
          de história, 600 mil metros quadrados de área e 11 institutos, o
          complexo possui 19 mil colaboradores, 2500 leitos e realiza mais de
          1,4 milhão consultas ambulatoriais por ano, 160 mil atendimentos
          urgências e emergências e 47 mil cirurgias. São 66 laboratórios de
          investigação médica, com mais de 200 grupos de pesquisa buscando
          constantemente desenvolver e promover a excelência no ensino e
          pesquisa.
        </p>
        <p>
          Tendo como pilares fundamentais Ensino, Pesquisa, e Assistência, o HC
          está na linha de frente na guerra contra o coronavírus. O hospital vem
          se mobilizando desde o início da disseminação do COVID-19, tendo
          organizado um Pronto-Atendimento somente para casos suspeitos, isolado
          do restante do hospital, aumentado sua capacidade de leitos de terapia
          intensiva e vem realizando treinamentos sistemáticos de seus
          funcionários. Além disso, suspendeu grande parte de seus atendimentos
          ambulatoriais para mobilizar a maior quantidade de pessoas para o
          atendimento dos doentes urgentes.
        </p>
        <p>
          Recentemente, foi iniciada a maior operação da história do Hospital
          das Clínicas, que propõe a liberação de 900 leitos destinados ao
          combate do COVID-19.
        </p>
      </section>
  </section>
)

export default Faq
