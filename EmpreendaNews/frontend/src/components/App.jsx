import { BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';

import PgInicial from './PgInicial';
import Home from './Home';
import QuemSomos from './QuemSomos';
import SetoresFinanceiro from './SetoresFinanceiro';
import SetoresTecnologia from './SetoresTecnologia';
import Contatos from './Contatos';

const App = () =>{

    return(
        <>   
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PgInicial/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/quemsomos' element={<QuemSomos/>}/>
                <Route path='/setores/financeiro' element={<SetoresFinanceiro/>}/>
                <Route path='/setores/tecnologia' element={<SetoresTecnologia/>}/>
                <Route path='/contatos' element={<Contatos/>}/>
                
            </Routes>
        </BrowserRouter>  
        </>
    )
}
export default App;