import React from 'react'

import CollapsibleQuestion from './CollapsibleQuestion'

const faq = [
  {
    question: 'Por que o Hospital das Clínicas precisa de recursos?',
    answer:
      'Os Equipamentos de Proteção Individual (EPI), permitem que os profissionais de saúde possam trabalhar  de forma segura em ambientes contaminados pelo vírus. Máscaras cirúrgicas e máscaras N95, por exemplo, tiveram aumento exponencial de demanda. Além disso, com bloqueio de fronteiras entre países, fechamento de comércio e fábricas, formou-se uma atmosfera desfavorável para o abastecimento destes produtos, resultando numa escalada de preços. Diante de tal situação, ainda que recursos estaduais estejam sendo mobilizados para crise, acreditamos ser imprescindível nos organizarmos como sociedade para ajudar nessa causa.',
  },
  {
    question: 'Como funciona a compra de suprimentos?',
    answer:
      'A verba hospitalar se dá por meio de duas formas: Governo Estadual e Fundação Faculdade de Medicina, que é uma entidade privada, sem fins lucrativos criada pelo antigos alunos da Faculdade de Medicina da USP para apoiar a Faculdade e o Hospital das Clínicas. A compra de materiais para os hospitais do complexo se dá por meio da Direção do Núcleo de Infraestrutura e Logística do Hospital das Clínicas, que em uma situação de emergência e crise, está autorizada a comprar insumos por cotações no mercado, acelerando a chegada de novos recursos.',
  },
  {
    question: 'O governo não está ajudando nos gastos?',
    answer:
      'O hospital acaba de receber verba do Governo Estadual para controle da epidemia vigente e para se transformar num centro de tratamento de coronavírus. No entanto, analisando o cenário atual, encontramo-nos em estado emergencial de demanda de equipamentos, o que requer medidas rápidas de auxílio financeiro e participação popular. Ainda que neste momento o Hospital das Clínicas possua recursos, não podemos deixar de nos preparar para os piores cenários, como observado, por exemplo, na Itália.',
  },
  {
    question: 'Para onde vai o dinheiro das doações?',
    answer:
      'O dinheiro das doações irá diretamente para uma conta designada especificamente para a Fundação Faculdade de Medicina, uma das entidades responsáveis pelo financiamento do complexo do Hospital das Clínicas. O responsável pelo gerenciamento da conta será o Coordenador do Núcleo Econômico Financeiro do HC, que repassará a verba para a compra dos materiais abaixo citados. A Fundação Faculdade de Medicina (FFM) é uma entidade privada, sem fins lucrativos, reconhecida por seu caráter filantrópico, criada em 1986 pelos antigos alunos da Faculdade de Medicina da USP (FMUSP) para atuar na promoção do ensino, pesquisa e assistência em saúde e apoiar as atividades da Faculdade e do Hospital.',
  },
  {
    question: 'Por que 10 milhões de reais?',
    answer:
      'Segundo as estimativas da Direção do Núcleo de Infraestrutura e Logística do HC-FMUSP, em um mês comum são necessários, em média, 5.700 máscaras N95, 135.000 máscaras cirúrgicas, 1.330 litros de álcool em gel, 15.000 aventais e 105.000 toucas. Com a epidemia do novo Coronavírus prevê-se que mensalmente serão necessárias 40.000 máscaras N95, 670.000 máscaras cirúrgicas, 6.700 litros de álcool gel, 45.000 aventais e 211.000 toucas. No entanto, esse não é o único desafio. Por conta da alta demanda nacional, os preços desses insumos aumentaram desproporcionalmente. Além disso, para evitar que pacientes contaminados se desloquem pelo hospital, colocando outros doentes, sem COVID-19, em risco o HC solicita três máquinas de Raio-X portáteis, no valor unitário de aproximadamente R$ 770.000,00. Considerando-se os recursos para aproximadamente 2 meses, buscamos o objetivo de R$ 10.000.000,00.',
  },
  {
    question: 'Por que o nome #VemPraGuerra?',
    answer:
      'O #VemPraGuerra objetiva a mobilização da sociedade em prol do combate a um inimigo em comum: o COVID-19. Sabemos que as consequências da pandemia se estenderão muito além da área da saúde, incluindo a esferas econômica, social e cultural. Sendo assim, entendemos que todos os cidadãos devem se empenhar no combate ao novo coronavírus. Percebemos, neste momento delicado, que há muitas pessoas em casa, com a sensação de impotência e, por isso, objetivamos a ação de cada um, sem sair de casa: através da doação de recursos para aquisição de materiais de proteção aos profissionais de saúde.',
  },
]

// const relevantData = [
//   {question: 'Dados sobre o coronavírus', answer: }
// ]

const Faq = () => (
  <section id="faq" style={{ marginTop: '1rem' }}>
    <h2>FAQ #VemPraGuerra</h2>
    <ul style={{ listStyleType: 'none', marginLeft: 0 }}>
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
        de 3 semanas, tivemos o primeiro caso confirmado e no dia 25 de março já
        são mais de 2400 casos e 50 mortes. Considerando a evolução da doença em
        outros países, estimamos um aumento exponencial do número de casos nas
        próximas semanas.
      </p>
      <h3>Dados sobre o Hospital das Clínicas da USP</h3>
      <p>
        O Hospital das Clínicas da Faculdade de Medicina da Universidade de São
        Paulo é o maior complexo hospitalar da América Latina. Com 75 anos de
        história, 600 mil metros quadrados de área e 11 institutos, o complexo
        possui 19 mil colaboradores, 2500 leitos e realiza mais de 1,4 milhão
        consultas ambulatoriais por ano, 160 mil atendimentos urgências e
        emergências e 47 mil cirurgias. São 66 laboratórios de investigação
        médica, com mais de 200 grupos de pesquisa buscando constantemente
        desenvolver e promover a excelência no ensino e pesquisa.
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
        Recentemente, foi iniciada a maior operação da história do Hospital das
        Clínicas, que propõe a liberação de 900 leitos destinados ao combate do
        COVID-19.
      </p>
      <h3>Mais informações sobre as instituições</h3>
      <a
        href="https://www.hc.fm.usp.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>https://www.hc.fm.usp.br/</p>
      </a>
      <a href="http://www.ffm.br/" target="_blank" rel="noopener noreferrer">
        <p>http://www.ffm.br/</p>
      </a>
      <h2>Equipe #VemPraGuerra</h2>
      <h3>Em parceria com:</h3>
      <p>
        <b>Superintendência HC:</b> Antonio Jose Rodrigues Pereira
      </p>
      <p>
        <b>Fundação Faculdade de Medicina da USP:</b> Prof. Jose Otávio Costa
        Auler Junior
      </p>

      <ul>
        <li>Alexandre Vasserman</li>
        <li>Alex Faiwichow</li>
        <li>Ayumi Tomishige</li>
        <li>Dan Novachi</li>
        <li>Eduardo Mitelman</li>
        <li>Fabianna Mainier</li>
        <li>George Queiroz</li>
        <li>Gustavo Bezerra</li>
        <li>Gunter Sarfert</li>
        <li>Heloisa Aun</li>
        <li>Hugo Metzger</li>
        <li>Marcela Butros</li>
        <li>Natsumi Tomishige</li>
        <li>James Feeler</li>
        <li>Júlia Ferraz</li>
        <li>Júnior Santos</li>
        <li>Marco Avanzi</li>
        <li>Patrícia Melhem</li>
        <li>Pedro Bacchi</li>
        <li>Ramon Ballverdú</li>
        <li>Renilson Barros</li>
        <li>Ricardo Vasserman</li>
        <li>Tatiane Menezes</li>
        <li>Thiago Murakami</li>
        <li>Thomas Maghidman e colaboradores</li>
      </ul>
    </section>
  </section>
)

export default Faq
