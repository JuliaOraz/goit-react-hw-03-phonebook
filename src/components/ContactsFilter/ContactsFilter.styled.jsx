import styled from '@emotion/styled';

export const FilterInput = styled.input`
  padding: 0 10px;
  border-radius: 5px;
  height: 35px;
  width: calc(100% - 45%);
  border: none;

  :focus {
    outline: 1px solid #dbdbdb;
    box-shadow: 0px 3px 9px #3333331c;
  }
`;
export const FilterLabel = styled.label`
  background-color: #f1f1f1;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(30% - 30px);
  margin: 0 auto 20px;
`;
