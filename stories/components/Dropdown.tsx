import React from 'react'

type DropdownProps = {
    DropdownBg? : string;
    option1?: string;
    option2?: string;
    option3?: string;
    option4?: string;
    dropDownShadow?: string;
}

const Dropdown = ({ DropdownBg, option1, option2, option3, option4, dropDownShadow }: DropdownProps) => {
  return (
    <div 
        style={{
            backgroundColor: DropdownBg,
            padding: '20px',
            borderRadius: '5px',
            display:'flex',
            flexDirection: 'column',
            gap: '10px',
        }}>
        <h1 style={{color: 'white', fontFamily: 'verdana'}}>Input 4 technologies you know best</h1>
        <select
            style={{
                backgroundColor: 'grey',
                outline: 'none',
                boxShadow: `4px 4px 10px ${dropDownShadow}`,
                color: 'white',
            }}>
            <option>{option1}</option>
            <option>{option2}</option>
            <option>{option3}</option>
            <option>{option4}</option>
        </select>

        <style jsx>{`
        select {
          background-color: ${DropdownBg};
          padding: 8px;
          display: flex;
          border-radius: 5px;
        }
      `}</style>
    </div>
  )
}

export default Dropdown

