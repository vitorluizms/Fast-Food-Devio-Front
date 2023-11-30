import React, { useEffect, useState } from 'react';
import Navbar from '../../components/NavBar';
import { useGetProducts } from '../../hooks/useGetProduct';
import { productStore } from '../../store/ProductsStore';
import { NavCategoriesContainer, Container, TitleContainer, CategoriesContainer } from './styles';
import Category from './Categories';
import { useGenerateCategories } from '../../hooks/useGenerateCategories';

export default function Feed() {
  const { products } = productStore();
  const { getProducts } = useGetProducts();
  const [search, setSearch] = useState('');
  const { categories } = useGenerateCategories();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <TitleContainer>
          <h1>Seja bem vindo!</h1>
          <form>
            <input
              name="search"
              id="search"
              placeholder="O que você procura?"
              type="text"
              autoComplete="off"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </form>
        </TitleContainer>
        <NavCategoriesContainer>
          <article>
            <h2>Categorias</h2>
            <p>Navegue por categoria</p>
          </article>
          <CategoriesContainer>
            {categories.map(element => (
              <Category key={element.name} category={element} />
            ))}
          </CategoriesContainer>
        </NavCategoriesContainer>
      </Container>
    </>
  );
}
