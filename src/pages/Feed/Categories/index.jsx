import React from 'react';
import { CategoryContainer } from './styles';

export default function Category({ category }) {
  return (
    <CategoryContainer>
      <figure>
        <img src={category.image} alt={category.name} />
      </figure>
      <h2>{category.portuguese}</h2>
    </CategoryContainer>
  );
}
