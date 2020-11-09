import React, { useRef } from 'react';

export default function DividerStory(props) {
  const { id } = props;
  return (
    <div id={id}
      style={{ width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '0vw', marginTop: '-15vw' }}
    >
      <h3 style={{ display: 'block', textAlign: 'center' }}>
        |<br /><br />
        What's happening in the system<br /><br />
        |
      </h3>

    </div >
  );
}
