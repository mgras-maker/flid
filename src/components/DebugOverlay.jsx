import { useState, useEffect } from 'react';
import styled from 'styled-components';

/**
 * Komponent do debugowania interfejsu
 * Pokazuje przezroczyste nakładki, które pomagają zrozumieć, czy coś blokuje interakcje
 */
const DebugOverlay = () => {
  const [visible, setVisible] = useState(true);
  
  // Automatycznie ukryj po 5 sekundach
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
    // W Vite używamy import.meta.env zamiast process.env
  const isDev = import.meta.env.DEV;
  
  // Pokaż tylko w trybie deweloperskim
  if (!isDev) return null;
  
  if (!visible) return null;
  
  return (
    <>
      <DebugBox color="rgba(255, 0, 0, 0.1)" zIndex={9000} name="Z-Index 9000" />
      <DebugBox color="rgba(0, 255, 0, 0.1)" zIndex={9500} name="Z-Index 9500" />
      <DebugBox color="rgba(0, 0, 255, 0.1)" zIndex={9900} name="Z-Index 9900" />
      <DebugBox color="rgba(255, 255, 0, 0.1)" zIndex={9990} name="Z-Index 9990" />
      <DebugBox color="rgba(255, 0, 255, 0.1)" zIndex={9999} name="Z-Index 9999" />
      <DebugBox color="rgba(0, 255, 255, 0.1)" zIndex={10000} name="Z-Index 10000" />
      <DebugInfo>Debugowanie z-index (zniknie za 5 sekund)</DebugInfo>
    </>
  );
};

const DebugBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px; 
  background-color: ${props => props.color};
  z-index: ${props => props.zIndex};
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: black;
  &:after {
    content: '${props => props.name}';
    font-weight: bold;
    background: rgba(255,255,255,0.8);
    padding: 3px;
  }
`;

const DebugInfo = styled.div`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  z-index: 10001;
  pointer-events: none;
`;

export default DebugOverlay;
