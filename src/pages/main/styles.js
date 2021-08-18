import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 980px;
  height: 100%;
  margin: auto;
  border-radius: 20px;
  background-image: url("/img/bg.jpg");
  position: relative;
`;

export const Title = styled.div`
  position: absolute;
  top: -20px;
  left: 350px;
  font-size: 50px;
  color: #3e2723;
  background-color: #ffffff50;
  border: 3px solid #000;
  border-radius: 15px;
  padding: 15px;
  font-weight: bold;
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 20px 20px 0 0;
  text-align: end;
  padding-top: 15px;
  padding-right: 30px;
`;

export const Word = styled.span`
  font-size: 22px;
  border: 3px solid black;
  border-radius: 15px;
  padding: 2px 15px;
  cursor: pointer;
  background-color: #ffd54f;
  font-weight: bold;
  display: inline-block;
  transition: transform 100ms ease-in;
  :hover {
    transform: scale(1.1);
  }
`;

export const Field = styled.div`
  width: 100%;
  height: 100%;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100px;
  border-radius: 0 0 20px 20px;
  padding-right: 100px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  font-size: 30px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin-left: 20px;
  border-radius: 50%;
  background-color: #ffd54f;
  border: 3px solid black;
  transition: transform 100ms ease-in;
  :hover {
    transform: scale(1.1);
  }
`;
