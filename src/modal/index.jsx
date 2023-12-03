import React, { useState } from 'react';
import Modal from 'react-modal';
import {
  AddToCart,
  AmountPayContainer,
  ButtonContainer,
  CancelProduct,
  CountContainer,
  DescriptionContainer,
  ImageContainer,
  ProductDescription,
  ProductListContainer,
  ResumeContainer,
  StyledClose,
  StyledModal,
  ToppingContainer,
  ToppingSection,
  ToppingTitleContainer,
} from './styles';
import { modalStore } from '../store/ModalStore';
import { itemStore } from '../store/ProductStore';
import Item from './Item';
import Topping from './Topping';
import { useGenerateProductObject } from '../hooks/useGenerateProductObject';

Modal.setAppElement('#root');

export default function ModalComponent() {
  const { isModalOpen, setIsModalOpen } = modalStore();
  const { productSelected, totalPayProduct, setTotalPayProduct } = itemStore();

  const [count, setCount] = useState(1);
  const [clicked, setClicked] = useState([]);
  const [observation, setObservation] = useState('');
  console.log(observation);

  const { generateProductObject } = useGenerateProductObject();

  function requestClose() {
    setIsModalOpen(false);
    setCount(1);
    setClicked([]);
    setObservation('');
  }

  function addObject() {
    generateProductObject({
      product: productSelected,
      toppings: clicked,
      observation,
      quantity: count,
      amountPay: totalPayProduct,
    });
    requestClose();
  }

  return (
    <StyledModal
      isOpen={isModalOpen}
      onRequestClose={() => requestClose()}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
      }}
    >
      {' '}
      <section>
        <h1>Revise seu pedido!</h1>
        <StyledClose onClick={() => requestClose()} />
      </section>
      <ProductDescription>
        <ImageContainer>
          <Item product={productSelected} />
          <DescriptionContainer>
            <h2>{productSelected.name}</h2>
            <p>{productSelected.description}</p>
            <CountContainer>
              <button
                onClick={() => {
                  setCount(count - 1);
                  setTotalPayProduct(productSelected.price, 'substraction');
                }}
                disabled={count <= 1}
                type="submit"
              >
                -
              </button>
              <p>{count}</p>
              <button
                onClick={() => {
                  setCount(count + 1);
                  setTotalPayProduct(productSelected.price, 'sum');
                }}
                type="submit"
              >
                +
              </button>
            </CountContainer>
          </DescriptionContainer>
        </ImageContainer>
        <h2>
          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(productSelected.price / 100)}
        </h2>
      </ProductDescription>
      {productSelected.Topping?.length > 0 ? (
        <ToppingSection>
          <ToppingTitleContainer>
            <h2>Adicionais</h2>
            <p>Selecione os ingredientes que você quer adicionar a mais no seu lanche</p>
          </ToppingTitleContainer>
          <ToppingContainer>
            {productSelected.Topping?.map(element => (
              <Topping key={element.id} product={element} clicked={clicked} setClicked={setClicked} />
            ))}
          </ToppingContainer>
        </ToppingSection>
      ) : (
        ''
      )}
      <form>
        <h2>Observações</h2>
        <textarea
          id="observation"
          name="observation"
          placeholder="Adicione uma observação ao pedido"
          value={observation}
          onChange={e => setObservation(e.target.value)}
        />
      </form>
      <ResumeContainer>
        <ProductListContainer>
          <div>
            <h4>{`${count}x ${productSelected.name}`}</h4>
            <h4>
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                productSelected.price / 100,
              )}
            </h4>
          </div>
          {clicked.map(element => (
            <div key={element.name}>
              <h4>{`1x ${element.name}`}</h4>
              <h4>
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(element.price / 100)}
              </h4>
            </div>
          ))}
        </ProductListContainer>
        <AmountPayContainer>
          <h4>Total do pedido:</h4>
          <h2>
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPayProduct / 100)}
          </h2>
        </AmountPayContainer>
      </ResumeContainer>
      <ButtonContainer>
        <CancelProduct onClick={() => requestClose()}>Continuar adicionando</CancelProduct>
        <AddToCart onClick={() => addObject()}>Adicionar ao pedido</AddToCart>
      </ButtonContainer>
    </StyledModal>
  );
}
