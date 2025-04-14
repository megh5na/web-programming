import React, { useState } from 'react';

function FormState() {
  const [form, setForm] = useState({ name: '', email: '' });
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
      </label>
      <button type="submit">Submit</button>
      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>
    </form>
  );
}

export default FormState;