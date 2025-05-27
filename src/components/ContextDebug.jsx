// ContextDebug.jsx - A component to check what's going on with ProcessPhaseContext
import React, { useContext } from 'react';
import { ProcessPhaseContext } from '../contexts/ProcessPhaseContext.jsx';

const ContextDebug = () => {
  const contextValue = useContext(ProcessPhaseContext);
  
  return (
    <div style={{ display: 'none' }}> {/* Hidden debug component */}
      <h3>Context Debug</h3>
      <p>currentPhase: {contextValue.currentPhase}</p>
      <p>phaseData available: {contextValue.phaseData ? 'Yes' : 'No'}</p>
      {contextValue.phaseData && (
        <div>
          <p>phaseData.title: {contextValue.phaseData.title || 'Not set'}</p>
          <p>phaseData.subtitle: {contextValue.phaseData.subtitle || 'Not set'}</p>
        </div>
      )}
    </div>
  );
};

export default ContextDebug;