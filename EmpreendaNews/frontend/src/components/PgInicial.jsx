import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import {PageInicialContainer,LogoImage} from '../styles/PgInicial.js';

import Img from '../../images/logo.png';

import HeaderPgI from './HeaderPgI'
import Rodape from './Footer'


const Login = () => {


return (
  <>
  <HeaderPgI/>
  <PageInicialContainer>
      <LogoImage src={Img} />
      
      <Link className="linkPgInicial" to='/home'>Entrar como visitante</Link>
    
     
    </PageInicialContainer>

<Rodape/>
</>
  );
};

export default Login;