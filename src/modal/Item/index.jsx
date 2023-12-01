import React from 'react';
import { DescriptionContainer, ItemContainer, WallpaperImage } from './styles';
import combo from '../../assets/images/combo.jpg';
import burger from '../../assets/images/burger.jpg';
import drink from '../../assets/images/drink.jpg';
import dessert from '../../assets/images/dessert.jpg';
import accompaniment from '../../assets/images/accompaniment.jpg';

export default function Item({ product }) {
  const image = {
    Combo: combo,
    Dessert: dessert,
    Drinks: drink,
    Accompaniment: accompaniment,
    Hamburger: burger,
  };
  return (
    <ItemContainer>
      <WallpaperImage src={image[product.type]} alt="wallpaper-product" />
      <DescriptionContainer>
        <img src={product.image} alt={product.name} />
      </DescriptionContainer>
    </ItemContainer>
  );
}
