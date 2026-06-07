import { useState } from 'react';

const initialState = {
  name: '',
  description: '',
  price: '',
};

function ProductForm({ onSubmit }) {
  const [form, setForm] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      name: form.name,
      description: form.description,
      price: Number(form.price),
    };
    await onSubmit(payload);
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear producto</h2>
      <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} required />
      <input
        name="description"
        placeholder="Descripción"
        value={form.description}
        onChange={handleChange}
        required
      />
      <input
        name="price"
        placeholder="Precio"
        type="number"
        value={form.price}
        onChange={handleChange}
        required
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default ProductForm;
