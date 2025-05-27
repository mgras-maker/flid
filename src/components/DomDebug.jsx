// DomDebug.jsx - A component to debug DOM structure

import React, { useEffect } from 'react';

const DomDebug = () => {
  useEffect(() => {
    console.log('DOM Structure:', document.body.innerHTML);
  }, []);
  
  return null;
};

export default DomDebug;