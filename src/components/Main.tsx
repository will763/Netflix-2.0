import { MainStyle } from "../styles/MainStyle";

import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";


export function Main(){
    return(
       <MainStyle>
           <section className="filme-principal">
               <div className="container">
                   <h3 className="titulo">House of Cards</h3>
                   <p className="descricao">Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro.</p>
               </div>
               <div className="botoes">
                  <button>
                     <FaPlay  className="icons"/>
                     ASSISTIR AGORA
                   </button>
                  <button>
                     <FaInfoCircle className="icons" />
                     MAIS INFORMAÇÕES
                   </button>
                </div>
           </section>

       </MainStyle> 
    )
}