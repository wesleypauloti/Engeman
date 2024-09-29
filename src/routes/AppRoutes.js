import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';

import TelaLogin from '../views/TelaLogin';
import RecuperarSenha from '../views/RecuperarSenha';
import SolicitacaoServico from '../components/SolicitacaoServico';
import Tela1 from '../views/Tela1';
import Tela2 from '../views/Tela2';
import Tela3 from '../views/Tela3';

function AppRoutes() {    

    return (
        <Routes>
            <Route path="/" element={<TelaLogin />} />
            <Route path="/RecuperarSenha" element={<RecuperarSenha />} />
            <Route path="/SolicitacaoServico" element={<SolicitacaoServico />} />
            <Route path="/Tela1" element={<Tela1 />} />
            <Route path="/Tela2" element={<Tela2 />} />
            <Route path="/Tela3" element={<Tela3 />} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default AppRoutes;
