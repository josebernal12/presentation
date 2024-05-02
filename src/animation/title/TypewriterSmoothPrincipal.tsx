"use client";
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
            <button className="bg-white text-black rounded-2xl p-3  flex gap-3 hover:scale-105 transition-all font-bold">
                Comenzar Ahora Mismo
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </div>
    );
}
