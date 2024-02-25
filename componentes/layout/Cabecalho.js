import Image from 'next/image';
import { useState } from 'react';
import logoHorizontalImg from '../../public/images/logoHorizontal.svg';
import imagemLupa from '../../public/images/lupa.svg';
import Navegacao from './Navegacao';

export default function Cabecalho() {
    return (
        <header className='cabecalhoPrincipal'>
            <div className='conteudoCabecalhoPrincipal'>
                <div className='logoCabecalhoPrincipal'>
                    <Image
                        src={logoHorizontalImg}                  
                        alt='logo devagram'
                        layout='fill'
                    />
                </div>

                <div className='barraPesquisa'>
                    <div className='containerImagemLupa'>
                        <Image 
                            src={imagemLupa}
                            alt='Icone lupa'
                            layout='fill'
                        />
                    </div>

                    <input
                        type='text'
                        placeholder='Pesquisar'
                        value={''}
                        onChange={() => consolelog('pesquisando')}
                    />
                </div>

                <Navegacao className='desktop' />
            </div>
        </header>
    );
}