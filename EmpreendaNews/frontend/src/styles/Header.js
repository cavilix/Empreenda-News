import styled, {keyframes} from "styled-components"

const Cor = {
    RoxoClaro: "#E3E4F0",
    RoxoMedio: "#9594CD",
    RoxoMedio2: "#4B4E9F",
    RoxoEscuro: "#242666",
    Verde: "0FA943",
    White: "#ffffff"
}


export const teste = keyframes`
    from {
        opacity: 0;
        transform: translateX(15px);
    }

    to {
        opacity: 1;
    }
`

export const Dropdown = styled.div`
    position: absolute;
    background-color: #fff;
    justify-content: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 8px 0;
    
`;

export const DropdownItem = styled.div`
    padding: 8px 16px;
    cursor: pointer;

    a {
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;
        color: #333;
        font-size: 14px;
    }

    &:hover {
        background-color: #f4f4f4;
    }
`;


export const Navbar = styled.nav`
    background-color: #000814;
    color: ${Cor.White};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 120px;

    animation: ${teste} 1s ease-in-out;
`

export const DivLogo = styled.div`
    display: flex;
    
`

export const Img = styled.img`
    margin-left: 20px;
    margin-right: 60px;
    width: 100px;
    height: 40px;
`

export const Paginas = styled.div`
    color: ${Cor.White};
    display: flex;
`