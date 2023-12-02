import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/NavBar';
import { productStore } from '../../store/ProductsStore';
import {
  NavCategoriesContainer,
  Container,
  TitleContainer,
  CategoriesContainer,
  ButtonContainer,
  CancelProduct,
  AddToCart,
} from './styles';
import Category from '../../components/Categories';
import { useGenerateCategories } from '../../hooks/useGenerateCategories';
import CombosComponent from '../../components/Products/Combo';
import { getProducts } from '../../services/productsApi';
import BurgerComponent from '../../components/Products/Hamburger';
import AccompanimentComponent from '../../components/Products/Accompaniment';
import DrinkComponent from '../../components/Products/Drink';
import DessertComponent from '../../components/Products/Dessert';
import ModalComponent from '../../modal';
import { searchStore } from '../../store/SearchStore';
import { useSearch } from '../../hooks/useSearch';
import { cartStore } from '../../store/CartStore';
import { Resume } from '../../components/Resume';

export default function Feed() {
  const { setProducts } = productStore();
  const { search, setSearch } = searchStore();
  const { categories } = useGenerateCategories();
  const { searchProduct } = useSearch();
  const { productsArray, setProductsArray } = cartStore();
  const navigate = useNavigate();

  useEffect(() => {
    getProduct();
    setProductsArray([]);
  }, []);

  async function getProduct() {
    const response = await getProducts();
    setProducts(response.data);
  }

  function handleSearch(e) {
    e.preventDefault();

    searchProduct(search);
  }

  return (
    <>
      <Navbar />
      <Container>
        <ModalComponent />
        <TitleContainer>
          <h1>Seja bem vindo!</h1>
          <form onSubmit={handleSearch}>
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
        {productsArray.length > 0 ? <Resume /> : ''}
        <ButtonContainer>
          <CancelProduct disabled={productsArray.length === 0} $isDisabled={productsArray.length === 0}>
            Cancelar
          </CancelProduct>
          <AddToCart
            disabled={productsArray.length === 0}
            $isDisabled={productsArray.length === 0}
            onClick={() => navigate('/payment')}
          >
            Finalizar pedido
          </AddToCart>
        </ButtonContainer>
      </Container>
    </>
  );
}
