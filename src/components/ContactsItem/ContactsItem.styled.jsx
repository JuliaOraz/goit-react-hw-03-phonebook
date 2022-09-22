import styled from '@emotion/styled';

export const ItemContact = styled.li`
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 5px;
  font-size: 18px;
  box-shadow: 0 1px 4px rgb(0 0 0 / 10%);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ItemButton = styled.button`
  cursor: pointer;
  background: none;
  border-radius: 5px;
  padding: 5px 15px;
  border: 1px solid #3d3bce;
  color: #3d3bce;
  font-size: 16px;
  transition: background 250ms ease-in-out, color 250ms ease-in-out;

  :hover {
    color: #fff;
    background: #3d3bce;
  }
`;
