import React from 'react';
import { CategoryContainer } from './styles';
import { refStore } from '../../store/useRefScroll';

export default function Category({ category }) {
  const { scrollTargets } = refStore();
  function handleClick() {
    console.log(scrollTargets);
    const target = scrollTargets[category.name];
    if (target && target.current) {
      target.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <CategoryContainer onClick={() => handleClick()}>
      <figure>
        <img src={category.image} alt={category.name} />
      </figure>
      <h2>{category.portuguese}</h2>
    </CategoryContainer>
  );
}
