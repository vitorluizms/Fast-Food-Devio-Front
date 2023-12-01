import React, { useEffect, useState } from 'react';
import Navbar from '../../components/NavBar';
import { productStore } from '../../store/ProductsStore';
import { NavCategoriesContainer, Container, TitleContainer, CategoriesContainer } from './styles';
import Category from '../../components/Categories';
import { useGenerateCategories } from '../../hooks/useGenerateCategories';
import CombosComponent from '../../components/Products/Combo';
import { getProducts } from '../../services/productsApi';
import BurgerComponent from '../../components/Products/Hamburger';
import AccompanimentComponent from '../../components/Products/Accompaniment';
import DrinkComponent from '../../components/Products/Drink';
import DessertComponent from '../../components/Products/Dessert';
import ModalComponent from '../../modal';

export default function Feed() {
  const { setProducts } = productStore();
  const [search, setSearch] = useState('');
  const { categories } = useGenerateCategories();

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    const response = await getProducts();
    setProducts(response.data);
  }

  return (
    <>
      <Navbar />
      <Container>
        <ModalComponent />
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
        <NavCategoriesContainer>
          <article>
            <h2>Produtos</h2>
            <p>Selecione um produto para adicionar ao seu pedido</p>
          </article>
        </NavCategoriesContainer>
        <CombosComponent />
        <BurgerComponent />
        <AccompanimentComponent />
        <DrinkComponent />
        <DessertComponent />
      </Container>
    </>
  );
}
