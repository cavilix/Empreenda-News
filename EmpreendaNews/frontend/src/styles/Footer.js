import styled from "styled-components"

const Cor = {
    RoxoClaro: "#E3E4F0",
    RoxoMedio: "#9594CD",
    RoxoMedio2: "#4B4E9F",
    RoxoEscuro: "#242666",
    Verde: "0FA943",
    White: "#ffffff"
}

export const Footer = styled.footer`
    background-color: #7789A5;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 7px;
    gap: 0.5em;
    padding-top: 15px;
`

export const Linha = styled.div`
    height: 60px;
    background-color: #000814;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextoLinha = styled.h1`
    color: ${Cor.RoxoClaro};
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
`
