import styled from "styled-components";


export const HeaderStyle = styled.header`
  background-color: #141414;
  .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  
  .container .logo {
    margin-left: 5px;
    color: #E50914;
    font-family: 'Arial Black', Times;
    font-size: 40px;
  } 
  
  .container  nav a {
      transition: color .250s ease-in-out ;
      text-decoration: none;
      color: #AAA;
      margin-right: 10px;
  }

  .container  nav a:hover {
      color: #fff;
  }

  @media screen and (max-width : 700px){
     .container {
       flex-direction: column;
     } 
  }
`;