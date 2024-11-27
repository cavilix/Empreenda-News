import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';

import { Navbar, Img, Paginas, DivLogo, Dropdown, DropdownItem } from '../styles/Header';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <Navbar>
            <DivLogo>
                <Link to='/'><Img src={logo} alt="Logo" /></Link>
            </DivLogo>
            <Paginas>
                <Link className="linkNav" to='/home'>INÍCIO</Link>
                <Link className="linkNav" to='/quemsomos'>QUEM SOMOS</Link>
                <div 
                    className="dropdown" 
                    onMouseEnter={toggleDropdown} 
                    onMouseLeave={toggleDropdown}
                >
                    <span className="linkNav">SETORES</span>
                    {dropdownOpen && (
                        <Dropdown>
                            <DropdownItem>
                                <Link to="/setores/financeiro">Financeiro</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/setores/tecnologia">Tecnologia</Link>
                            </DropdownItem>
                        </Dropdown>
                    )}
                </div>
                <Link className="linkNav" to='/contatos'>CONTATOS</Link>
            </Paginas>
        </Navbar>
    );
};

export default Header;
