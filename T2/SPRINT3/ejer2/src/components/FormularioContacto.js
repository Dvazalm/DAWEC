import React from 'react';
import { useForm } from 'react-hook-form';

const FormularioContacto = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert('Formulario enviado con éxito');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" {...register('nombre', { required: true })} />
        {errors.nombre && <span>El nombre es requerido</span>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <span>El email es requerido y debe tener un formato válido</span>}
      </div>

      <div>
        <label htmlFor="mensaje">Mensaje</label>
        <textarea {...register('mensaje', { required: true })} />
        {errors.mensaje && <span>El mensaje es requerido</span>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioContacto;
