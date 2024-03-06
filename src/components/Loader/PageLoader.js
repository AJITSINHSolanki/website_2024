import React from 'react';
import { ClipLoader } from 'react-spinners';

function PageLoader() {
  return (
    <div style={{textAlign: 'center'}}>
    <ClipLoader
      color="#0162C8"
      cssOverride={{}}
      size={15}
      speedMultiplier={1}
    />
  </div>
  );
}

export default PageLoader;
