export const useGenerateCategories = () => {
  const categories = [
    {
      name: 'Combo',
      image:
        'https://media.istockphoto.com/id/505623656/pt/foto/grande-cheeseburger-com-batatas-fritas-isolado-em-fundo-branco.jpg?s=612x612&w=0&k=20&c=mUuzdkSHAX7lD0bM1REqCr0L3IYyJ_TSA1jV3vNA5lg=',
      portuguese: 'Combos',
    },
    {
      name: 'Hamburger',
      image:
        'https://img.freepik.com/fotos-premium/delicioso-hamburguer-fresco-isolado-no-fundo-branco-close-up_93675-104918.jpg',
      portuguese: 'Hambúrgueres',
    },
    {
      name: 'Accompaniment',
      image:
        'https://img.freepik.com/fotos-premium/uma-batata-frita-crocante-isolada-em-um-fundo-branco_890183-3915.jpg',
      portuguese: 'Acompanhamentos',
    },
    {
      name: 'Drink',
      image: 'https://i.pinimg.com/originals/e6/b8/f8/e6b8f8c516a80440cac570cefddc175f.jpg',
      portuguese: 'Bebidas',
    },
    {
      name: 'Dessert',
      image: 'https://img.freepik.com/fotos-premium/um-pudim-de-caramelo-esta-em-um-fundo-branco_871710-1355.jpg',
      portuguese: 'Sobremesas',
    },
  ];

  return {
    categories,
  };
};
