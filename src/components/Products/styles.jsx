import styled from 'styled-components';

export const ProductListContainer = styled.article`
  width: 100%;
  height: auto;
  padding: 15px;

  display: flex;
  gap: 50px;
  overflow: auto;
  overflow-y: hidden;
`;

export const ProductContainer = styled.div`
  width: 160px;
  height: 100%;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const WallpaperImage = styled.img`
  width: 160px;
  margin-bottom: -40px;
  border-radius: ${({ theme }) => theme.border.radius.medium};
  box-shadow: 4px 0px 12px rgba(0, 0, 0, 0.2);

  position: ${({ $isModalOpen }) => ($isModalOpen === true ? 'static' : 'relative')};
  z-index: 1;
`;

export const DescriptionContainer = styled.div`
  width: 160px;
  height: 130px;
  max-height: 130px;
  margin-top: -40px;
  text-align: center;
  /* overflow: scroll; */

  border-radius: ${({ theme }) => theme.border.radius.medium};
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  position: ${({ $isModalOpen }) => ($isModalOpen === true ? 'static' : 'relative')};
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  img {
    height: 70px;
    background: transparent;
    margin-top: -40px;
    z-index: 5;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    font-size: ${({ theme }) => theme.fonts.size.small};
    color: ${({ theme }) => theme.color.black};

    text-overflow: ellipsis;
    white-space: wrap;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-weight: ${({ theme }) => theme.fonts.weight.normal};
    font-size: ${({ theme }) => theme.fonts.size.small};
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 25px;

    text-overflow: ellipsis;
    white-space: wrap;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    overflow: auto;
  }
`;
