import React from 'react'

import DonateButton from './DonateButton'

const About = () => (
  <section id="about">
    <h2>SOBRE O #VEMPRAGUERRA</h2>
    <div>
      <p>
        O Hospital das Clínicas da Faculdade de Medicina da Universidade de São
        Paulo, está na linha de frente do combate ao avanço da pandemia e
        preparou a maior operação de sua história com a liberação de 900 leitos
        para enfrentar a ameaça do Novo Coronavírus.
      </p>
      <p>
        Desse cenário, nasceu o movimento <b>#VemPraGuerra</b>, que uniu médicos
        e profissionais de diversas áreas, por meio de trabalho voluntário.
        Nosso objetivo é convocar a sociedade civil para participar da batalha
        contra o novo coronavírus através da arrecadação de fundos para a compra
        de materiais hospitalares, essenciais para essa nova demanda.
      </p>

      <DonateButton />

      <h2>META</h2>
      <p>
        A nossa meta é atingir 10 milhões de reais que serão destinados
        totalitariamente para a compra de equipamentos hospitalares essenciais,
        dentre eles:
      </p>
      <ul>
        <li>80.000 máscaras N95;</li>
        <li>1.340.000 máscaras cirúrgicas;</li>
        <li>13.400 litros de álcool gel;</li>
        <li>90.000 aventais;</li>
        <li>422.000 toucas;</li>
        <li>3 máquinas portáteis de raio-x </li>
      </ul>
      <p>
        Tais recursos serão utilizados nos próximos 2 meses de trabalho, segundo
        as projeções de aumento dos atendimentos.
      </p>
      <p>
        O <b>#VemPraGuerra</b> convoca você a ajudar no combate dessa pandemia:
        doando diretamente aos que estarão na linha de frente!
      </p>
    </div>

    <DonateButton />

    <div style={{ textAlign: 'center' }}>
      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F105616944418128%2Fvideos%2F2471836366251797%2F&show_text=0&width=560"
        style={{
          border: 'none',
          overflow: 'hidden',
          maxWidth: '90%',
          margin: '0 auto',
        }}
        title="Vídeo facebook"
        scrolling="no"
        frameBorder="0"
        allowtransparency="true"
        width={500}
        height={250}
        allowFullScreen
      ></iframe>
    </div>
  </section>
)

export default About
