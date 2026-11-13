import Image from 'next/image'
import React from 'react'
import eagleLogo from "@/assets/images/eagle-logo.png";

const About = () => {
    return (
        <div className="relative w-full min-h-screen">
            {/* Content Container */}
            <div className="relative px-4 sm:px-20 pt-20 pb-10 sm:pb-0 flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-start">
                {/* Top Left - Logo and EST */}
                <div className='flex items-center gap-2 w-full lg:w-1/2'>
                    <Image src={eagleLogo} alt="Eagle" className="w-8 sm:w-10 h-8 sm:h-10 object-contain" />
                    <span className='italic text-white text-2xl sm:text-3xl'>Eagle</span>
                    <div className='flex flex-col pl-8'>
                        <p className='uppercase text-white text-[9px] tracking-tight'>Aviação Privada</p>
                        <p className='text-white text-[9px] tracking-tight'>desde 2013</p>
                    </div>
                </div>

                {/* Content Grid - 2 rows, 2 columns */}
                <div className='grid grid-cols-2 gap-10 w-full lg:w-2/3 text-white pr-0 lg:pr-20'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-base sm:text-xl tracking-tight'>Acesso Direto a Viagens Privadas</h1>
                        <span>——</span>
                        <p className='text-[10px]'>Voe além das fronteiras com a Eagle. Nossas operações globais garantem experiências de viagem contínuas e personalizadas — do primeiro contato ao pouso. Cada jornada é feita sob medida para seu conforto, privacidade e agenda.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-base sm:text-xl tracking-tight'>Sua Liberdade de Aproveitar a Vida</h1>
                        <span>——</span>
                        <p className='text-[10px]'>Valorizamos seu tempo acima de tudo. A Eagle te dá a liberdade de viver, trabalhar e relaxar onde a vida te levar — sem concessões. Cada jornada é cuidadosamente pensada para o seu ritmo, prioridades e propósito.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-base sm:text-xl tracking-tight'>Precisão e Excelência com a Gente</h1>
                        <span>——</span>
                        <p className='text-[10px]'>Cada detalhe do seu voo — do planejamento de rota ao serviço a bordo — reflete nossa dedicação à perfeição. Nossa tripulação e frota atendem aos mais altos padrões globais, garantindo confiabilidade em cada missão.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-base sm:text-xl tracking-tight'>Alcance Global, Toque Pessoal</h1>
                        <span>——</span>
                        <p className='text-[10px]'>Com acesso a destinos em mais de 150 países, a Eagle aproxima o mundo de você. Nossos especialistas cuidam de cada aspecto do seu voo, garantindo uma jornada tranquila e sem esforço.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About