import React from 'react'

import CollapsibleQuestion from './CollapsibleQuestion'

const faq = [
  {
    question: 'Por que o Hospital das Clínicas precisa de recursos?',
    answer:
      <p>Os Equipamentos de Proteção Individual (EPI), permitem que os profissionais de saúde possam trabalhar  de forma segura em ambientes contaminados pelo vírus. Máscaras cirúrgicas e máscaras N95, por exemplo, tiveram aumento exponencial de demanda. Além disso, com bloqueio de fronteiras entre países, fechamento de comércio e fábricas, formou-se uma atmosfera desfavorável para o abastecimento destes produtos, resultando numa escalada de preços. Diante de tal situação, ainda que recursos estaduais estejam sendo mobilizados para crise, acreditamos ser imprescindível nos organizarmos como sociedade para ajudar nessa causa.</p>,
  },
  {
    question: 'Como funciona a compra de suprimentos?',
    answer:
      <p>A verba hospitalar se dá por meio de duas formas: Governo Estadual e Fundação Faculdade de Medicina, que é uma entidade privada, sem fins lucrativos criada pelo antigos alunos da Faculdade de Medicina da USP para apoiar a Faculdade e o Hospital das Clínicas. A compra de materiais para os hospitais do complexo se dá por meio da Direção do Núcleo de Infraestrutura e Logística do Hospital das Clínicas, que em uma situação de emergência e crise, está autorizada a comprar insumos por cotações no mercado, acelerando a chegada de novos recursos.</p>,
  },
  {
    question: 'O governo não está ajudando nos gastos?',
    answer:
      <p>O hospital acaba de receber verba do Governo Estadual para controle da epidemia vigente e para se transformar num centro de tratamento de coronavírus. No entanto, analisando o cenário atual, encontramo-nos em estado emergencial de demanda de equipamentos, o que requer medidas rápidas de auxílio financeiro e participação popular. Ainda que neste momento o Hospital das Clínicas possua recursos, não podemos deixar de nos preparar para os piores cenários, como observado, por exemplo, na Itália.</p>,
  },
  {
    question: 'Para onde vai o dinheiro das doações?',
    answer:
      <p>O dinheiro das doações irá diretamente para uma conta designada especificamente para a Fundação Faculdade de Medicina, uma das entidades responsáveis pelo financiamento do complexo do Hospital das Clínicas. O responsável pelo gerenciamento da conta será o Coordenador do Núcleo Econômico Financeiro do HC, que repassará a verba para a compra dos materiais abaixo citados. A Fundação Faculdade de Medicina (FFM) é uma entidade privada, sem fins lucrativos, reconhecida por seu caráter filantrópico, criada em 1986 pelos antigos alunos da Faculdade de Medicina da USP (FMUSP) para atuar na promoção do ensino, pesquisa e assistência em saúde e apoiar as atividades da Faculdade e do Hospital.</p>,
  },
  // {
  //   question: 'Existe outra forma de doação que não seja o cartão de crédito?',
  //   answer: (
  //     <>
  //       Sim! É possível fazer a doação através de depósito/transferência pela
  //       conta oficial da Fundação Faculdade de Medicina (FFM):
  //       <ul style={{ listStyleType: 'none', marginLeft: 0, marginTop: '1rem' }}>
  //         <li>
  //           <b>Nome:</b> Fundação Faculdade de Medicina - FFM
  //         </li>
  //         <li>
  //           <b>Endereço:</b> Avenida Rebouças, 381
  //         </li>
  //         <li>
  //           <b>CEP:</b> 05401-000
  //         </li>
  //         <li>
  //           <b>CNPJ:</b> 56577059/0001-00
  //         </li>
  //         <li>
  //           <b>Banco:</b> Santander
  //         </li>
  //         <li>
  //           <b>Agência:</b> 0201
  //         </li>
  //         <li>
  //           <b>Conta corrente:</b> 13.003244-4
  //         </li>
  //       </ul>
  //       <span style={{ whiteSpace: 'pre-line' }}>
  //         Após realizar a doação, por favor, MANDAR O COMPROVANTE para{' '}
  //         <b>charidy.hc@gmail.com</b>.
  //       </span>
  //     </>
  //   ),
  // },
  {
    question: 'Por que 10 milhões de reais?',
    answer:
      <p>Segundo as estimativas da Direção do Núcleo de Infraestrutura e Logística do HC-FMUSP, em um mês comum são necessários, em média, 5.700 máscaras N95, 135.000 máscaras cirúrgicas, 1.330 litros de álcool em gel, 15.000 aventais e 105.000 toucas. Com a epidemia do novo Coronavírus prevê-se que mensalmente serão necessárias 40.000 máscaras N95, 670.000 máscaras cirúrgicas, 6.700 litros de álcool gel, 45.000 aventais e 211.000 toucas. No entanto, esse não é o único desafio. Por conta da alta demanda nacional, os preços desses insumos aumentaram desproporcionalmente. Além disso, para evitar que pacientes contaminados se desloquem pelo hospital, colocando outros doentes, sem COVID-19, em risco o HC solicita três máquinas de Raio-X portáteis, no valor unitário de aproximadamente R$ 770.000,00. Considerando-se os recursos para aproximadamente 2 meses, buscamos o objetivo de R$ 10.000.000,00.</p>,
  },
  {
    question: 'Existe a opção de doar materiais e medicamentos diretamente?',
    answer: (
      <>
        <div>
          Sim! É possível doar materiais e medicamentos diretamente ao Hospital
          das Clínicas através da comunicação pelo email oficial:{' '}
          <a href="mailto:hcdoacao.corona@hc.fm.usp.br">
            hcdoacao.corona@hc.fm.usp.br
          </a>
          .
        </div>
        <div>
          Esse email encontra-se na página oficial de arrecadação de recursos ao
          HC durante a pandemia:{' '}
          <a
            href="http://hc.fm.usp.br/index.php?option=com_content&view=article&id=1456:doacoes-covid19&catid=27&Itemid=226"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://hc.fm.usp.br/index.php?option=com_content&view=article&id=1456:doacoes-covid19&catid=27&Itemid=226
          </a>
        </div>
      </>
    ),
  },
  {
    question: (
      <>
        Por que o nome <b>#VemPraGuerra</b>?
      </>
    ),
    answer: (
      <>
        O <b>#VemPraGuerra</b> objetiva a mobilização da sociedade em prol do
        combate a um inimigo em comum: o COVID-19. Sabemos que as consequências
        da pandemia se estenderão muito além da área da saúde, incluindo a
        esferas econômica, social e cultural. Sendo assim, entendemos que todos
        os cidadãos devem se empenhar no combate ao novo coronavírus.
        Percebemos, neste momento delicado, que há muitas pessoas em casa, com a
        sensação de impotência e, por isso, objetivamos a ação de cada um, sem
        sair de casa: através da doação de recursos para aquisição de materiais
        de proteção aos profissionais de saúde.
      </>
    ),
  },
]

const Faq = () => (
  <section id="faq" style={{ marginTop: '1rem' }}>
    <h2>
      Perguntas Frequentes <b>#VemPraGuerra</b>
    </h2>
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
    Tem outras dúvidas?{' '}
    Manda um e-mail para{' '}
    <a
      href="mailto:movimentovempraguerra@gmail.com"
      style={{
        textDecoration: 'none',
        color: '#7c2f2e',
        fontWeight: 'bold',
      }}
    >
      movimentovempraguerra@gmail.com
    </a>.
  </section>
)

export default Faq
