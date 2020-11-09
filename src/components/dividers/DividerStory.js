import React, { useRef } from 'react';

export default function DividerStory(props) {
  const { id } = props;
  return (
    <div id={id}
      style={{ width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10vw', marginTop: '10vw' }}
    >
      <h3 style={{ display: 'block', textAlign: 'center' }}>
        |<br />
        <h3 />
        The Story


      </h3>
      <p>Serena is a black girl who encountered and overcame many difficulties in her life. Click on the items in the image to learn more.</p>
      <h3 style={{ display: 'block', textAlign: 'center' }}>
        |<br />
      </h3>
    </div >
  );
}
