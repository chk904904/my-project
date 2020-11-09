import React, { useRef } from 'react';

export default function Divider(props) {
  const { id } = props;
  return (
    <div id={id}
      style={{ width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '0vw', marginTop: '5vw' }}
    >
      <h3 style={{ display: 'block', textAlign: 'center' }}>
        |<br /><br />
        Survey
        <br /><br />
        |
      </h3>
    </div >
  );
}
