import React from 'react'

import './Status.css'

const totalDirectTransferUrl = 'https://docs.google.com/spreadsheets/d/1AJ3FE3lxgUgvsZfPqoefSdvWOQC63921/gviz/tq?tqx=out:tsv&sheet=Total%20-%20n%C3%A3o%20apagar'

const getDataFromSheets = async (url, setState, dataTransformer) => {
  try {
    const response = await fetch(url)
    const stringData = await response.text()
    const modifiedStringData = stringData.split('\n')[1].replace('google.visualization.Query.setResponse(', '')
    const responseParsedData = JSON.parse(modifiedStringData.substring(0, modifiedStringData.length - 2))
    const arrayData = responseParsedData.table.rows[0].c.map(({f}) => f)

    setState(dataTransformer([arrayData]))
  } catch (e) {
    console.error(e)
  }
}

function reverseString(str) {
  return str
    .split('')
    .reverse()
    .join('')
}

function groupDigital(num) {
  const emptyStr = ''

  const trimComma = str => str.replace(/^[,]+|[,]+$/g, emptyStr)

  const str = num + emptyStr
  const [integer, decimal] = str.split('.')

  const conversed = reverseString(integer)

  const grouped = trimComma(
    reverseString(conversed.replace(/\d{3}/g, match => `${match},`)),
  )

  return !decimal ? grouped : `${grouped}.${decimal}`
}

const Status = () => {
  const [donationStatus, setDonation] = React.useState(null)
  const [
    { directTransferData, directTransferDonors },
    setDirectTransferData,
  ] = React.useState({ directTransferData: 0, directTransferDonors: 0 })

  React.useEffect(() => {
    getDataFromSheets(
      totalDirectTransferUrl,
      setDirectTransferData,
      ([data]) => {
        const newDirectTransferValue = Number(data[0])
        const newDirectTransferDonors = Number(data[1])
        return {
          directTransferData: !isNaN(newDirectTransferValue)
            ? newDirectTransferValue
            : 0,
          directTransferDonors: !isNaN(newDirectTransferDonors)
            ? newDirectTransferDonors
            : 0,
        }
      },
    )
  }, [])

  React.useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          'https://api.charidy.com/api/v1/campaign/8256?extend[]=donation_level&extend[]=share&extend[]=languages&extend[]=media&extend[]=organization&extend[]=metas&extend[]=largest_donation&extend[]=campaign_stats&extend[]=matchers&extend[]=donation_stream&extend[]=givingday_stats&extend[]=converted_currency&geolocation=1',
          {
            credentials: 'omit',
            headers: {
              accept: 'application/json, text/plain, */*',
              'accept-language': 'en-US,en;q=0.9,es;q=0.8,pt;q=0.7',
              'sec-fetch-dest': 'empty',
              'sec-fetch-mode': 'cors',
              'sec-fetch-site': 'same-site',
            },
            referrer: 'https://www.charidy.com/vempraguerra',
            referrerPolicy: 'no-referrer-when-downgrade',
            body: null,
            method: 'GET',
            mode: 'cors',
          },
        )
        const jsonData = await response.json()
        const totalDonors =
          jsonData.data.relationships.campaign_stats.data.donors_total
        const totalDonated =
          jsonData.data.relationships.campaign_stats.data.total
        const goal = jsonData.data.attributes.rounds[0].goal
        const percentage = totalDonated / goal
        setDonation({ totalDonors, totalDonated, goal, percentage })
      } catch (e) {
        setDonation(null)
      }
    }
    getData()
  }, [])

  const donationInfo = React.useMemo(() => {
    if (donationStatus) {
      const totalDonors = donationStatus.totalDonors + directTransferDonors
      const totalDonated = isNaN(directTransferData)
        ? donationStatus.totalDonated
        : donationStatus.totalDonated + directTransferData
      const goal = donationStatus.goal
      const percentage = totalDonated / goal

      return {
        percentage,
        totalDonors,
        totalDonated,
        goal,
      }
    }
    return null
  }, [directTransferData, directTransferDonors, donationStatus])

  return (
    donationInfo && (
      <div className="status-container">
        <div className="status-item">
          <div className="status-text-container">
            <h2>R$ {groupDigital(donationInfo.totalDonated)}</h2>
            <p>de R$ {groupDigital(donationInfo.goal)}</p>
          </div>
          <svg
            className="status-svg"
            width="160"
            height="160"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <title>Status da campanha</title>
              <circle
                r="69.85699"
                cy="81"
                cx="81"
                strokeWidth="8"
                stroke="#f2f2f2"
                fill="none"
              />
              <circle
                className="circle_animation"
                r="69.85699"
                cy="81"
                cx="81"
                strokeWidth="8"
                strokeDashoffset={440 - donationInfo.percentage * 440}
                stroke="#6fdb6f"
                fill="none"
              />
            </g>
          </svg>
        </div>
        <div className="total-donors-container">
          <p className="total-donors-main-text">
            {groupDigital(donationInfo.totalDonors)}
          </p>
          <p style={{ color: '#979899' }}>doadores</p>
        </div>
      </div>
    )
  )
}

export default Status
