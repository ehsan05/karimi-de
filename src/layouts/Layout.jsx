import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'
import ParticlesBackground from "./Particle";
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n.js';
import { Outlet } from"react-router-dom";


export default function Layout(){
    return (
        <>
            <ParticlesBackground />
             <I18nextProvider i18n={i18n}>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
             </I18nextProvider>
        </>
    )
}