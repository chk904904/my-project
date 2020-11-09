import React from 'react';
import ContinuousSlider from './Slider';

export default function Contribute() {
  return (
    <div
      style={{
        height: '90vh',
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '3rem',
      }}
    >
      <h1>How can I contribute?</h1>
      <ContinuousSlider />
    </div>
  );
}
