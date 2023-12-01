import React from 'react';
import { DescriptionContainer, ProductContainer, WallpaperImage } from './styles';
import combo from '../../assets/images/combo.jpg';
import burger from '../../assets/images/burger.jpg';
import drink from '../../assets/images/drink.jpg';
import dessert from '../../assets/images/dessert.jpg';
import accompaniment from '../../assets/images/accompaniment.jpg';

export default function ProductComponent({ product }) {
  const image = {
    Combo: combo,
    Dessert: dessert,
    Drink: drink,
    Accompaniment: accompaniment,
    Hamburger: burger,
  };
  const descriptionArray = product.description.split(/\s*,\s*/);
  return (
    <ProductContainer>
      <WallpaperImage src={image[product.type]} alt="wallpaper-product" />
      <DescriptionContainer>
        <figure>
          <img src={product.image} alt={product.name} />
        </figure>
        <div>
          <h3>{product.name}</h3>
          <p>{descriptionArray[0]}</p>
        </div>
        <h3>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price / 100)}</h3>
      </DescriptionContainer>
    </ProductContainer>
  );
}