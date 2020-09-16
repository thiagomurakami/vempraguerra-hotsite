import React from 'react'

const LinkItem = ({ title, href }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      {title}
    </a>
  </li>
)

const news = [
  {
    title:
      'Estadão: Médicos do Hospital das Clínicas fazem campanha para arrecadar insumos para combate ao coronavírus (28/03/2020)',
    href:
      'https://emais.estadao.com.br/noticias/bem-estar,medicos-do-hospital-das-clinicas-fazem-campanha-para-arrecadar-insumos-para-combate-ao-coronavirus,70003250756'
  },
  {
    title:
      'Istoé Dinheiro: Hospital das Clínicas faz campanha e busca arrecadar R$ 10 milhões (28/03/2020)',
    href:
      'https://www.istoedinheiro.com.br/hospital-das-clinicas-faz-campanha-e-busca-arrecadar-r-10-milhoes/'
  },
  {
    title:
      'SPTV (SP2): Prefeitura pretende montar 2.100 leitos em hospitais de campanha na capital (27/03/2020)',
    href: 'https://globoplay.globo.com/v/8438467/programa/'
  },
  {
    title:
      'Greenpeace: 14 formas de ajudar quem precisa durante a pandemia do coronavírus (27/03/2020)',
    href:
      'https://www.greenpeace.org/brasil/blog/14-formas-de-ajudar-quem-precisa-durante-a-pandemia-do-coronavirus/'
  },
  {
    title:
      'Yahoo: “É um clima de guerra”: percepções de um médico em meio ao coronavírus (27/03/2020)',
    href:
      'https://br.noticias.yahoo.com/clima-de-guerra-percepcoes-medico-coronavirus-185702687.html?soc_src=community&soc_trk=wa'
  },
  {
    title:
      'Buzzfeed: Como ajudar durante a pandemia do coronavírus (27/03/2020)',
    href: 'https://www.buzzfeed.com/br/gaiapassarelli/como-ajudar-coronavirus'
  },
  {
    title:
      'HuffPost: Hospitais de SP se mobilizam para evitar falta de máscaras e insumos contra coronavírus (25/03/2020)',
    href:
      'https://www.huffpostbrasil.com/entry/materiais-hospital-sp_br_5e7a5362c5b62f90bc5271ee?utm_hp_ref=br-homepage'
  },
  {
    title:
      'Folha: Hospital das Clínicas arrecada R$ 1,2 mi para compra de máscaras e de álcool em gel (25/03/2020)',
    href:
      'https://www1.folha.uol.com.br/equilibrioesaude/2020/03/hospital-das-clinicas-arrecada-r-12-mi-para-compra-da-mascaras-e-alcool-em-gel.shtml'
  },
  {
    title:
      'SBT: Hospital das Clínicas pede doações para combater o coronavírus | Primeiro Impacto (25/03/20)',
    href: 'https://youtu.be/4FULHA_upDk'
  },
  {
    title:
      'GLOBO: Profissionais da saúde relatam falta de equipamentos de proteção (25/03/20)',
    href: 'https://globoplay.globo.com/v/8432290/'
  },
  {
    title:
      'Catraca Livre: Médicos do HC se mobilizam para arrecadar R$ 10 mi par combater coronavírus (24/03/2020)',
    href:
      'https://catracalivre.com.br/saude-bem-estar/medicos-do-hc-se-mobilizam-para-arrecadar-r-10-mi-para-combater-coronavirus/'
  },
  {
    title:
      'UOL: Coronavírus: HC-SP prevê explosão de casos e quer arrecadar R$ 10 milhões. (23/03/2020)',
    href:
      'https://www.uol.com.br/vivabem/noticias/redacao/2020/03/23/hc-se-prepara-para-aumento-de-casos-e-faz-campanha-para-arrecadar-r-10-mi.htm'
  },
  {
    title:
      'BORA SP - BAND: Hospital das Clínicas faz campanha de doações para compra de equipamentos (24/03/2020)',
    href: 'https://www.youtube.com/watch?v=ntl-9sIAqTg'
  },
  {
    title:
      'R7: Campanha quer arrecadar R$ 10 mi para combate ao coronavírus no HC (24/03/2020)',
    href:
      'http://www.noticias.r7.com/saude/campanha-quer-arrecadar-r-10-mi-para-combate-ao-coronavirus-no-hc-24032020'
  }
]

const supporters = [
  {
    title:
      'Corinthians: #VemPraGuerra Corinthians adere à campanha para compra de insumos de combate ao coronavírus',
    href:
      'https://www.corinthians.com.br/noticias/vempraguerra-corinthians-adere-a-campanha-para-compra-de-insumos-de-combate-ao-coronavirus'
  },
  {
    title:
      'SPFC: ‘Vem pra Guerra’! São Paulo divulga campanha importante de doação para hospital',
    href:
      'https://spfc24horas.com.br/vem-pra-guerra-sao-paulo-divulga-campanha-importante-de-doacao-para-hospital/'
  },
  {
    title: 'Santos FC: Instagram',
    href: 'https://www.instagram.com/p/B-QZbAUgMEe/'
  },
  {
    title: 'Nando Reis: Instagram',
    href: 'https://www.instagram.com/p/B-M8oMRhlKy/'
  },
  {
    title:
      'Reynaldo Gianecchini, Rodrigo Santoro, Ale Xavier, Nanda Costa e mais: Instagram',
    href: 'https://www.instagram.com/stories/highlights/18134193082012148/'
  },
  {
    title: 'Wellington Nogueira - Doutores da Alegria: Instagram',
    href: 'https://www.instagram.com/p/B-aQa-5HCAY/'
  }
]

const News = () => {
  return (
    <section id="news">
      <h2>Na Mídia</h2>
      <h3>Reportagens</h3>
      <ul style={{ listStyleType: 'none', marginLeft: 0, marginTop: '1rem' }}>
        {news.map(({ title, href }) => {
          return <LinkItem key={`${title}-${href}`} title={title} href={href} />
        })}
      </ul>
      <h3>Apoiadores</h3>
      <ul style={{ listStyleType: 'none', marginLeft: 0, marginTop: '1rem' }}>
        {supporters.map(({ title, href }) => {
          return <LinkItem key={`${title}-${href}`} title={title} href={href} />
        })}
      </ul>
    </section>
  )
}

export default News
