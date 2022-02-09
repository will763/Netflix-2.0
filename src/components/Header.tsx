import { HeaderStyle } from "../styles/HeaderStyle";

export function Header(){
    return(
        <HeaderStyle>
            <div className="container">
                <h2 className="logo">NETFLIX</h2>
                <nav>
                    <a href="#">Início</a>
                    <a href="#">Séries</a>
                    <a href="#">Filmes</a>
                    <a href="#">Documentários</a>
                </nav>
            </div>
        </HeaderStyle>
    )
}