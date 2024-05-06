"use client";
import Modal from '../../components/modal/Modal';
import { TypewriterEffectSmooth } from './TypeWriterEffect'
export function TypewriterEffectSmoothPrincipal() {
    const words = [
        {
            text: "Gestiona con Sabor",
        },
        {
            text: "Tu Solucion Integral",
        },
        {
            text: "Para",
        },
        {
            text: " Pedidos de",
        },
        {
            text: "Restaurantes.",
            className: "text-purple-800 dark:text-purple-800",
        },
    ];
    return (
        <div className="imagen-header flex flex-col items-center justify-center space-y-5 ">
            <TypewriterEffectSmooth words={words} />
            <Modal/>

        </div>
    );
}
