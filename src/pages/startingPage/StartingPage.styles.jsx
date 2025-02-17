import styled from "@emotion/styled";

// const topColor = "#fcc0b2";

const buttonStyle = `
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px; 
  font-size: 25px; 
  font-weight: 600;
  color: black;
  border-radius: 14px;
  background-color: white;
  cursor: pointer;
`;

// export const Card = styled.div`
//   height: 259px;
//   width: 205px;
//   background-color: red;
//   border-radius: 12px;
// `;

// export const CardTod = styled.div`
//   height: 14px;
//   background-color: ${topColor};
//   border-radius: 7px 7px 0 0;
// `;

// export const CardContent = styled.div`
//   height: 47px;
//   width: 47px;
//   border-radius: 24px;
//   background-color: blue;
// `;

export const LogoImg = styled.div`
  border-radius: 50px;
  margin-bottom: 100px;
  background-color: transparent;

  img {
    height: 300px;
    width: 300px;
    filter: drop-shadow(10px 6px 6px #c3c3c3);
  }
`;

export const SignUpBt = styled.button`
  ${buttonStyle};
  padding-top: 12px;
  padding-bottom: 8px;
  /* height: 54px; */
  width: 162px;
  margin-bottom: 29px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
  }
`;

export const LoginBt = styled.button`
  ${buttonStyle};
  /* height: 54px; */
  padding-top: 12px;
  padding-bottom: 8px;
  width: 133px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
  }
`;

export const Auth = styled.form`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    margin-top: 100px;
  }
`;
