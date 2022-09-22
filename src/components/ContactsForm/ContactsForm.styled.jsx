import styled from '@emotion/styled';

export const FormContacts = styled.form`
  background-color: #f1f1f1;
  padding: 10px 30px 25px;
  border-radius: 5px;
  width: 25%;
  margin: 0 auto 40px;
`;
export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  text-align: left;
  font-size: 18px;
`;
export const FormInput = styled.input`
  border: none;
  height: 40px;
  border-radius: 5px;
  padding: 0 10px;
  margin-top: 5px;

  :focus {
    outline: 1px solid #dbdbdb;
    box-shadow: 0px 3px 9px #3333331c;
  }
`;
export const FormButton = styled.button`
  margin-top: 25px;
  border: none;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #423bcf;
  width: 100%;
  color: #fff;
  font-size: 16px;
  transition: background-color 250ms ease-in-out;

  :hover {
    background-color: #271ecf;
  }
`;
