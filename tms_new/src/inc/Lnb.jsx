import React from 'react'

function Lnb() {
  let output = localStorage.getItem('lnb');
  let lnb = JSON.parse(output);

  return (
    <div id='lnb'>
      <ul>
        {
          lnb &&
          lnb.map((item,index) => {
            return(
              item !== null ? <li key={index}>{item}</li> : null
            )
          })
        }
      </ul>
    </div>
  )
}

export default Lnb;
