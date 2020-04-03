import React from 'react'

import groupDecimal from '../utils/groupDecimal'

const DonateButton = () => {
  const [value, setValue] = React.useState(0)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2rem 0',
      }}
    >
      <input
        type="text"
        format="currency"
        value={`R$ ${groupDecimal(value)}`}
        style={{
          height: '3.5rem',
          marginRight: '2rem',
          textAlign: 'center',
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          maxWidth: '50%',
          color: value === '' || value === 0 ? '#bbbbbb' : 'black',
        }}
        onChange={e => {
          const newValue = e.target.value.replace('R$', '')

          if (newValue === ' ') {
            return setValue('')
          }

          setValue(Number(newValue.replace(/[^\d]/g, '')))
        }}
      />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://donate.charidy.com/8256?amount=${value ||
          0}&billingfirstname=&billinglastname=&message=&displayname=&lang=pt&route=campaign%2Fdonation&campaign_id=8256&team_id=&rec_amount=&lang=pt`}
        style={{ maxWidth: '50%' }}
      >
        <button className="donate-button" type="button">
          Doar Agora
        </button>
      </a>
    </div>
  )
}

export default DonateButton
