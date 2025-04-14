import React, { useRef, useState } from 'react';

function FormRef() {
  const name = useRef(null);
  const email = useRef(null);
  const [values, setValues] = useState({ name: '', email: '' });
  const handleSubmit = e => {
    e.preventDefault();
    setValues({ name: name.current.value, email: email.current.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input ref={name} />
      </label>
      <label>
        Email:
        <input ref={email} />
      </label>
      <button type="submit">Submit</button>
      {values.name && <p>Name: {values.name}</p>}
      {values.email && <p>Email: {values.email}</p>}
    </form>
  );
}

export default FormRef;