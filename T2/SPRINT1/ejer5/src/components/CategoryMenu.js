// src/components/CategoryMenu.js
import React from 'react';

const CategoryMenu = ({ categories, deleteCategory }) => {
  return (
    <div id="category-menu">
      <h2>Menú de Categorías</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            {category}
            <button id='botonCategoria' onClick={() => deleteCategory(category)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
