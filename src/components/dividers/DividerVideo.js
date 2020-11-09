import React, { useRef } from 'react';

export default function Divider(props) {
  const { id } = props;
  return (
    <div id={id}
      style={{ width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '5vw', marginTop: '0vw' }}
    >
      <h3 style={{ display: 'block', textAlign: 'center' }}>
        |<br /><br />


        BGEA Featured Videos

        <br /><br />
        |
      </h3>
    </div >
  );
}
