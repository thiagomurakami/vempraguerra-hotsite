import React from 'react'

import DonateButton from './DonateButton'

const RelevantData = () => (
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

      <DonateButton />
    </section>
)

export default RelevantData