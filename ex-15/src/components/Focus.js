import React, { useRef } from 'react';

function Focus() {
  const input = useRef(null);
  const focusInput = () => {
    input.current.focus();
  };
  return (
    <div>
      <input ref={input} />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}

export default Focus;