import styled from "styled-components";

export const MainStyle = styled.main`
   margin-bottom: 20px;
    
    section {
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        font-size: 16px;
        background: linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,.5)), url('https://www.themoviedb.org/t/p/original/uDsfvUyhtaQZcAkwDPrRgN3SxnX.jpg') no-repeat;
        background-size: cover;
        height: 400px;
    }

    section div h3 {
        margin-top: 15%;
        font-size: 40px;
        font-family: 'Trebuchet MS', Arial, sans-serif;
    }

    section div p {
        width: 60%;
        margin-top: 10px;
        margin-bottom: 40px;
    }

    section .botoes {
        display: flex;
        flex-direction: row;
    }

    section div button {
        width: 320px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: rgba(0,0,0,.5);
        color: white;
        padding: 15px 32px;
        margin-right:15px ;
        font-size: 12px;
        cursor: pointer;
        transition: all .35s ease-in-out;
    }

    section div button .icons{
        margin-right: 10px;
        height: 1rem;
        width: 1rem;
    }

    section div button:hover {
        background-color: white;
        color: black;
    }

    @media screen and (max-width : 700px){

        section .botoes {
            flex-direction: column;
        }

        section div button {
            width: 300px;
            margin-top: 5px;
        }
    }

    @media screen and (min-width : 1000px){
    
        section div p {
          width: 50%;
       }
    }
`;