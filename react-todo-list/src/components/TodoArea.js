import React, { useState } from 'react';

export default function TodoArea() {
  const [tdItem, setTdItem] = useState();

  function TodoAdd() {
    console.log(setTdItem);
  }

  function TodoEvent(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={TodoEvent} />
      <button onClick={TodoAdd}> 추가 </button>
      {/* {console.log(tdItem)} */}
    </div>
  );
}
