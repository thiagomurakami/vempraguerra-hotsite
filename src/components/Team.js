import React from 'react'

import getDataFromSheets from '../utils/getDataFromSheets'

const teamUrl =
  'https://docs.google.com/spreadsheets/u/1/d/1hxcCyz2bjWNPcIy06eOL-HGSOIMVHK_hKGPuKzuZp90/export?format=tsv&id=1hxcCyz2bjWNPcIy06eOL-HGSOIMVHK_hKGPuKzuZp90&gid=1812177239'

const defaultTeam = (
  <>
    <li>Albert Mazuz</li>
    <li>Alex Faiwichow</li>
    <li>Alexandre Vasserman</li>
    <li>Ayumi Tomishige</li>
    <li>Bruno Montico Costa</li>
    <li>Caio Fernandes Alfieri</li>
    <li>Dan Novachi</li>
    <li>Eduardo Mitelman</li>
    <li>Fabianna Mainier</li>
    <li>George Queiroz</li>
    <li>Guilherme Souza</li>
    <li>Gunter Sarfert</li>
    <li>Gustavo Bezerra</li>
    <li>Heloisa Aun</li>
    <li>Hugo Metzger</li>
    <li>James Feeler</li>
    <li>João Paulo Possos Ferreira</li>
    <li>Júlia Ferraz</li>
    <li>Júnior Santos</li>
    <li>Lucas Wagner</li>
    <li>Marcela Butros</li>
    <li>Marco Avanzi</li>
    <li>Mariana Montag</li>
    <li>Mark Traiman Coji</li>
    <li>Natsumi Tomishige</li>
    <li>Patrícia Melhem</li>
    <li>Pedro Alexandria</li>
    <li>Pedro Bacchi</li>
    <li>Ramon Ballverdú</li>
    <li>Renilson Barros</li>
    <li>Ricardo Martins</li>
    <li>Ricardo Vasserman</li>
    <li>Tatiane Menezes</li>
    <li>Thiago Murakami</li>
    <li>Thomas Maghidman e colaboradores</li>
  </>
)

const Team = () => {
  const [teamData, setTeamData] = React.useState()
  React.useEffect(() => {
    getDataFromSheets(teamUrl, setTeamData, data => {
      const transformedData = data.reduce((acc, [name, done]) => {
        if (done.indexOf('TRUE') !== -1 && Boolean(name.replace(/\s/g, ''))) {
          acc.push(name)
        }

        return acc
      }, [])
      return transformedData
    })
  }, [])

  return (
    <section id="team">
      <h2>
        Equipe <b>#VemPraGuerra</b>
      </h2>
      <h3>Em parceria com:</h3>
      <p>
        <b>Superintendência HC:</b> Antonio Jose Rodrigues Pereira
      </p>
      <p>
        <b>Fundação Faculdade de Medicina da USP:</b> Prof. Jose Otávio Costa
        Auler Junior
      </p>

      <ul>
        {teamData
          ? teamData.map((name, index) => (
              <li key={`${name}-${index}`}>{name}</li>
            ))
          : defaultTeam}
      </ul>
    </section>
  )
}

export default Team
